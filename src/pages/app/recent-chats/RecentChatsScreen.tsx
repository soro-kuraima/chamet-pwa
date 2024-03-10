/* eslint-disable react/jsx-no-useless-fragment */

import { useMediaQuery } from 'react-responsive';

import { RecentChatScreen } from '../recent-chat/RecentChatScreen';

import { ScrollArea } from '@/components/ui/scroll-area';
import { RecentChats } from '@/pages/app/recent-chats/recent-chats';
import { RecentChatsMenu } from '@/pages/app/recent-chats/recent-chats-menu';

export function RecentChatsScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="overflow-hidden md:flex md:h-screen">
      <div className="recent-chats overflow-auto md:basis-1/3 md:pt-8 md:pr-4 pb-16 md:border-r md:border-gray-300 md:shadow-xl">
        {!isDesktop && <RecentChatsMenu />}
        <div className="container relative px-1 py-4 md:py-0">
          <ScrollArea className="h-full w-full">
            <RecentChats />
          </ScrollArea>
        </div>
      </div>
      {isDesktop && (

      <RecentChatScreen />

      )}
    </div>
  );
}
