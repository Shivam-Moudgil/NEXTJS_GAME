// app/providers.tsx
'use client';

import { gsap } from 'gsap';
import { TransitionRouter } from 'next-transition-router';
import { ReactNode, useRef } from 'react';

interface PageTransitionWrapperProps {
    children: ReactNode;
}

export function PageTransitionWrapper({
    children,
}: PageTransitionWrapperProps) {
    const circleRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);

    const circleScaleToCover = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const diameter = Math.sqrt(vw * vw + vh * vh) + 100;
        const base = 64;
        return diameter / base;
    };

    return (
        <TransitionRouter
            auto
            leave={(next, from, to) => {
                const circle = circleRef.current;
                const label = labelRef.current;
                if (!circle || !label) return next();

                label.textContent =
                    to?.replace(/^\//, '').replace(/-/g, ' ').toUpperCase() ||
                    'HOME';

                const centerX = window.innerWidth / 2;
                const bottomY = window.innerHeight + 32;
                gsap.set(circle, {
                    x: centerX - 32,
                    y: bottomY - 64,
                    scale: 0.8,
                    opacity: 1,
                });
                gsap.set(label, { opacity: 0, y: 10 });

                const tl = gsap.timeline({ onComplete: next });

                tl.to(circle, {
                    y: window.innerHeight / 2 - 32,
                    duration: 0.35,
                    ease: 'power3.out',
                });
                tl.to(
                    circle,
                    {
                        scale: circleScaleToCover(),
                        duration: 0.55,
                        ease: 'power2.inOut',
                    },
                    '-=0.05'
                );

                tl.to(
                    label,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.35,
                        ease: 'power2.out',
                    },
                    '-=0.35'
                );

                tl.to(
                    'main',
                    {
                        opacity: 0.2,
                        duration: 0.35,
                        ease: 'power1.inOut',
                    },
                    '<'
                );
            }}
            enter={next => {
                const circle = circleRef.current;
                const label = labelRef.current;
                if (!circle || !label) return next();

                gsap.set('main', { opacity: 0 });

                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.set(circle, { opacity: 0, scale: 0.8, y: -100 });
                        gsap.set(label, { opacity: 0 });
                        next();
                    },
                });

                tl.to('main', {
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                });
                tl.to(label, { opacity: 0, duration: 0.2 }, '-=0.2');
                tl.to(circle, {
                    y: -120,
                    scale: 0.6,
                    duration: 0.45,
                    ease: 'power3.in',
                });
            }}
        >
            <div className='circle-overlay pointer-events-none fixed inset-0 z-[60]'>
                <div
                    ref={circleRef}
                    className='circle size-16 rounded-full opacity-0 pointer-events-none select-none'
                    style={{
                        backgroundColor: 'oklch(38.1% 0.176 304.987)',
                        boxShadow:
                            '0 0 20px rgba(173, 70, 255, 0.6), 0 0 60px rgba(173, 70, 255, 0.35)',
                        transform: 'translate3d(0,0,0) scale(0.8)',
                    }}
                />
                <div
                    ref={labelRef}
                    className='circle-label fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'
                />
            </div>

            {children}
        </TransitionRouter>
    );
}
