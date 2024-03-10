/* eslint-disable react/jsx-no-useless-fragment */

import { RecentChat } from '@/pages/app/recent-chat/recent-chat';
import { RecentChatMenu } from '@/pages/app/recent-chat/recent-chat-menu';

export function RecentChatScreen() {
  return (
    <div className="recent-chat overflow-auto pb-16 md:pt-8 md:basis-2/3 md:border-r md:border-gray-300">
      <RecentChatMenu />
      <div className="relative px-1 py-4">
        <RecentChat />
      </div>
    </div>
  );
}
