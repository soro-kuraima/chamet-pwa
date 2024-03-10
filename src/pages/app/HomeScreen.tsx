import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { AudioCallScreen } from './call/AudioCallScreen';

import { CallCard } from '@/components/compound/call-card';
import { Overlay } from '@/components/compound/overlay';
import { DesktopMenu } from '@/components/functional';
import { MobileMenu } from '@/components/functional/mobile-menu';
import { useCallCardStore } from '@/stores/call-card-store';

export function HomeScreen() {
  const { callCardVisibility, toggleCallCardVisibility, audioCall } =
    useCallCardStore();

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="home-screen flex items-center md:items-start md:justify-start">
      {isDesktop ? <DesktopMenu /> : <MobileMenu />}
      <div id="home-screen-parent" className="h-screen w-screen md:flex">
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

      {audioCall &&
        createPortal(
          <AudioCallScreen />,
          document.getElementById('root') as HTMLElement
        )}
    </div>
  );
}
