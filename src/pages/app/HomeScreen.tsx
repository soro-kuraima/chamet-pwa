import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { CallCard } from '@/components/compound/call-card';
import { Overlay } from '@/components/compound/overlay';
import { DesktopMenu } from '@/components/functional';
import { MobileMenu } from '@/components/functional/mobile-menu';
import { useCallCardStore } from '@/stores/call-card-store';

export function HomeScreen() {
  const { callCardVisibility, toggleCallCardVisibility } = useCallCardStore();

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="home-screen flex min-h-screen items-center md:w-screen md:items-start md:justify-center md:px-0">
      {isDesktop ? <DesktopMenu /> : <MobileMenu />}
      <div className="h-screen w-screen md:flex md:w-[60vw]">
        <Outlet />
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
