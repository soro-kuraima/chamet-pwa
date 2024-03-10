import { Camera, MoreHorizontal, Phone } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function RecentChatMenu() {
  return (
    <div className="chat-title flex items-center justify-between border-b border-gray-200 px-4 md:pb-2 md:shadow-lg">
      <div className="user-info flex items-center gap-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/images/chat-user.png" alt="userName" />
          <AvatarFallback>Username</AvatarFallback>
        </Avatar>
        <div className="user-name">
          <p className="font-semibold text-black">Username</p>
          <p>Online</p>
        </div>
      </div>
      <div className="action-buttons flex items-center gap-2">
        <div className="action-item flex flex-col items-center gap-2">
          <Button size="icon" variant="ghost">
            {' '}
            <Phone className="h-6 w-6 fill-primary stroke-white" />{' '}
          </Button>
        </div>
        <div className="action-item flex flex-col items-center gap-2">
          <Button size="icon" variant="ghost">
            {' '}
            <Camera className="h-6 w-6 fill-primary stroke-white" />{' '}
          </Button>
        </div>
        <MoreHorizontal className="h-6 w-6 stroke-primary" />
      </div>
    </div>
  );
}
