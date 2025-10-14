import NeonBox from '../neon/neon-box';
import NeonIcon from '../neon/neon-icon';
import NeonText from '../neon/neon-text';
import { Button } from '../ui/button';
import GameModalTitle from './game-modal-title';
import type { CreateAccountStepProps, ProcessInfo } from '../../types/game-account.types';
import { useWalletBalance } from '@/contexts/wallet-balance-context';
import { useRouter } from 'next/navigation';

export default function CreateAccountStep({
    game,
    onBack,
    onSuccess,
    onRequestAccount,
    isLoading = false,
    error = null,
    hasPendingRequest = false,
}: CreateAccountStepProps) {
    const { balance: userBalance, loading: balanceLoading } = useWalletBalance();
    const router = useRouter();
    
    // Balance validation constants
    const MIN_BALANCE_REQUIRED = 500;
    const hasEnoughBalance = userBalance >= MIN_BALANCE_REQUIRED;
    const processInfo: ProcessInfo[] = [
        {
            description:
                'This process usually takes a few minutes and is handled by our support team.',
            color: '--color-blue-500',
        },
        {
            icon: 'lucide:square-check',
            description:
                'You\'ll receive an email or SMS as soon as your account is ready.',
            color: '--color-orange-500',
        },
        {
            icon: 'lucide:mail',
            description:
                'Make sure your email is verified and SMS notifications are enabled.',
            color: '--color-fuchsia-500',
        },
        {
            icon: 'lucide:bell',
            description:
                'We\'ll notify you by email or SMS. Once ready, you can start playing instantly.',
            color: '--color-green-500',
        },
    ];

    const handleRequestAccount = async () => {
        if (!hasEnoughBalance) {
            // Redirect to buy coins page if insufficient balance
            router.push('/buy-coins');
            return;
        }
        await onRequestAccount();
    };

    return (
        <div className='max-w-[500px] px-2 pb-2 mx-auto'>
            <GameModalTitle
                title={game.name}
                description={
                    hasPendingRequest 
                        ? "Your account request is being processed by our support team."
                        : "We're currently waiting for your game account confirmation."
                }
            />
            
            <div className='flex flex-col items-center gap-4 mb-6'>
                <NeonIcon
                    icon='svg-spinners:bars-rotate-fade'
                    glowColor='var(--color-blue-500)'
                    size={40}
                />
                <NeonText
                    as='span'
                    glowColor='var(--color-blue-500)'
                    className='h6-title uppercase'
                >
                    {hasPendingRequest 
                        ? 'Account request in progress...' 
                        : isLoading 
                            ? 'Creating game account...' 
                            : 'Ready to create account'
                    }
                </NeonText>
            </div>

            {error && (
                <NeonBox
                    glowColor='--color-red-500'
                    backgroundColor='--color-red-500'
                    backgroundOpacity={0.1}
                    className='p-3 rounded-lg mb-6'
                >
                    <div className='flex items-center gap-2 text-red-400'>
                        <NeonIcon
                            icon='lucide:alert-circle'
                            size={16}
                            glowColor='--color-red-500'
                        />
                        <span className='text-sm'>{error}</span>
                    </div>
                </NeonBox>
            )}

            {/* Balance warning */}
            {!hasEnoughBalance && !hasPendingRequest && !balanceLoading && (
                <NeonBox
                    glowColor='--color-red-500'
                    backgroundColor='--color-red-500'
                    backgroundOpacity={0.1}
                    className='p-5 rounded-lg mb-6'
                >
                    <div className='flex items-start gap-4'>
                        <NeonIcon
                            icon='lucide:alert-triangle'
                            size={24}
                            glowColor='--color-red-500'
                        />
                        <div className='flex-1'>
                            <NeonText
                                glowColor='--color-red-500'
                                className='text-lg font-bold text-red-400 mb-3'
                            >
                                💰 Insufficient Balance
                            </NeonText>
                            <div className='bg-red-900/30 border border-red-500/30 rounded-lg p-4 mb-4'>
                                <div className='flex items-center justify-between mb-2'>
                                    <span className='text-sm text-red-300'>Current Balance:</span>
                                    <span className='text-sm font-bold text-red-200'>{userBalance.toLocaleString()} GC</span>
                                </div>
                                <div className='flex items-center justify-between mb-2'>
                                    <span className='text-sm text-red-300'>Required:</span>
                                    <span className='text-sm font-bold text-red-200'>{MIN_BALANCE_REQUIRED.toLocaleString()} GC</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm text-red-300'>You need:</span>
                                    <span className='text-sm font-bold text-yellow-400'>{(MIN_BALANCE_REQUIRED - userBalance).toLocaleString()} GC</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <Button
                                    onClick={() => router.push('/buy-coins')}
                                    className='bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-base px-6 py-3 rounded-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-200 flex items-center justify-center gap-2'
                                >
                                    <NeonIcon
                                        icon='lucide:coins'
                                        size={20}
                                        glowColor='--color-yellow-500'
                                    />
                                    💰 Buy Gold Coins Now
                                </Button>
                                <p className='text-xs text-red-300 text-center'>
                                    Click to instantly add coins and continue with your game account creation
                                </p>
                            </div>
                        </div>
                    </div>
                </NeonBox>
            )}

            {/* Only show action buttons if not pending request */}
            {!hasPendingRequest && !isLoading && (
                <div className='mb-6'>
                    <Button
                        onClick={handleRequestAccount}
                        className='w-full mb-4'
                        disabled={isLoading || !hasEnoughBalance}
                    >
                        {hasEnoughBalance ? 'Request New Account' : 'Insufficient Balance'}
                    </Button>
                    
                    <Button
                        variant='secondary'
                        onClick={onBack}
                        className='w-full'
                        disabled={isLoading}
                    >
                        Back
                    </Button>
                </div>
            )}

            {/* Show process info for both states */}
            <NeonBox
                glowColor='var(--color-blue-500)'
                backgroundColor='var(--color-blue-500)'
                backgroundOpacity={0.2}
                glowSpread={0.5}
                className='w-full flex flex-col gap-4 p-5 rounded-lg'
            >
                {processInfo.map((item, index) => (
                    <div key={index} className='flex items-center gap-4'>
                        {item.icon && (
                            <NeonIcon
                                icon={item.icon}
                                glowColor={item.color}
                                size={24}
                            />
                        )}
                        <NeonText
                            as='p'
                            glowColor={item.color}
                            glowSpread={0.5}
                            className='text-base font-bold capitalize'
                        >
                            {item.description}
                        </NeonText>
                    </div>
                ))}
            </NeonBox>
        </div>
    );
}