'use client';
import { useIsLoggedIn } from '@/contexts/auth-context';
import HowDoseItWork from './components/how-dose-It-work';
import InviteFriendsBanner from './components/invite-friends-banner';
import ShareLink from './components/share-link';
import Statistics from './components/statistics';

function ReferFriend() {
    const { isLoggedIn } = useIsLoggedIn();
    return (
        <>
            <InviteFriendsBanner isLoggedIn={isLoggedIn} />
            <HowDoseItWork isLoggedIn={isLoggedIn} />
            <Statistics isLoggedIn={isLoggedIn} />
            <ShareLink isLoggedIn={isLoggedIn} />
        </>
    );
}

export default ReferFriend;
