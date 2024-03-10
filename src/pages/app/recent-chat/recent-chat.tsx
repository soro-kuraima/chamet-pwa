import { ChatInput } from '@/components/compound/chat-input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TypingIndicator } from '@/components/ui/typing-indicator';

export function RecentChat() {
  return (
    <div className="recent-chat">
      <ScrollArea className="h-full w-full">
        <div className="chat-messages w-full px-4 py-6">
          <div className="message flex items-end gap-2 py-2">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/images/chat-user.png" alt="sfkjsd" />
              <AvatarFallback>Username</AvatarFallback>
            </Avatar>
            <div className="received-message rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-lg">
              <p className="py-4 text-black">
                Hello guys, We have discussed about post corona activation plan
              </p>
              <p className="text-right text-black/30">16:04</p>
            </div>
          </div>
          <div className="message flex items-end gap-2 py-2">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/images/chat-user.png" alt="sfkjsd" />
              <AvatarFallback>Username</AvatarFallback>
            </Avatar>
            <div className="received-message rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-lg">
              <p className="py-4 text-black">
                Hello guys, We have discussed about post corona activation plan
                and our decision is to go to Bali. We will have a very big party
                after this corona ends! These are some images about our
                destination.
              </p>
              <p className="text-right text-black/30">16:04</p>
            </div>
          </div>
          <div className="media-message flex items-end gap-2 rounded-2xl px-2 py-2">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/images/chat-user.png" alt="sfkjsd" />
              <AvatarFallback>Username</AvatarFallback>
            </Avatar>
            <div className="media grid grid-cols-2 gap-2">
              <img
                src="/images/scenery-1.png"
                alt="scenery-1"
                className="col-span-2"
              />
              <img src="/images/scenery-2.png" alt="scenery-2" />
              <img src="/images/scenery-3.png" alt="scenery-3" />
            </div>
          </div>
          <div className="message">
            <div className="media-message flex items-end gap-2 rounded-md px-2 py-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/images/chat-user.png" alt="sfkjsd" />
                <AvatarFallback>Username</AvatarFallback>
              </Avatar>
              <div className="media grid grid-cols-2 gap-2">
                <img
                  src="/images/scenery-1.png"
                  alt="scenery-1"
                  className="col-span-2"
                />
                <img src="/images/scenery-2.png" alt="scenery-2" />
                <img src="/images/scenery-3.png" alt="scenery-3" />
              </div>
            </div>
            <div className="message">
              <div className="sent-message flex items-center justify-end gap-2 px-4 py-2">
                <div className="received-message rounded-2xl border border-gray-200 bg-primary px-4 py-2 shadow-lg">
                  <p className="py-4 text-white">
                    Hello guys, We have discussed about post corona activation
                    plan and our decision is to go to Bali. We will have a very
                    big party after this corona ends! These are some images
                    about our destination.
                  </p>
                  <p className="text-right text-white">16:04</p>
                </div>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/images/woman-profile.png" alt="userName" />
                  <AvatarFallback>Username</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="message">
              <div className="sent-message flex items-center justify-end gap-2 px-4 py-2">
                <TypingIndicator />
                <p className="text-black">Username is typing</p>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/images/woman-profile.png" alt="userName" />
                  <AvatarFallback>Username</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      <div
        id="chat-input"
        className="chat-input md:border-rounded-md fixed bottom-0 left-0 z-[100] w-full border-t-2 border-gray-400 bg-background p-1 drop-shadow-2xl md:left-auto md:basis-2/3">
        <ChatInput />
      </div>
    </div>
  );
}
