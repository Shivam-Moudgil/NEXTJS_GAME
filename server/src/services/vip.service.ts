import VipTierModel, { VipTierLevel, VIP_TIER_CONFIG, IVipTier } from "../models/vip-tier.model";
import TransactionModel from "../models/transaction.model";
import { logger } from "../utils/logger";
import mongoose from "mongoose";

class VipService {
  /**
   * Calculate user's spending in the last 7 days
   */
  async calculate7DaySpending(userId: string | mongoose.Types.ObjectId): Promise<number> {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const result = await TransactionModel.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId.toString()),
          type: "deposit",
          status: "completed",
          createdAt: { $gte: sevenDaysAgo },
        },
      },
      {
        $group: {
          _id: null,
          totalSpending: { $sum: "$amount" },
        },
      },
    ]);

    return result.length > 0 ? result[0].totalSpending : 0;
  }

  /**
   * Calculate user's lifetime spending
   */
  async calculateLifetimeSpending(userId: string | mongoose.Types.ObjectId): Promise<number> {
    const result = await TransactionModel.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId.toString()),
          type: "deposit",
          status: "completed",
        },
      },
      {
        $group: {
          _id: null,
          totalSpending: { $sum: "$amount" },
        },
      },
    ]);

    return result.length > 0 ? result[0].totalSpending : 0;
  }

  /**
   * Determine VIP tier based on spending amount
   */
  determineTier(spending: number): VipTierLevel {
    // Sort tiers by minSpend in descending order to find the highest applicable tier
    const tiers = Object.entries(VIP_TIER_CONFIG)
      .sort(([, a], [, b]) => b.minSpend - a.minSpend);

    for (const [tier, config] of tiers) {
      if (spending >= config.minSpend) {
        return tier as VipTierLevel;
      }
    }

    return VipTierLevel.NONE;
  }

  /**
   * Get or create VIP tier record for user
   */
  async getOrCreateVipTier(userId: string | mongoose.Types.ObjectId): Promise<IVipTier> {
    let vipTier = await VipTierModel.findOne({ userId });

    if (!vipTier) {
      logger.info(`Creating new VIP tier record for user ${userId}`);
      vipTier = await VipTierModel.create({
        userId,
        currentTier: VipTierLevel.NONE,
        isVipConfirmed: true, // Automatic VIP - only set to false for suspension
        last7DaysSpending: 0,
        totalLifetimeSpending: 0,
        tierHistory: [],
        birthdayBonusClaimed: false,
        bonusSpinsRemaining: 0,
      });
    }

    return vipTier;
  }

  /**
   * Update user's VIP tier based on current spending
   * Implements 14-day VIP period with tier locking
   */
  async updateUserTier(userId: string | mongoose.Types.ObjectId): Promise<IVipTier> {
    const vipTier = await this.getOrCreateVipTier(userId);
    const now = new Date();
    
    // Calculate current spending
    const last7DaysSpending = await this.calculate7DaySpending(userId);
    const totalLifetimeSpending = await this.calculateLifetimeSpending(userId);
    
    // Update spending amounts
    vipTier.last7DaysSpending = last7DaysSpending;
    vipTier.totalLifetimeSpending = totalLifetimeSpending;
    
    const previousTier = vipTier.currentTier;
    const newTier = this.determineTier(last7DaysSpending);
    
    // Check if we're within an active VIP period
    const hasActivePeriod = vipTier.vipPeriodEndDate && now < vipTier.vipPeriodEndDate;
    
    if (hasActivePeriod) {
      // During active period, only allow UPGRADES (no downgrades)
      if (this.isTierHigher(newTier, previousTier)) {
        logger.info(`User ${userId} upgraded from ${previousTier} to ${newTier} during active period - resetting 14-day timer`);
        
        // Upgrade and reset 14-day period
        vipTier.currentTier = newTier;
        vipTier.vipPeriodStartDate = now;
        vipTier.vipPeriodEndDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
        
        vipTier.tierHistory.push({
          tier: newTier,
          achievedAt: now,
          spendingAtTime: last7DaysSpending,
        });
        
        // Grant period-based bonus spins for new tier
        this.grantPeriodBonusSpins(vipTier, newTier);
      } else {
        // No change or downgrade - tier stays locked during period
        logger.debug(`User ${userId} tier locked at ${previousTier} until period ends (${vipTier.vipPeriodEndDate})`);
      }
    } else {
      // No active period or period expired - recalculate freely
      if (newTier !== previousTier) {
        logger.info(`User ${userId} tier changed from ${previousTier} to ${newTier} - starting new 14-day period`);
        
        vipTier.currentTier = newTier;
        
        // Start new 14-day VIP period (only for VIP tiers, not "none")
        if (newTier !== VipTierLevel.NONE) {
          vipTier.vipPeriodStartDate = now;
          vipTier.vipPeriodEndDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
          
          // Grant period-based bonus spins
          this.grantPeriodBonusSpins(vipTier, newTier);
        } else {
          // Dropped to standard - clear period
          vipTier.vipPeriodStartDate = undefined;
          vipTier.vipPeriodEndDate = undefined;
          vipTier.bonusSpinsRemaining = 0;
        }
        
        vipTier.tierHistory.push({
          tier: newTier,
          achievedAt: now,
          spendingAtTime: last7DaysSpending,
        });
      } else if (newTier !== VipTierLevel.NONE && !hasActivePeriod) {
        // Still qualify for same tier but period expired - restart period
        logger.info(`User ${userId} still qualifies for ${newTier} - restarting 14-day period`);
        vipTier.vipPeriodStartDate = now;
        vipTier.vipPeriodEndDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
        
        // Grant fresh bonus spins for new period
        this.grantPeriodBonusSpins(vipTier, newTier);
      }
    }
    
    await vipTier.save();
    return vipTier;
  }
  
  /**
   * Helper: Check if tier A is higher than tier B
   */
  private isTierHigher(tierA: VipTierLevel, tierB: VipTierLevel): boolean {
    const tierOrder = Object.values(VipTierLevel);
    return tierOrder.indexOf(tierA) > tierOrder.indexOf(tierB);
  }
  
  /**
   * Helper: Grant bonus spins for VIP period
   */
  private grantPeriodBonusSpins(vipTier: any, tier: VipTierLevel): void {
    const tierConfig = VIP_TIER_CONFIG[tier];
    
    if (tierConfig.bonusSpins > 0) {
      const now = new Date();
      vipTier.bonusSpinsRemaining = tierConfig.bonusSpins;
      vipTier.bonusSpinsGrantedAt = now;
      vipTier.bonusSpinsExpireAt = vipTier.vipPeriodEndDate;
      
      logger.info(`Granted ${tierConfig.bonusSpins} bonus spins to user for ${tier} tier (valid until ${vipTier.vipPeriodEndDate})`);
    }
  }

  /**
   * Calculate deposit bonus based on amount and VIP status
   */
  calculateDepositBonus(
    amount: number,
    isVip: boolean,
    tierLevel: VipTierLevel
  ): { baseBonus: number; vipBonus: number; totalBonus: number; multiplier: number } {
    // Standard bonus calculation (existing logic)
    let baseBonus: number;
    
    if (amount >= 50) {
      baseBonus = 500;
    } else if (amount >= 20) {
      baseBonus = 300;
    } else if (amount >= 10) {
      baseBonus = 200;
    } else if (amount >= 5) {
      baseBonus = 100;
    } else {
      // For amounts less than $5, calculate proportionally
      const bonusTier = Math.floor(amount / 10);
      baseBonus = Math.min((bonusTier + 1) * 100, 500);
    }

    // Apply VIP multiplier if confirmed VIP
    const tierConfig = VIP_TIER_CONFIG[tierLevel];
    const multiplier = isVip && tierLevel !== VipTierLevel.NONE ? tierConfig.bonusMultiplier : 1;
    const totalBonus = baseBonus * multiplier;
    const vipBonus = totalBonus - baseBonus;

    return {
      baseBonus,
      vipBonus,
      totalBonus,
      multiplier,
    };
  }

  /**
   * Get VIP tier configuration
   */
  getTierConfig(tier: VipTierLevel) {
    return VIP_TIER_CONFIG[tier];
  }

  /**
   * Check if user is eligible for birthday bonus
   * Supports 3-day claim window (day before, birthday, day after)
   */
  async checkBirthdayBonusEligibility(
    userId: string | mongoose.Types.ObjectId,
    userBirthday?: string
  ): Promise<{ eligible: boolean; bonusAmount: number; reason?: string }> {
    if (!userBirthday) {
      return { eligible: false, bonusAmount: 0, reason: "No birthday set" };
    }

    const vipTier = await this.getOrCreateVipTier(userId);
    
    // Check if VIP is suspended or not in any VIP tier
    if (!vipTier.isVipConfirmed || vipTier.currentTier === VipTierLevel.NONE) {
      return { eligible: false, bonusAmount: 0, reason: "Not a VIP member (must reach Iron tier or above)" };
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of day
    
    const birthday = new Date(userBirthday);
    birthday.setFullYear(today.getFullYear()); // Set to current year
    birthday.setHours(0, 0, 0, 0);
    
    // Calculate 3-day window
    const dayBefore = new Date(birthday);
    dayBefore.setDate(dayBefore.getDate() - 1);
    
    const dayAfter = new Date(birthday);
    dayAfter.setDate(dayAfter.getDate() + 1);
    
    // Check if today is within the 3-day window
    const isWithinWindow = today >= dayBefore && today <= dayAfter;
    
    if (!isWithinWindow) {
      return { eligible: false, bonusAmount: 0, reason: "Not within birthday window (day before, birthday, or day after)" };
    }

    // Check if already claimed this year
    if (vipTier.lastBirthdayBonusDate) {
      const lastClaimYear = new Date(vipTier.lastBirthdayBonusDate).getFullYear();
      if (lastClaimYear === today.getFullYear()) {
        return { eligible: false, bonusAmount: 0, reason: "Already claimed this year" };
      }
    }

    const tierConfig = this.getTierConfig(vipTier.currentTier);
    return {
      eligible: true,
      bonusAmount: tierConfig.birthdayBonus,
    };
  }

  /**
   * Claim birthday bonus
   */
  async claimBirthdayBonus(userId: string | mongoose.Types.ObjectId): Promise<number> {
    const vipTier = await this.getOrCreateVipTier(userId);
    const tierConfig = this.getTierConfig(vipTier.currentTier);
    
    vipTier.lastBirthdayBonusDate = new Date();
    await vipTier.save();
    
    logger.info(`User ${userId} claimed birthday bonus: ${tierConfig.birthdayBonus} GC`);
    return tierConfig.birthdayBonus;
  }

  /**
   * Check daily redemption limit based on VIP tier
   */
  async checkRedemptionLimit(
    userId: string | mongoose.Types.ObjectId,
    requestedAmount: number
  ): Promise<{ allowed: boolean; limit: number; reason?: string }> {
    const vipTier = await this.getOrCreateVipTier(userId);
    const tierConfig = this.getTierConfig(vipTier.currentTier);
    const dailyLimit = tierConfig.scRedemptionLimit;

    // Calculate today's SC redemptions from withdrawal requests
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    // Import WithdrawalRequest model dynamically to avoid circular dependency
    const WithdrawalRequestModel = (await import("../models/withdrawal-request.model")).default;

    const todayRedemptions = await WithdrawalRequestModel.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId.toString()),
          status: { $in: ["pending", "approved", "processed"] }, // Only count active/processed requests
          createdAt: { $gte: startOfDay },
        },
      },
      {
        $group: {
          _id: null,
          totalRedeemed: { $sum: "$amount" },
        },
      },
    ]);

    const alreadyRedeemed = todayRedemptions.length > 0 ? todayRedemptions[0].totalRedeemed : 0;
    const remainingLimit = dailyLimit - alreadyRedeemed;

    if (requestedAmount > remainingLimit) {
      return {
        allowed: false,
        limit: dailyLimit,
        reason: `Daily SC redemption limit exceeded. Already redeemed: ${alreadyRedeemed} SC, Limit: ${dailyLimit} SC, Remaining: ${remainingLimit} SC`,
      };
    }

    return {
      allowed: true,
      limit: dailyLimit,
    };
  }

  /**
   * Get user's VIP status and perks
   */
  async getUserVipStatus(userId: string | mongoose.Types.ObjectId) {
    await this.updateUserTier(userId);
    const vipTier = await this.getOrCreateVipTier(userId);
    const tierConfig = this.getTierConfig(vipTier.currentTier);
    
    // Calculate Arcade Tickets (1 ticket per $50 spent)
    const arcadeTickets = Math.floor(vipTier.last7DaysSpending / 50);
    
    // Calculate days remaining in VIP period
    let daysRemainingInPeriod = 0;
    if (vipTier.vipPeriodEndDate) {
      const now = new Date();
      const timeRemaining = vipTier.vipPeriodEndDate.getTime() - now.getTime();
      daysRemainingInPeriod = Math.max(0, Math.ceil(timeRemaining / (24 * 60 * 60 * 1000)));
    }
    
    return {
      tier: vipTier.currentTier,
      tierName: tierConfig.name,
      isVipConfirmed: vipTier.isVipConfirmed,
      last7DaysSpending: vipTier.last7DaysSpending,
      totalLifetimeSpending: vipTier.totalLifetimeSpending,
      
      // Arcade Tickets display
      arcadeTickets,
      arcadeTicketsNeededForNextTier: this.calculateTicketsNeededForNextTier(vipTier.currentTier),
      
      // VIP Period info
      vipPeriodStartDate: vipTier.vipPeriodStartDate,
      vipPeriodEndDate: vipTier.vipPeriodEndDate,
      daysRemainingInPeriod,
      
      perks: {
        bonusMultiplier: tierConfig.bonusMultiplier,
        birthdayBonus: tierConfig.birthdayBonus,
        scRedemptionLimit: tierConfig.scRedemptionLimit,
        drawingEntry: tierConfig.drawingEntry,
        surpriseDrops: tierConfig.surpriseDrops,
        bonusSpins: tierConfig.bonusSpins,
        bonusSpinFrequencyDays: tierConfig.bonusSpinFrequencyDays,
      },
      
      // Period-based bonus spins
      bonusSpinsRemaining: vipTier.bonusSpinsRemaining,
      bonusSpinsGrantedAt: vipTier.bonusSpinsGrantedAt,
      bonusSpinsExpireAt: vipTier.bonusSpinsExpireAt,
      
      tierHistory: vipTier.tierHistory,
      
      // Calculate spending needed for next tier
      nextTier: this.getNextTierInfo(vipTier.last7DaysSpending, vipTier.currentTier),
    };
  }
  
  /**
   * Calculate Arcade Tickets needed for next tier
   */
  private calculateTicketsNeededForNextTier(currentTier: VipTierLevel): number {
    const allTiers = Object.entries(VIP_TIER_CONFIG)
      .sort(([, a], [, b]) => a.minSpend - b.minSpend);
    
    const currentTierIndex = allTiers.findIndex(([tier]) => tier === currentTier);
    
    if (currentTierIndex === allTiers.length - 1) {
      return 0; // Already at max tier
    }
    
    const [, nextTierConfig] = allTiers[currentTierIndex + 1];
    return Math.floor(nextTierConfig.minSpend / 50);
  }

  /**
   * Get information about the next tier
   */
  private getNextTierInfo(currentSpending: number, currentTier: VipTierLevel) {
    const allTiers = Object.entries(VIP_TIER_CONFIG)
      .sort(([, a], [, b]) => a.minSpend - b.minSpend);
    
    const currentTierIndex = allTiers.findIndex(([tier]) => tier === currentTier);
    
    if (currentTierIndex === allTiers.length - 1) {
      return {
        tier: currentTier,
        name: VIP_TIER_CONFIG[currentTier].name,
        spendingNeeded: 0,
        message: "You've reached the highest tier!",
      };
    }
    
    const [nextTierKey, nextTierConfig] = allTiers[currentTierIndex + 1];
    const spendingNeeded = nextTierConfig.minSpend - currentSpending;
    
    return {
      tier: nextTierKey,
      name: nextTierConfig.name,
      minSpend: nextTierConfig.minSpend,
      spendingNeeded: Math.max(0, spendingNeeded),
      message: spendingNeeded > 0 
        ? `Spend $${spendingNeeded.toFixed(2)} more in the next 7 days to reach ${nextTierConfig.name}!`
        : `You qualify for ${nextTierConfig.name}!`,
    };
  }

  /**
   * Admin: Manually suspend/restore VIP privileges (for fraud/abuse cases)
   * Note: VIP status is automatic by default. Only use this to suspend privileges.
   */
  async setVipConfirmation(
    userId: string | mongoose.Types.ObjectId,
    isConfirmed: boolean
  ): Promise<IVipTier> {
    const vipTier = await this.getOrCreateVipTier(userId);
    vipTier.isVipConfirmed = isConfirmed;
    await vipTier.save();
    
    logger.info(`Admin ${isConfirmed ? 'restored' : 'suspended'} VIP privileges for user ${userId}`);
    return vipTier;
  }

  /**
   * Check bonus spins status (period-based, no manual granting)
   * Bonus spins are automatically granted at VIP period start
   */
  async checkBonusSpinsStatus(userId: string | mongoose.Types.ObjectId): Promise<{
    hasSpins: boolean;
    spinsRemaining: number;
    expiresAt?: Date;
    message: string;
  }> {
    const vipTier = await this.getOrCreateVipTier(userId);
    const tierConfig = this.getTierConfig(vipTier.currentTier);
    
    if (!vipTier.isVipConfirmed || tierConfig.bonusSpins === 0) {
      return {
        hasSpins: false,
        spinsRemaining: 0,
        message: "No bonus spins available for your tier",
      };
    }

    const now = new Date();
    
    // Check if spins have expired
    if (vipTier.bonusSpinsExpireAt && now > vipTier.bonusSpinsExpireAt) {
      // Expired - clear them
      vipTier.bonusSpinsRemaining = 0;
      await vipTier.save();
      
      return {
        hasSpins: false,
        spinsRemaining: 0,
        message: "Your bonus spins have expired. They will refresh when you start a new VIP period.",
      };
    }
    
    return {
      hasSpins: vipTier.bonusSpinsRemaining > 0,
      spinsRemaining: vipTier.bonusSpinsRemaining,
      expiresAt: vipTier.bonusSpinsExpireAt,
      message: vipTier.bonusSpinsRemaining > 0 
        ? `You have ${vipTier.bonusSpinsRemaining} bonus spins available`
        : "No bonus spins available in current period",
    };
  }
  
  /**
   * Use/consume a bonus spin
   */
  async useBonusSpin(
    userId: string | mongoose.Types.ObjectId,
    gameId: string,
    gameName: string
  ): Promise<{
    success: boolean;
    spinsRemaining: number;
    message: string;
  }> {
    const vipTier = await this.getOrCreateVipTier(userId);
    const now = new Date();
    
    // Check if user has spins available
    if (vipTier.bonusSpinsRemaining <= 0) {
      logger.warn(`User ${userId} attempted to use bonus spin but has none remaining`);
      return {
        success: false,
        spinsRemaining: 0,
        message: "No bonus spins available",
      };
    }
    
    // Check if spins have expired
    if (vipTier.bonusSpinsExpireAt && now > vipTier.bonusSpinsExpireAt) {
      vipTier.bonusSpinsRemaining = 0;
      await vipTier.save();
      
      logger.warn(`User ${userId} attempted to use expired bonus spin`);
      return {
        success: false,
        spinsRemaining: 0,
        message: "Your bonus spins have expired",
      };
    }
    
    // Consume the spin
    vipTier.bonusSpinsRemaining -= 1;
    await vipTier.save();
    
    logger.info(`User ${userId} used bonus spin on game ${gameName} (${gameId}). Spins remaining: ${vipTier.bonusSpinsRemaining}`);
    
    return {
      success: true,
      spinsRemaining: vipTier.bonusSpinsRemaining,
      message: `Bonus spin used successfully! ${vipTier.bonusSpinsRemaining} spins remaining`,
    };
  }
}

export default new VipService();

