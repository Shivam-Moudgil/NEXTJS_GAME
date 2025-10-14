import { Request, Response } from "express";
import AmoeModel from "../models/amoe-entry.model";
import UserBonusModel from "../models/bonus.model";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../utils/api-response";
import { getUserFromRequest } from "../utils/get-user";

const claimDailyBonus = async (req: Request, res: Response) => {
  const { _id } = getUserFromRequest(req);
  const userBonus = await UserBonusModel.findOne({ userId: _id });
  if (!userBonus) {
    throw new ApiError(404, "User bonus record not found");
  }

  const bonus = userBonus.claimDailyBonus();

  if (bonus) {
    await userBonus.save();
    return res
      .status(200)
      .json(new ApiResponse(200, bonus, "Daily bonus claimed"));
  } else {
    throw new ApiError(400, "Daily bonus already claimed");
  }
};

const claimDailySweepBonus = async (req: Request, res: Response) => {
  const { _id } = getUserFromRequest(req);
  const { name, email, address, phone } = req.body;

  if (!name || !email || !address || !phone) {
    throw new ApiError(400, "Please provide all the required fields");
  }

  const userBonus = await UserBonusModel.findOne({ userId: _id });
  if (!userBonus) {
    throw new ApiError(404, "User bonus record not found");
  }

  const bonus = userBonus.claimDailySweepBonus();

  if (bonus) {
    userBonus.lastSweeDate = new Date();
    await userBonus.save();
    const created = await AmoeModel.create({
      userId: _id,
      name,
      email,
      address,
      phone,
    });
    console.log(created, "AMOE");
    if (!created) {
      throw new ApiError(400, "You aren't eligible for the free-win drawings.");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, bonus, "Daily sweep bonus claimed"));
  } else {
    throw new ApiError(400, "Daily sweep bonus already claimed");
  }
};

const claimNewUserBonus = async (req: Request, res: Response) => {
  const { _id } = getUserFromRequest(req);
  const userBonus = await UserBonusModel.findOne({ userId: _id });
  if (!userBonus) {
    throw new ApiError(404, "User bonus record not found");
  }

  const bonus = userBonus.claimNewUserBonus();

  if (bonus) {
    await userBonus.save();
    return res
      .status(200)
      .json(new ApiResponse(200, bonus, "New user bonus claimed"));
  } else {
    throw new ApiError(400, "New user bonus already claimed");
  }
};

export { claimDailyBonus, claimDailySweepBonus, claimNewUserBonus };
