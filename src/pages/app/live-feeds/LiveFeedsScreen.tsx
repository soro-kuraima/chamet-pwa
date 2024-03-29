/* eslint-disable react/jsx-no-useless-fragment */
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { LiveFeedsMenu } from '@/pages/app/live-feeds/live-feeds-menu';
import { ProfileScreen2 } from '@/pages/app/profile/ProfileScreen2';

export function LiveFeedsScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="live-feeds h-full w-full md:flex md:overflow-hidden">
      {!isDesktop && <LiveFeedsMenu />}
      <div className="container relative overflow-auto p-0 pb-16 md:mt-8">
        <Outlet />
      </div>
      {isDesktop && <ProfileScreen2 />}
    </div>
  );
}
