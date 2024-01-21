/* eslint-disable react/jsx-no-useless-fragment */

import { Feeds } from '@/pages/app/feeds/Feeds';
import { FeedsMenu } from '@/pages/app/feeds/feeds-menu';

export function FeedsScreen() {
  return (
    <div className="live-feeds pb-16">
      <FeedsMenu />
      <div className="container relative p-0">
        <Feeds />
      </div>
    </div>
  );
}
