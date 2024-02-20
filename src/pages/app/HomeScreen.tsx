import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { CallCard } from '@/components/compound/call-card';
import { Overlay } from '@/components/compound/overlay';
import { DesktopMenu } from '@/components/functional';
import { MobileMenu } from '@/components/functional/mobile-menu';
import { RecentChatsScreen } from '@/pages/app/recent-chats/RecentChatsScreen';
import { useCallCardStore } from '@/stores/call-card-store';

export function HomeScreen() {
  const { callCardVisibility, toggleCallCardVisibility } = useCallCardStore();

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="home-screen flex min-h-screen items-center justify-center md:w-screen md:items-start">
      {isDesktop ? <DesktopMenu /> : <MobileMenu />}
      <div className="h-screen w-screen overflow-auto md:flex">
        
          <Outlet />
        
        {isDesktop && <RecentChatsScreen />}
      </div>

      {callCardVisibility &&
        createPortal(
          <Overlay>
            {' '}
            <CallCard onCardClose={toggleCallCardVisibility} />
          </Overlay>,
          document.body
        )}
    </div>
  );
}
