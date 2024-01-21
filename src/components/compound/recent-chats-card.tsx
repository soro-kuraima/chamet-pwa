import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type RecentChatsCardProps = {
  userName: string;
  userImage: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadMessageCount: number;
};

const RecentChatsCard = React.forwardRef<HTMLDivElement, RecentChatsCardProps>(
  (
    {
      userName,
      userImage,
      lastMessage,
      lastMessageTime,
      unreadMessageCount,
    },
    ref
  ) => (
    <div
      ref={ref}
      className="recent-chats-card my-2 flex items-center justify-between rounded-md bg-[#cce3ff] px-2">
      <div className="user-info relative p-1">
        <Avatar className="h-16 w-16">
          <AvatarImage src={userImage} alt={userName} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
        <div className="absolute right-2 bottom-3 ring-1 ring-offset-2 ring-white h-2 w-2 rounded-full bg-green-400" />
      </div>
      <div className="message flex flex-col gap-4">
        <span className="text-md font-semibold text-black">{userName}</span>
        <span className="text-sm font-medium text-black/80">{lastMessage}</span>
      </div>
      <div className="message flex flex-col items-center gap-4 pb-4">
        <span className="py-2 text-sm font-medium">{lastMessageTime}</span>

        <span className="text-md flex h-8 w-8 items-center items-center rounded-full bg-primary pl-[11px] pt-1 font-bold text-white">
          {unreadMessageCount}
        </span>
      </div>
    </div>
  )
);

export { RecentChatsCard };
