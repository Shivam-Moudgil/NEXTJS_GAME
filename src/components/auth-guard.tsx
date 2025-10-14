'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { useVip } from '@/contexts/vip-context';

interface AuthGuardProps {
    children: React.ReactNode;
    requireVip?: boolean;
    minTier?: string;
    redirectTo?: string;
}

// Simple auth guard that doesn't make API calls
export default function AuthGuard({
    children,
    requireVip = false,
    minTier,
    redirectTo = '/login'
}: AuthGuardProps) {
    const router = useRouter();
    const { isLoggedIn, user, isInitializing } = useAuth();
    const { vipStatus, isLoading: vipLoading } = useVip();

    useEffect(() => {
        console.log('AuthGuard useEffect triggered:', {
            isInitializing,
            vipLoading,
            isLoggedIn,
            hasUser: !!user,
            requireVip,
            minTier,
            hasVipStatus: !!vipStatus
        });

        // Don't redirect while contexts are loading
        if (isInitializing || vipLoading) {
            console.log('AuthGuard: Still loading, waiting...');
            return;
        }

        // Only redirect if we're sure the user is not logged in
        if (!isLoggedIn && !user) {
            console.log('AuthGuard: User not logged in, redirecting to login');
            router.push(redirectTo);
            return;
        }

        console.log('AuthGuard: User is logged in, checking VIP requirements...');

        // Check VIP requirements if needed
        if (requireVip && vipStatus) {
            if (minTier) {
                const tierHierarchy = [
                    'none', 'iron', 'bronze', 'silver', 'gold', 
                    'platinum', 'onyx', 'sapphire', 'ruby', 'emerald'
                ];
                
                const currentTierIndex = tierHierarchy.indexOf(vipStatus.tier);
                const minTierIndex = tierHierarchy.indexOf(minTier);
                
                console.log('AuthGuard: VIP check:', {
                    currentTier: vipStatus.tier,
                    minTier,
                    currentTierIndex,
                    minTierIndex
                });
                
                if (currentTierIndex < minTierIndex) {
                    console.log('AuthGuard: VIP tier requirement not met, redirecting to VIP program');
                    router.push('/vip-program');
                    return;
                }
            }
        }

        console.log('AuthGuard: All checks passed, user authorized');
    }, [isLoggedIn, user, vipStatus, requireVip, minTier, router, redirectTo, isInitializing, vipLoading]);

    // Don't render anything while contexts are loading
    if (isInitializing || vipLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center" suppressHydrationWarning>
                <div className="text-center" suppressHydrationWarning>
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4" suppressHydrationWarning></div>
                    <p className="text-gray-400" suppressHydrationWarning>Loading...</p>
                </div>
            </div>
        );
    }

    // Don't render if not logged in
    if (!isLoggedIn && !user) {
        return null;
    }

    // Don't render if VIP requirements not met
    if (requireVip && vipStatus && minTier) {
        const tierHierarchy = [
            'none', 'iron', 'bronze', 'silver', 'gold', 
            'platinum', 'onyx', 'sapphire', 'ruby', 'emerald'
        ];
        
        const currentTierIndex = tierHierarchy.indexOf(vipStatus.tier);
        const minTierIndex = tierHierarchy.indexOf(minTier);
        
        if (currentTierIndex < minTierIndex) {
            return null;
        }
    }

    return <>{children}</>;
}
