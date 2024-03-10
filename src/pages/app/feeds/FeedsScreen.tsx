/* eslint-disable react/jsx-no-useless-fragment */

import { useMediaQuery } from 'react-responsive';

import { FeedsMenu } from './feeds-menu';

import { SuggestionsList } from '@/components/compound/SuggestionsList';
import { Feeds } from '@/pages/app/feeds/Feeds';

export function FeedsScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="live-feeds flex h-full w-full overflow-hidden md:ml-4 md:flex">
      <div className="container relative overflow-auto p-0 pb-16 md:basis-1/2">
        <FeedsMenu />
        <Feeds />
      </div>
      {isDesktop && <SuggestionsList />}
    </div>
  );
}
