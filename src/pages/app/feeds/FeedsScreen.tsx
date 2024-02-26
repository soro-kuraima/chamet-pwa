/* eslint-disable react/jsx-no-useless-fragment */

import { Feeds } from '@/pages/app/feeds/Feeds';

export function FeedsScreen() {
  return (
    <div className="live-feeds h-full w-full pb-16">
      <div className="container relative overflow-auto p-0 md:mt-16">
        <Feeds />
      </div>
    </div>
  );
}
