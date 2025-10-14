'use client';

import { Icon } from '@iconify/react';

import { buttonVariants } from '@/components/ui/button';
import { useBreakPoint } from '@/hooks/useBreakpoint';
import { styled } from '@/root/stitches.config';

const Label = styled('span', {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.2s ease, width 0.2s ease',
    variants: {
        collapsed: {
            true: { opacity: 0, width: 0 },
            false: { opacity: 1, width: 'auto' },
        },
    },
});

const IconWrapper = styled('span', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'margin 0.2s ease',
    variants: {
        collapsed: {
            true: { margin: '0' },
            false: { margin: '0 -0.5rem 0 0' },
        },
    },
});

type SidebarButtonProps = {
    label: string;
    icon: string;
    sidebarOpen: boolean;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
};

export function SidebarButton({
    label,
    icon,
    sidebarOpen,
    variant = 'primary',
    onClick,
}: SidebarButtonProps) {
    const { is2xl } = useBreakPoint();
    const btnClass = buttonVariants({
        variant,
        size: is2xl ? 'md' : 'lg',
        className: 'w-full scale-effect',
    });

    return (
        <button className={btnClass} onClick={onClick}>
            <IconWrapper collapsed={sidebarOpen}>
                <Icon icon={icon} width={20} height={20} />
            </IconWrapper>
            <Label collapsed={!sidebarOpen}>{label}</Label>
        </button>
    );
}
