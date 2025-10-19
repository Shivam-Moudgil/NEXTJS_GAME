import { Icon } from '@iconify/react';
import NeonBox from '@/components/neon/neon-box';

const LiveChatButton = () => {
    const handleClick = () => {
        window.open('https://www.facebook.com/Goldenticketonlinearcade', '_blank'); // Opens in new tab
    };

    return (
        <button
            onClick={handleClick}
            className='relative z-[20]'
        >
            <NeonBox
                className='scale-effect scale-pulse scale-pulse-xs select-none scale-pulse-fast fixed xl:right-10 xl:bottom-10 xm:right-6 sm:bottom-6 bottom-4 right-4 grid aspect-square sm:w-[60px] w-[54px] place-items-center rounded-full backdrop-blur-lg cursor-pointer'
                backgroundColor='--color-purple-800'
                backgroundOpacity={0.6}
            >
                <Icon
                    icon='lucide:message-circle-more'
                    className='sm:text-2xl text-xl'
                />
            </NeonBox>
        </button>
    );
};

export default LiveChatButton;
