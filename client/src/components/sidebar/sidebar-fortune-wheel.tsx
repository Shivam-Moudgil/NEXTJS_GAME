import NeonBox from "../neon/neon-box";
import NeonText from "../neon/neon-text";
import Image from 'next/image';

export default function FortuneWheelCard() {
    return (
        <>
        <div className='px-5'>
            <NeonBox
                glowColor='--color-yellow-500'
                backgroundColor='--color-yellow-500'
                backgroundOpacity={0.1}
                className='p-4 rounded-lg overflow-hidden relative'
            >
                <div className='flex items-center justify-between relative'>
                    <div className='flex-1 z-10'>
                        <NeonText
                            as='h6'
                            className='text-lg font-bold uppercase'
                        >
                            Fortune Wheel
                        </NeonText>
                        <NeonText
                            as='p'
                            className='text-sm mb-0 block uppercase font-semibold'
                            glowColor='--color-yellow-500'
                        >
                            Ready to Spin
                        </NeonText>
                    </div>
                    <div className='absolute right-[-80] top-1/2 transform -translate-y-1/2'>
                        <Image
                            src={'/spin-wheel/wheel.avif'}
                            alt={'Fortune Wheel'}
                            width={120}
                            height={120}
                            className='animate-pulse hover:animate-spin transition-all duration-300 hover:scale-110'
                            style={{
                                animation: 'wheelGlow 2s ease-in-out infinite alternate'
                            }}
                        />
                    </div>
                </div>
            </NeonBox>
        </div>
    </>
    )
}