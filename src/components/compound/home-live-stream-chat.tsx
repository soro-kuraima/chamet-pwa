import { useState } from 'react';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Receipt } from 'lucide-react';

import { SendCoins } from '@/components/functional/send-coins';
import { SendStickers } from '@/components/functional/send-stickers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  AddWhiteIcon,
  CloseIcon,
  FaceSmileIcon,
} from '@/components/ui/icons/svg-icons';
import { Input } from '@/components/ui/input';

export function HomeLiveStreamChat() {
  const [specialChat, setSpecialChat] = useState(false);

  const [sendStickers, setSendStickers] = useState(false);

  const [sendCoins, setSendCoins] = useState(false);

  return (
    <div
      id="home-live-stream-chat"
      className="live-stream-chat relative ml-4 flex h-full w-[28vw] flex-col gap-8 py-4 xl:w-[24vw] md:mt-8">
      <div className="h-full rounded-md border border-gray-300 bg-background shadow-2xl drop-shadow-2xl">
        <p className="mx-auto flex justify-center border-b border-gray-300 py-6 text-xl font-bold text-black">
          {' '}
          Show support for Username
        </p>
        {true && (
          <div className="w-full bg-background px-2 py-1">
            <div className="live-chat-input flex items-center px-0 py-2">
              <Button
                size="icon"
                variant="link"
                className="bg-background px-1 py-1">
                <FaceSmileIcon className="h-8 w-8 text-black" />
              </Button>
              <Input className="rounded-full" placeholder="Type a message..." />
              <Button
                size="icon"
                className="mx-2 p-2"
                onClick={() => {
                  setSpecialChat(true);
                }}>
                <Receipt className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
        {specialChat && (
          <div className="live-stream-action-buttons absolute left-0 top-0 z-[100] w-full border border-gray-300 bg-background px-0 py-1">
            {!sendStickers && !sendCoins ? (
              <>
                <div className="flex w-full justify-end">
                  <Button
                    size="icon"
                    variant="link"
                    onClick={() => setSpecialChat(false)}>
                    <CloseIcon className="h-6 w-6 stroke-primary" />
                  </Button>
                </div>
                <div className="py-0">
                  <Button
                    className="my-2 flex w-full items-center justify-between rounded-none py-8"
                    variant="ghost"
                    onClick={() => setSendStickers(true)}>
                    <img
                      src="/send_stickers.webp"
                      alt="send stickers"
                      className="h-12 w-12"
                    />
                    <span className="text-lg font-semibold">Send Stickers</span>
                    <ChevronRightIcon className="h-6 w-6" />
                  </Button>
                  <Button
                    className="my-2 flex w-full items-center justify-between rounded-none py-8"
                    variant="ghost"
                    onClick={() => setSendCoins(true)}>
                    <img
                      src="/super_chat.webp"
                      alt="send stickers"
                      className="h-12 w-12"
                    />
                    <span className="text-lg font-semibold">Send Coins</span>
                    <ChevronRightIcon className="h-6 w-6" />
                  </Button>
                </div>
              </>
            ) : sendStickers ? (
              <>
                <div className=" flex items-center gap-8">
                  <Button
                    size="icon"
                    variant="link"
                    onClick={() => setSendStickers(false)}>
                    <CloseIcon className="h-6 w-6 stroke-primary" />
                  </Button>
                  <span className="text-lg font-semibold">Send Stickers</span>
                </div>
                <SendStickers />
              </>
            ) : (
              <>
                <div className=" flex items-center gap-8">
                  <Button
                    size="icon"
                    variant="link"
                    onClick={() => setSendCoins(false)}>
                    <CloseIcon className="h-6 w-6 stroke-primary" />
                  </Button>
                  <span className="text-lg font-semibold">Send Coins</span>
                </div>
                <SendCoins />
              </>
            )}
          </div>
        )}
        <div className="flex h-full flex-col border-t border-gray-300">
          <div className="flex w-full flex-col items-center bg-background px-8 py-4">
            <div className="w-full py-2">
              <div className="user-info flex w-full items-center justify-between gap-4 py-1">
                <Avatar className="h-12 w-12 ring-2 ring-red-500 ring-offset-2">
                  <AvatarImage src="/images/woman-profile.png" alt="woman" />
                  <AvatarFallback>Woman</AvatarFallback>
                </Avatar>
                <div className="user-info-text flex flex-col">
                  <h3 className="text-lg font-medium text-black">Username</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Button size="icon">
                    <AddWhiteIcon className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="badges-section flex items-center justify-start gap-4 px-4 py-6">
              <Badge className="rounded-full bg-white">
                <img
                  src="/images/flag-india.png"
                  alt="flag-india"
                  className="h-4 w-4"
                />
                <span className="ml-1 text-black">India</span>
              </Badge>
              <Badge className="rounded-full bg-white">
                <img
                  src="/images/g-translate-icon.png"
                  alt="flag-india"
                  className="h-4 w-4"
                />
                <span className="ml-1 text-black">English</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
