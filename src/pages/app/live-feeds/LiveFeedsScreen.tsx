/* eslint-disable react/jsx-no-useless-fragment */
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { ProfileScreen } from '../profile/ProfileScreen';

import { LiveFeedsMenu } from '@/pages/app/live-feeds/live-feeds-menu';

export function LiveFeedsScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="live-feeds h-full w-full overflow-hidden pb-16 md:flex">
      {!isDesktop && <LiveFeedsMenu />}
      <div className="container relative overflow-auto p-0 md:mt-8 md:w-[32vw]">
        <Outlet />
      </div>
      {isDesktop && <ProfileScreen />}
    </div>
  );
}
