import {
    CompetitionIcon,
    GiftIcon,
    GoldCoinsIcon,
    MailIcon,
} from '@/app/(home)/components/feature-tiels-icons';
import NeonBox from '@/components/neon/neon-box';
import NeonText from '@/components/neon/neon-text';
import type { GameDataProps } from '@/types/global.type';

type FeatureGamesCategory = {
    title: string;
    games: GameDataProps[];
};

export const featureGamesData: FeatureGamesCategory[] = [
    {
        title: 'Bonus Games',
        games: [
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'easy-street',
                title: 'Easy Street',
                provider: 'Street Play',
                thumbnail: '/game-thumbnails/16.jpg',
                badge: 'bonus-available',
                color: 'lime',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
        ],
    },
    {
        title: 'Exclusive games',
        games: [
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
        ],
    },
    {
        title: 'Signature games',
        games: [
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'easy-street',
                title: 'Easy Street',
                provider: 'Street Play',
                thumbnail: '/game-thumbnails/16.jpg',
                badge: 'bonus-available',
                color: 'lime',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
        ],
    },
    {
        title: 'New Releases',
        games: [
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'easy-street',
                title: 'Easy Street',
                provider: 'Street Play',
                thumbnail: '/game-thumbnails/16.jpg',
                badge: 'bonus-available',
                color: 'lime',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },

            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'easy-street',
                title: 'Easy Street',
                provider: 'Street Play',
                thumbnail: '/game-thumbnails/16.jpg',
                badge: 'bonus-available',
                color: 'lime',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },

            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
        ],
    },
    {
        title: 'Slots',
        games: [
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },

            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'easy-street',
                title: 'Easy Street',
                provider: 'Street Play',
                thumbnail: '/game-thumbnails/16.jpg',
                badge: 'bonus-available',
                color: 'lime',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },

            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
        ],
    },
    {
        title: 'Fish Games',
        games: [
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'easy-street',
                title: 'Easy Street',
                provider: 'Street Play',
                thumbnail: '/game-thumbnails/16.jpg',
                badge: 'bonus-available',
                color: 'lime',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'juwa',
                title: 'Welcome to Fabulous Juwa',
                provider: 'Juwa Online',
                thumbnail: '/game-thumbnails/11.jpg',
                badge: 'limited-time',
                color: 'sky',
            },
            {
                id: 'cash-frenzy',
                title: 'Cash Frenzy',
                provider: 'Vegas Studio',
                thumbnail: '/game-thumbnails/12.jpg',
                badge: 'top-pick',
                color: 'indigo',
            },
            {
                id: 'game-vault',
                title: 'Game Vault',
                provider: 'Vault Play',
                thumbnail: '/game-thumbnails/13.jpg',
                badge: 'free-to-play',
                color: 'violet',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'easy-street',
                title: 'Easy Street',
                provider: 'Street Play',
                thumbnail: '/game-thumbnails/16.jpg',
                badge: 'bonus-available',
                color: 'lime',
            },
            {
                id: 'ultra-panda',
                title: 'Ultra Panda',
                provider: 'Bamboo Labs',
                thumbnail: '/game-thumbnails/7.jpg',
                badge: 'free-to-play',
                color: 'blue',
            },
        ],
    },
    {
        title: 'All games',
        games: [
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'ace-book',
                title: 'Ace Book',
                provider: 'Sharkbyte',
                thumbnail: '/game-thumbnails/5.jpg',
                badge: 'top-pick',
                color: 'red',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'ocean-king-ii',
                title: 'Ocean King II',
                provider: 'Neptune Studio',
                thumbnail: '/game-thumbnails/1.jpg',
                badge: 'free-to-play',
                color: 'cyan',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'golden-dragon',
                title: 'Golden Dragon',
                provider: 'DragonForge',
                thumbnail: '/game-thumbnails/8.jpg',
                badge: 'popular',
                color: 'green',
            },
            {
                id: 'ten-times-win',
                title: '10X Ten Times Win',
                provider: 'Fortune Spin',
                thumbnail: '/game-thumbnails/9.jpg',
                badge: 'bonus-available',
                color: 'emerald',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'wild-buffalo',
                title: 'Wild Buffalo',
                provider: 'Prairie Play',
                thumbnail: '/game-thumbnails/6.jpg',
                badge: 'bonus-available',
                color: 'purple',
            },
            {
                id: 'gameroom-online',
                title: 'Gameroom Online',
                provider: 'Casino Hub',
                thumbnail: '/game-thumbnails/14.jpg',
                badge: 'top-pick',
                color: 'fuchsia',
            },
            {
                id: 'orion-stars',
                title: 'Orion Stars',
                provider: 'Galaxy Gaming',
                thumbnail: '/game-thumbnails/15.jpg',
                badge: 'new',
                color: 'amber',
            },
            {
                id: 'blue-dragon',
                title: 'Blue Dragon',
                provider: 'Mythic Play',
                thumbnail: '/game-thumbnails/10.jpg',
                badge: 'popular',
                color: 'teal',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
            {
                id: 'crystal-clovers',
                title: 'Crystal Clovers',
                provider: 'Emerald Labs',
                thumbnail: '/game-thumbnails/3.jpg',
                badge: 'new',
                color: 'green',
            },
            {
                id: 'lucky-duck',
                title: 'Lucky Duck',
                provider: 'Quack Games',
                thumbnail: '/game-thumbnails/4.jpg',
                badge: 'popular',
                color: 'yellow',
            },
            {
                id: 'zeus-iii',
                title: 'Zeus III',
                provider: 'Olympus Play',
                thumbnail: '/game-thumbnails/2.jpg',
                badge: 'new',
                color: 'orange',
            },
        ],
    },
];

interface IconProps {
    className?: string;
    color?: string;
}

interface featureTielsDataProps {
    title: string;
    icon: {
        component: React.FC<IconProps>;
        color: string;
    };
    modal: {
        title: string;
        content: React.ReactNode;
    };
}

const FeatureTielsModalWrapper = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <div className='flex flex-col items-start gap-4 md:gap-6'>{children}</div>
);

const FeatureTielsText = ({
    children,
    className = 'text-base md:text-lg leading-6 md:leading-8 font-bold max-xs:text-center',
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <NeonText as='p' className={className} glowSpread={0.5}>
        {children}
    </NeonText>
);

const FeatureTielsBox = ({ children }: { children: React.ReactNode }) => (
    <NeonBox
        backgroundColor='--color-purple-500'
        backgroundOpacity={0.2}
        glowSpread={0.5}
        className='text-center p-4 md:p-6 rounded-lg'
    >
        {children}
    </NeonBox>
);

const FeatureTielsList = ({ children }: { children: React.ReactNode }) => (
    <ul className='list-disc pl-6'>{children}</ul>
);

const FeatureTielsListItem = ({ children }: { children: React.ReactNode }) => (
    <li>
        <FeatureTielsText className='text-base md:text-lg leading-6 md:leading-8 font-bold'>
            {children}
        </FeatureTielsText>
    </li>
);

export const featureTielsData: featureTielsDataProps[] = [
    {
        title: 'Gold Coins',
        icon: {
            component: GoldCoinsIcon,
            color: 'yellow',
        },
        modal: {
            title: 'Gold Coin Purchase',
            content: (
                <FeatureTielsModalWrapper>
                    <FeatureTielsText>
                        To participate without purchase, mail a handwritten
                        request including your name, address, email, and the
                        phrase "Golden Ticket Online Arcade Sweepstakes
                        Entry" to:
                    </FeatureTielsText>

                    <FeatureTielsBox>
                        <FeatureTielsText>
                            Golden Ticket Online Arcade 2186 Jackson Keller Rd
                            Suite 2269 San Antonio, TX 78213
                        </FeatureTielsText>
                    </FeatureTielsBox>

                    <FeatureTielsText>
                        Limit: One request per envelope per day. Requests must
                        be legibly handwritten to qualify.
                    </FeatureTielsText>
                </FeatureTielsModalWrapper>
            ),
        },
    },
    {
        title: 'Daily Bonus',
        icon: {
            component: GiftIcon,
            color: 'pink',
        },
        modal: {
            title: 'Claim Daily Bonus Gold Coins',
            content: (
                <FeatureTielsModalWrapper>
                    <FeatureTielsText>
                        New participants receive 10,000 Gold Coins as a sign-on
                        bonus. Additionally, 5,000 Gold Coins are awarded daily
                        for use in bonus free-to-play games.
                    </FeatureTielsText>
                    <FeatureTielsText>
                        Participants may also receive additional Gold Coins as a
                        free promotional bonus when purchasing designated Gold
                        Coin packages. These bonus Gold Coins are only valid for
                        use in exclusive games.
                    </FeatureTielsText>
                    <FeatureTielsList>
                        <FeatureTielsListItem>
                            Eligible Packages: Only specific packages include
                            bonus Gold Coins.
                        </FeatureTielsListItem>
                        <FeatureTielsListItem>
                            Bonus Amounts: Bonus Gold Coins vary by package.
                        </FeatureTielsListItem>
                    </FeatureTielsList>
                    <FeatureTielsBox>
                        <FeatureTielsText>
                            No purchase is necessary to play. All Gold Coins are
                            for entertainment purposes only and hold no cash
                            value. Must be 18 or older to participate. Void
                            where prohibited.
                        </FeatureTielsText>
                    </FeatureTielsBox>
                </FeatureTielsModalWrapper>
            ),
        },
    },
    {
        title: 'AMOE (By Mail)',
        icon: {
            component: MailIcon,
            color: 'sky',
        },
        modal: {
            title: 'Request via Postal Mail',
            content: (
                <FeatureTielsModalWrapper>
                    {' '}
                    <FeatureTielsText>
                        Sweeps Coins may be awarded through no-cost giveaway
                        contests on Golden Ticket Online Arcade and Casino's
                        social media pages. Follow us for updates!
                    </FeatureTielsText>
                    <FeatureTielsList>
                        <FeatureTielsListItem>
                            Enter our social media giveaways for a chance to
                            win!
                        </FeatureTielsListItem>
                        <FeatureTielsListItem>
                            Contests are free and easy to participate in.
                        </FeatureTielsListItem>
                    </FeatureTielsList>
                </FeatureTielsModalWrapper>
            ),
        },
    },
    {
        title: 'Competitions',
        icon: {
            component: CompetitionIcon,
            color: 'green',
        },
        modal: {
            title: 'By Entering Competitions',
            content: (
                <FeatureTielsModalWrapper>
                    <FeatureTielsText>
                        Participants can claim free Gold Coins daily by logging
                        into their Customer Account and claiming the Daily Bonus
                        once per day.
                    </FeatureTielsText>
                    <FeatureTielsList>
                        <FeatureTielsListItem>
                            Log in every day for a free bonus.
                        </FeatureTielsListItem>
                        <FeatureTielsListItem>
                            One claim per day per account.
                        </FeatureTielsListItem>
                    </FeatureTielsList>
                </FeatureTielsModalWrapper>
            ),
        },
    },
];
