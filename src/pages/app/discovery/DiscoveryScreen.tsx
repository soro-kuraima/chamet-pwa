/* eslint-disable react/jsx-no-useless-fragment */
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { HomeLiveStreamChat } from '@/components/compound/home-live-stream-chat';
import { SuggestionsList } from '@/components/compound/SuggestionsList';
import { DiscoveryMenu } from '@/pages/app/discovery/discovery-menu';
import { useCallCardStore } from '@/stores/call-card-store';

export function DiscoveryScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const { discoverGoLive } = useCallCardStore();

  return (
    <div className="discovery h-full w-full md:flex">
      {!isDesktop && <DiscoveryMenu />}
      <div className="relative overflow-auto p-0 pb-16 md:mt-8">
        <Outlet />
      </div>
      <div className="flex">
        {isDesktop && !discoverGoLive && <SuggestionsList />}
        {isDesktop && discoverGoLive && <HomeLiveStreamChat />}
      </div>
    </div>
  );
}
