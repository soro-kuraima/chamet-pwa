import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

import { Button } from '@/components/ui/button';

export function NotificationPopup() {
  return (
    <div className="w-[25vw] rounded-md border border-gray-300 bg-background p-4 shadow-xl">
      <div className="notification-header">
        <h1 className="title text-2xl font-bold text-black">Notifications</h1>
      </div>
      <div className="notification-filter-buttons flex gap-6 py-4">
        <Button variant="accent" className="rounded-2xl">
          All
        </Button>
        <Button variant="ghost" className="rounded-2xl">
          Unread
        </Button>
      </div>
      <div className="notifications py-4">
        <div className="notification flex gap-2 py-1">
          <Avatar className="h-16 w-16 basis-1/3">
            <AvatarImage src="/images/chat-user.png" alt="chat user" />
            <AvatarFallback>Username</AvatarFallback>
          </Avatar>

          <div className="">
            <p className="text-sm font-medium text-black">
              You have access to a new message for the chat.
              sdjkfhsdlkfjlksdjflksjf sdjfhkjsdhfkjdsf sdfskdfjakjsh
            </p>
            <p className="py-1 text-xs font-semibold text-primary">
              about an hour ago
            </p>
          </div>
        </div>
        <div className="notification flex gap-2 py-1">
          <Avatar className="h-16 w-16 basis-1/3">
            <AvatarImage src="/images/chat-user.png" alt="chat user" />
            <AvatarFallback>Username</AvatarFallback>
          </Avatar>

          <div className="">
            <p className="text-sm font-medium text-black">
              You have access to a new message for the chat.
              sdjkfhsdlkfjlksdjflksjf sdjfhkjsdhfkjdsf sdfskdfjakjsh
            </p>
            <p className="py-1 text-xs font-semibold text-primary">
              about an hour ago
            </p>
          </div>
        </div>
        <div className="notification flex gap-2 py-1">
          <Avatar className="h-16 w-16 basis-1/3">
            <AvatarImage src="/images/chat-user.png" alt="chat user" />
            <AvatarFallback>Username</AvatarFallback>
          </Avatar>

          <div className="">
            <p className="text-sm font-medium text-black">
              You have access to a new message for the chat.
              sdjkfhsdlkfjlksdjflksjf sdjfhkjsdhfkjdsf sdfskdfjakjsh
            </p>
            <p className="py-1 text-xs font-semibold text-primary">
              about an hour ago
            </p>
          </div>
        </div>
        <div className="notification flex gap-2 py-1">
          <Avatar className="h-16 w-16 basis-1/3">
            <AvatarImage src="/images/chat-user.png" alt="chat user" />
            <AvatarFallback>Username</AvatarFallback>
          </Avatar>

          <div className="">
            <p className="text-sm font-medium text-black">
              You have access to a new message for the chat.
              sdjkfhsdlkfjlksdjflksjf sdjfhkjsdhfkjdsf sdfskdfjakjsh
            </p>
            <p className="py-1 text-xs font-semibold text-primary">
              about an hour ago
            </p>
          </div>
        </div>
        <div className="notification flex gap-2 py-1">
          <Avatar className="h-16 w-16 basis-1/3">
            <AvatarImage src="/images/chat-user.png" alt="chat user" />
            <AvatarFallback>Username</AvatarFallback>
          </Avatar>

          <div className="">
            <p className="text-sm font-medium text-black">
              You have access to a new message for the chat.
              sdjkfhsdlkfjlksdjflksjf sdjfhkjsdhfkjdsf sdfskdfjakjsh
            </p>
            <p className="py-1 text-xs font-semibold text-primary">
              about an hour ago
            </p>
          </div>
        </div>
      </div>
      <div className="redirect-button w-full">
        <Button variant="accent" className="w-full font-semibold text-white">
          See All Notifications
        </Button>
      </div>
    </div>
  );
}
