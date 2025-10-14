'use client';
import { useBreakPoint } from '@/hooks/useBreakpoint';
import { SpinWheelOption } from '@/types/spin-wheel';
import { useTransitionRouter } from 'next-transition-router';
import Image from 'next/image';
import { useState } from 'react';
import NeonBox from '../neon/neon-box';
import NeonText from '../neon/neon-text';
import SpinWheel from '../spin-wheel';
import { Button } from '../ui/button';
import { DialogContent, DialogTitle } from '../ui/dialog';

function SpinWheelModal() {
    const { xxs, xs } = useBreakPoint();
    const [result, setResult] = useState<SpinWheelOption | null>(null);
    const router = useTransitionRouter();

    const options: SpinWheelOption[] = [
        {
            id: '1',
            label: (
                <>
                    <img
                        src='/coins/gold-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-2'
                        alt='Gold Coin'
                    />
                    150k
                </>
            ),
            value: 150,
        },
        {
            id: '2',
            label: (
                <>
                    <img
                        src='/coins/sweep-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Sweep Coin'
                    />
                    250k
                </>
            ),
            value: 250,
        },
        {
            id: '3',
            label: (
                <>
                    <img
                        src='/coins/gold-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Gold Coin'
                    />
                    180k
                </>
            ),
            value: 190,
        },
        {
            id: '4',
            label: (
                <>
                    <img
                        src='/coins/sweep-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Sweep Coin'
                    />
                    300k
                </>
            ),
            value: 300,
        },
        {
            id: '5',
            label: (
                <>
                    <img
                        src='/coins/gold-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Gold Coin'
                    />
                    200k
                </>
            ),
            value: 200,
        },
        {
            id: '6',
            label: (
                <>
                    <img
                        src='/coins/sweep-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Sweep Coin'
                    />
                    400k
                </>
            ),
            value: 400,
        },
        {
            id: '7',
            label: (
                <>
                    <img
                        src='/coins/gold-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Gold Coin'
                    />
                    350k
                </>
            ),
            value: 350,
        },
        {
            id: '8',
            label: (
                <>
                    <img
                        src='/coins/sweep-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Sweep Coin'
                    />
                    500k
                </>
            ),
            value: 500,
        },
        {
            id: '9',
            label: (
                <>
                    <img
                        src='/coins/gold-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Gold Coin'
                    />
                    600k
                </>
            ),
            value: 600,
        },
        {
            id: '10',
            label: (
                <>
                    <img
                        src='/coins/sweep-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-2'
                        alt='Sweep Coin'
                    />
                    800k
                </>
            ),
            value: 800,
        },
        {
            id: '11',
            label: (
                <>
                    <img
                        src='/coins/gold-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Gold Coin'
                    />
                    1M
                </>
            ),
            value: 1000,
        },
        {
            id: '12',
            label: (
                <>
                    <img
                        src='/coins/sweep-coin.svg'
                        className='xs:w-6 xs:h-6 h-5 w-5 mb-1'
                        alt='Sweep Coin'
                    />
                    750k
                </>
            ),
            value: 750,
        },
    ];

    return (
        <DialogContent className='lg:max-w-fit!' neonBoxClass='max-sm:px-2!'>
            <div className='py-4 flex flex-col items-center text-center'>
                {result ? (
                    // Enhanced Result View
                    <div className='flex flex-col items-center justify-center text-center relative'>
                        <DialogTitle asChild>
                            <NeonText as='h3' className='h3-title mb-2'>
                                CONGRATULATIONS!
                            </NeonText>
                        </DialogTitle>

                        <p className='text-lg mb-8 font-medium'>
                            You have won an amazing prize!
                        </p>

                        {/* Enhanced Prize Display */}
                        <div className='relative'>
                            <NeonBox
                                glowColor='--color-purple-500'
                                backgroundColor='--color-purple-500'
                                backgroundOpacity={0.2}
                                className='px-6 py-3 rounded-md border-2 border-purple-500/30 relative overflow-hidden mb-10'
                            >
                                <div className='relative z-10 flex items-center gap-4'>
                                    <div className='text-2xl [&>img]:w-6 [&>img]:h-6 [&>img]:mb-0 font-bold uppercase flex items-center gap-3'>
                                        {result.label}
                                    </div>
                                </div>
                            </NeonBox>
                        </div>

                        <NeonBox
                            glowColor='--color-blue-500'
                            backgroundColor='--color-blue-500'
                            backgroundOpacity={0.2}
                            className='px-[20px] py-[12px] rounded-[8px] max-lg:mx-auto inline-flex items-center gap-2 mb-8'
                        >
                            <NeonText
                                as='span'
                                glowColor='--color-blue-500'
                                glowSpread={0.4}
                                className='text-base sm:text-lg font-bold uppercase'
                            >
                                Prize added to your account successfully!
                            </NeonText>
                        </NeonBox>

                        {/* Continue Button */}
                        <Button size='lg' onClick={() => router.push('/lobby')}>
                            Continue Playing
                        </Button>
                    </div>
                ) : (
                    <>
                        <DialogTitle asChild>
                            <NeonText as='h3' className='h3-title mb-8'>
                                Top Price
                            </NeonText>
                        </DialogTitle>

                        <NeonBox
                            glowColor='--color-green-500'
                            backgroundColor='--color-green-500'
                            backgroundOpacity={0.2}
                            className='px-[20px] py-[12px] rounded-[8px] max-lg:mx-auto mb-1 inline-flex items-center gap-2'
                        >
                            <Image
                                src='/coins/sweep-coin.svg'
                                height={24}
                                width={24}
                                alt='sweep coin'
                            />
                            <NeonText
                                as='span'
                                glowColor='--color-green-500'
                                glowSpread={0.4}
                                className='text-base sm:text-xl font-bold uppercase'
                            >
                                4,00,000 SC
                            </NeonText>
                        </NeonBox>

                        <SpinWheel
                            options={options}
                            onSpin={winner => setResult(winner)}
                            size={xs ? 430 : xxs ? 320 : 260}
                            spinDuration={4000}
                        />

                        <div className='inline-flex items-center rounded-lg gap-3 mt-10'>
                            <NeonText
                                glowColor='--color-purple-500'
                                className='text-lg uppercase font-bold'
                                glowSpread={0.5}
                            >
                                EXPIRES IN: 20:08 MINUTES
                            </NeonText>
                        </div>
                    </>
                )}
            </div>
        </DialogContent>
    );
}

export default SpinWheelModal;
