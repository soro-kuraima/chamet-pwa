import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';

import { CallCard } from '@/components/compound/call-card';
import { Overlay } from '@/components/compound/overlay';
import { Menu } from '@/components/functional/menu';
import { useCallCardStore } from '@/stores/call-card-store';

export function HomeScreen() {
  const { callCardVisibility, toggleCallCardVisibility } = useCallCardStore();

  return (
    <div className="home-screen flex min-h-screen items-center justify-center">
      <div className="h-screen w-screen overflow-auto">
        <Outlet />
      </div>
      <Menu />
      {callCardVisibility &&
        createPortal(
          <Overlay> <CallCard onCardClose={toggleCallCardVisibility} /></Overlay>,
          document.body
        )}
    </div>
  );
}
