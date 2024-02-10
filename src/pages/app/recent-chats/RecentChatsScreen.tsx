/* eslint-disable react/jsx-no-useless-fragment */

import { useMediaQuery } from 'react-responsive';

import { RecentChats } from '@/pages/app/recent-chats/recent-chats';
import { RecentChatsMenu } from '@/pages/app/recent-chats/recent-chats-menu';

export function RecentChatsScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="recent-chats pb-16 md:h-screen md:w-1/4">
      {!isDesktop && <RecentChatsMenu />}
      <div className="container relative px-1 py-4 md:px-8">
        <RecentChats />
      </div>
    </div>
  );
}
