/* eslint-disable react/jsx-no-useless-fragment */

import { RecentChats } from '@/pages/app/recent-chats/recent-chats';
import { RecentChatsMenu } from '@/pages/app/recent-chats/recent-chats-menu';

export function RecentChatsScreen() {
  return (
    <div className="live-feeds pb-16">
      <RecentChatsMenu />
      <div className="container relative px-1 py-4">
        <RecentChats />
      </div>
    </div>
  );
}
