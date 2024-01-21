/* eslint-disable react/jsx-no-useless-fragment */
import { Outlet } from 'react-router-dom';

import { LiveFeedsMenu } from '@/pages/app/live-feeds/live-feeds-menu';

export function LiveFeedsScreen() {
  return (
    <div className="live-feeds pb-16">
      <LiveFeedsMenu />
      <div className="container relative p-0">
        <Outlet />
      </div>
    </div>
  );
}
