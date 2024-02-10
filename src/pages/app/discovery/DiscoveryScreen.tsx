/* eslint-disable react/jsx-no-useless-fragment */
import { Outlet } from 'react-router-dom';

import { DiscoveryMenu } from '@/pages/app/discovery/discovery-menu';

export function DiscoveryScreen() {
  return (
    <div className="discovery h-full w-full pb-16">
      <DiscoveryMenu />
      <div className="container relative p-0">
        <Outlet />
      </div>
    </div>
  );
}
