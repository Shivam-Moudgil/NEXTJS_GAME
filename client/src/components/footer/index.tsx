'use client';
import { Icon } from '@iconify/react';
import { Link } from 'next-transition-router';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';

import { useUI } from '@/contexts/ui-context';
import { footerLinks } from '@/data/footer';
import { footerSocialLinks } from '@/data/links';
import { cn } from '@/lib/utils';

import { useIsLoggedIn } from '@/contexts/auth-context';
import { useBreakPoint } from '@/hooks/useBreakpoint';
import NeonText from '../neon/neon-text';
import SiteLogo from '../site-logo';
const Footer = () => {
    const pathname = usePathname();
    const { sidebarOpen } = useUI();
    const { lg, is2xl } = useBreakPoint();
    const { isLoggedIn } = useIsLoggedIn();

    const commonLinkClass = cn(
        'tracking-common relative text-base capitalize',
        'before:absolute before:-bottom-[8px] before:left-1/2 before:h-0 before:w-0',
        'before:-translate-x-1/2 before:rounded-[10px] before:border before:border-transparent',
        "before:bg-transparent before:transition-all before:duration-400 before:content-['']",
        'hover:before:w-full hover:before:border-white hover:before:shadow-[0_0_6px_var(--color-purple-500),0_0_12px_var(--color-purple-500),0_0_18px_var(--color-purple-500),inset_0_0_6px_var(--color-purple-500)]'
    );

    return (
        <footer className='w-full'>
            <div className='bg-footer py-10'>
                <div className='container-2xl relative z-[1]'>
                    <div
                        className={cn(
                            'flex flex-wrap items-start max-lg:justify-center lg:justify-between',
                            isLoggedIn
                                ? cn(
                                      sidebarOpen ? 'lg:gap-10' : 'lg:gap-20',
                                      'gap-12'
                                  )
                                : 'lg:gap-0 sm:gap-y-12 gap-y-10 sm:gap-x-30 gap-x-20'
                        )}
                    >
                        <div
                            className={cn(
                                'flex-[1_0_100%]',
                                isLoggedIn
                                    ? 'lg:flex-1'
                                    : 'lg:flex-[0.6]  xl:flex-[0.4]'
                            )}
                        >
                            <div className='flex flex-col items-start gap-6 max-w-[420px] max-lg:mx-auto max-lg:text-center max-lg:items-center'>
                                <SiteLogo className='max-w-[118px]' />
                                <p className='text-base'>
                                    Experience the ultimate gaming adventure
                                    with our collection of exciting games. Win
                                    big, play smart, and join the Golden Ticket
                                    community!
                                </p>
                                <div className='inline-flex items-center gap-4'>
                                    {footerSocialLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href || '#'}
                                            className='scale-effect text-base'
                                            title={link.title}
                                            target='_blank'
                                        >
                                            <Image
                                                src={link.icon || '#'}
                                                alt={link.title}
                                                width={50}
                                                height={50}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {footerLinks.map((col, colIndex) => {
                            if (
                                isLoggedIn === false &&
                                col.id === 'my-account'
                            ) {
                                return null;
                            }

                            return (
                                <div
                                    key={colIndex}
                                    className='max-lg:text-center'
                                >
                                    <NeonText as='h4' className='h4-title mb-5'>
                                        {col.title}
                                    </NeonText>
                                    <ul
                                        className={cn(
                                            'grid gap-x-[20px] gap-y-[14px]',
                                            isLoggedIn
                                                ? '2xl:grid-cols-2 grid-cols-1 '
                                                : 'lg:grid-cols-2 grid-cols-1'
                                        )}
                                    >
                                        {col.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                {link.isModal ? (
                                                    <>
                                                        <Dialog>
                                                            <DialogTrigger
                                                                asChild
                                                            >
                                                                <button
                                                                    className={
                                                                        commonLinkClass
                                                                    }
                                                                >
                                                                    {link.title}
                                                                </button>
                                                            </DialogTrigger>
                                                            {
                                                                link.isModalContent
                                                            }
                                                        </Dialog>
                                                    </>
                                                ) : (
                                                    <Link
                                                        key={linkIndex}
                                                        href={link.href || '#'}
                                                        title={link.title}
                                                        className={cn(
                                                            commonLinkClass,
                                                            pathname ===
                                                                link.href &&
                                                                'before:w-full before:border-white before:shadow-[0_0_6px_var(--color-purple-500),0_0_12px_var(--color-purple-500),0_0_18px_var(--color-purple-500),inset_0_0_6px_var(--color-purple-500)]'
                                                        )}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='bg-footer-bottom py-6'>
                <div className='container-2xl relative z-[1]'>
                    <div className='mx-auto flex max-w-[1360px] flex-col items-center gap-3 text-center'>
                        <p className='text-lg font-medium text-[#08F5E9]'>
                            All rights reserved. 21+ only. Play responsibly. No
                            purchase necessary. Sweepstakes are void where
                            prohibited. Sweeps Coins (SC) can be obtained free
                            via our Alternative Method of Entry. See official
                            Sweepstakes Rules for eligibility, methods of entry,
                            and redemption terms.
                        </p>

                        <p>
                            Copyright © 2025 
                            <Link
                                href='#'
                                title='Golden Ticket Online Arcade'
                                className='text-pink-500 underline underline-offset-4'
                            >
                                Golden Ticket Online Arcade
                            </Link>
                        </p>

                        <Icon
                            icon='uil:21-plus'
                            width={36}
                            height={36}
                            className='text-[#08F5E9]'
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
