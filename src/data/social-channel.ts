interface SocialChannel {
    icon: string;
    title: string;
    description: string;
    buttonLabel: string;
    url: string;
    color:
        | '--color-blue-500'
        | '--color-pink-500'
        | '--color-sky-500'
        | '--color-purple-500'
        | '--color-red-500';
}

export const socialChannels: SocialChannel[] = [
    {
        icon: '/social-icons/facebook.svg',
        title: 'Facebook',
        description:
            'Like our page to stay updated with announcements, contests, and highlights.',
        buttonLabel: 'Follow on Facebook',
        url: 'https://facebook.com/gtoarcade',
        color: '--color-blue-500',
    },
    {
        icon: '/social-icons/instagram.svg',
        title: 'Instagram',
        description:
            'Get a peek behind the scenes, see what’s trending, and tag us in your moments.',
        buttonLabel: 'Follow on Instagram',
        url: 'https://instagram.com/gtoarcade',
        color: '--color-pink-500',
    },
    {
        icon: '/social-icons/telegram.svg',
        title: 'Telegram',
        description:
            'Join our Telegram group for instant updates, discussions, and special alerts.',
        buttonLabel: 'Join Telegram',
        url: 'https://t.me/gtoarcade',
        color: '--color-sky-500',
    },
    {
        icon: '/social-icons/tik-tok.svg',
        title: 'TikTok',
        description:
            'Don’t miss fun challenges and short videos that bring the brand to life.',
        buttonLabel: 'Follow on TikTok',
        url: 'https://tiktok.com/@gtoarcade',
        color: '--color-purple-500',
    },
    {
        icon: '/social-icons/youtube.svg',
        title: 'YouTube',
        description:
            'Watch tutorials, gameplays, events, and more straight from our official channel.',
        buttonLabel: 'Subscribe on YouTube',
        url: 'https://youtube.com/gtoarcade',
        color: '--color-red-500',
    },
];
