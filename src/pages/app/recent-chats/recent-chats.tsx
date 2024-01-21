import { RecentChatsCard } from '@/components/compound/recent-chats-card';
import { SearchInput } from '@/components/compound/search-input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function RecentChats() {
  return (
    <div className="recent-chats">
      <div className="search-box-container px-2">
        <SearchInput placeholder="Recent Chats" />
      </div>
      <div className="search-filter-buttons flex items-center gap-4 px-4 py-4">
        <Button>All Chats</Button>
        <Button className="bg-secondary/30 text-black">Latest</Button>
        <Button className="bg-secondary/30 text-black">Oldest</Button>
      </div>
      <div className="flex items-center justify-center p-0">
        <div className="recent-chats-scroll-container h-full w-full p-0">
          <ScrollArea className="h-full w-full">
            <RecentChatsCard
              userName="Lorem Ipsum"
              userImage="/images/chat-user.png"
              lastMessage="Please take a look at the image"
              lastMessageTime="18:00"
              unreadMessageCount={5}
            />
            <RecentChatsCard
              userName="Lorem Ipsum"
              userImage="/images/chat-user.png"
              lastMessage="Please take a look at the image"
              lastMessageTime="16:00"
              unreadMessageCount={5}
            />
            <RecentChatsCard
              userName="Lorem Ipsum"
              userImage="/images/chat-user.png"
              lastMessage="Please take a look at the image"
              lastMessageTime="10:00"
              unreadMessageCount={5}
            />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
