'use client';
import { gsap } from 'gsap';
import { TransitionRouter } from 'next-transition-router';
import type { ReactNode } from 'react';
import { useCallback, useMemo, useRef } from 'react';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const CIRCLE_DIAMETER = 64;
const OVERLAY_COLOR = 'oklch(38.1% 0.176 304.987)';
const OVERLAY_SHADOW =
    '0 0 20px rgba(173, 70, 255, 0.6), 0 0 60px rgba(173, 70, 255, 0.35)';

interface PageTransitionWrapperProps {
    children: ReactNode;
}

const formatRouteName = (route?: string | null) => {
    if (!route) return 'HOME';

    if (route === '/buy-redeem') {
        return 'Loot / History';
    }else if (route.includes('game-listing')) {
        return 'Games';
    }

    return route.replace(/^\//, '').replace(/-/g, ' ').toUpperCase();
};

const computeCircleScale = () => {
    const { innerWidth: vw, innerHeight: vh } = window;
    const diameter = Math.hypot(vw, vh) + 100;
    return diameter / CIRCLE_DIAMETER;
};

export function PageTransitionWrapper({
    children,
}: PageTransitionWrapperProps) {
    const circleRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    const overlayStyle = useMemo(
        () => ({
            backgroundColor: OVERLAY_COLOR,
            boxShadow: OVERLAY_SHADOW,
            transform: 'translate3d(0,0,0) scale(0.8)',
        }),
        []
    );

    const handleLeave = useCallback(
        async (next: () => void, _from?: string | null, to?: string | null) => {
            const circle = circleRef.current;
            const label = labelRef.current;
            if (!circle || !label || prefersReducedMotion) {
                next();
                return;
            }

            label.textContent = formatRouteName(to);

            const centerX = window.innerWidth / 2;
            const bottomY = window.innerHeight + 32;

            gsap.set(circle, {
                x: centerX - CIRCLE_DIAMETER / 2,
                y: bottomY - CIRCLE_DIAMETER,
                scale: 0.8,
                opacity: 1,
            });
            gsap.set(label, { opacity: 0, y: 10 });

            const timeline = gsap.timeline({ onComplete: next });

            timeline.to(circle, {
                y: window.innerHeight / 2 - CIRCLE_DIAMETER / 2,
                duration: 0.35,
                ease: 'power3.out',
            });

            timeline.to(
                circle,
                {
                    scale: computeCircleScale(),
                    duration: 0.55,
                    ease: 'power2.inOut',
                },
                '-=0.05'
            );

            timeline.to(
                label,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    ease: 'power2.out',
                },
                '-=0.35'
            );

            timeline.to(
                'main',
                {
                    opacity: 0.2,
                    duration: 0.35,
                    ease: 'power1.inOut',
                },
                '<'
            );
        },
        [prefersReducedMotion]
    );

    const handleEnter = useCallback(
        async (next: () => void) => {
            const circle = circleRef.current;
            const label = labelRef.current;
            if (!circle || !label || prefersReducedMotion) {
                next();
                return;
            }

            gsap.set('main', { opacity: 0 });

            const timeline = gsap.timeline({
                onComplete: () => {
                    gsap.set(circle, { opacity: 0, scale: 0.8, y: -100 });
                    gsap.set(label, { opacity: 0 });
                    next();
                },
            });

            timeline.to('main', {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            });

            timeline.to(label, { opacity: 0, duration: 0.2 }, '-=0.2');

            timeline.to(circle, {
                y: -120,
                scale: 0.6,
                duration: 0.45,
                ease: 'power3.in',
            });
        },
        [prefersReducedMotion]
    );

    return (
        <TransitionRouter auto leave={handleLeave} enter={handleEnter}>
            <div className='circle-overlay pointer-events-none fixed inset-0 z-[60]'>
                <div
                    ref={circleRef}
                    className='circle size-16 select-none rounded-full opacity-0'
                    style={overlayStyle}
                />
                <div
                    ref={labelRef}
                    className='circle-label fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center'
                />
            </div>

            {children}
        </TransitionRouter>
    );
}
