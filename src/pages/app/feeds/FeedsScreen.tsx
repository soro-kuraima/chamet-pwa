/* eslint-disable react/jsx-no-useless-fragment */

import { FeedsMenu } from './feeds-menu';

import { SuggestionsList } from '@/components/compound/SuggestionsList';
import { Feeds } from '@/pages/app/feeds/Feeds';

export function FeedsScreen() {
  return (
    <div className="live-feeds flex h-full w-full overflow-hidden md:flex ">
      <div className="container relative overflow-auto p-0 pb-16">
        <FeedsMenu />
        <Feeds />
      </div>
      <div className="flex">
        <SuggestionsList />
      </div>
    </div>
  );
}
