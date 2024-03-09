import { useState } from 'react';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Receipt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { ProfileCard } from '@/components/compound/profile-card';
import { SendCoins } from '@/components/functional/send-coins';
import { SendStickers } from '@/components/functional/send-stickers';
import { VideoPreview } from '@/components/functional/video-preview';
import { VideoCallPopup } from '@/components/functional/VideoCallPopup';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AddWhiteIcon, CloseIcon, FaceSmileIcon } from '@/components/ui/icons/svg-icons';
import { Input } from '@/components/ui/input';
import { useCallCardStore } from '@/stores/call-card-store';

export function DiscoverDesktop() {
  const { toggleCallCardVisibility, discoverGoLive, toggleDiscoverGoLive } =
    useCallCardStore();

  const navigate = useNavigate();

  const [specialChat, setSpecialChat] = useState(false);

  const [sendStickers, setSendStickers] = useState(false);

  const [sendCoins, setSendCoins] = useState(false);

  return (
    <div className="relative flex h-full w-full items-start justify-center gap-4 p-0">
      <div className="profiles-scroll-container discover-desktop-container h-full rounded-md p-0 px-4">
        <div className="rounded-md py-4">
          {discoverGoLive ? (
            <VideoCallPopup onClose={toggleDiscoverGoLive} />
          ) : (
            <VideoPreview onClose={toggleDiscoverGoLive} />
          )}
        </div>
        <div className="neraby-profiles grid h-full w-full grid-cols-2 gap-4 py-4 xl:grid-cols-3">
          <ProfileCard
            userName="UserName"
            userImage="/images/man-profile.png"
            userLocationIcon="/images/flag-usa.png"
            userLocationName="USA"
            onCallActionTap={toggleCallCardVisibility}
            onUserNameTap={() => navigate('/app/profile')}
          />
          <ProfileCard
            userName="UserName"
            userImage="/images/woman-profile.png"
            userLocationIcon="/images/flag-india.png"
            userLocationName="IND"
            onCallActionTap={toggleCallCardVisibility}
            onUserNameTap={() => navigate('/app/profile')}
          />
          <ProfileCard
            userName="UserName"
            userImage="/images/man-profile.png"
            userLocationIcon="/images/flag-usa.png"
            userLocationName="USA"
            onCallActionTap={toggleCallCardVisibility}
            onUserNameTap={() => navigate('/app/profile')}
          />
        </div>
      </div>
      {discoverGoLive && (
        <div id="home-live-stream-chat" className="live-stream-chat relative ml-4 flex h-full w-[30vw] xl:w-[24vw] flex-col gap-8 py-4">
          <div className="h-full rounded-md border border-gray-300 shadow-2xl drop-shadow-2xl bg-background">
            <p className="mx-auto flex justify-center py-6 text-black text-xl font-bold border-b border-gray-300">
              {' '}
              Show support for Username
            </p>
            {
              true && (
                <div className="w-full px-2 py-1 bg-background">
                  <div
                    className="live-chat-input flex items-center px-0 py-2">
                    <Button size="icon" variant="link" className="bg-background px-1 py-1">
                      <FaceSmileIcon className="h-8 w-8 text-black" />
                    </Button>
                    <Input
                      className="rounded-full"
                      placeholder="Type a message..."
                     />
                    <Button
                      size="icon"
                      className="p-2 mx-2"
                      onClick={() => {
                  setSpecialChat(true);
                }}>
                      <Receipt className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              )
             }
            {
              specialChat &&
              (
                <div className="live-stream-action-buttons absolute left-0 top-0 z-[100] border border-gray-300 w-full px-0 py-1 bg-background">

                  {!sendStickers && !sendCoins ? (
                    <>
                      <div className="w-full flex justify-end">
                        <Button
                          size="icon"
                          variant="link"
                          onClick={() => setSpecialChat(false)}>
                          <CloseIcon className="h-6 w-6 stroke-primary" />
                        </Button>
                      </div>
                      <div className="py-0">
                        <Button
                          className="my-2 flex w-full items-center justify-between py-8 rounded-none"
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
                          className="my-2 flex w-full items-center justify-between py-8 rounded-none"
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
              )
            }
            <div className="h-full flex flex-col border-t border-gray-300">
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

                <div className="container h-full w-full">
                  <Carousel
                    className="h-full w-full"
                    opts={{
              loop: true,
            }}>
                    <CarouselContent className="">
                      <CarouselItem className="basis-full">
                        <img src="/images/hot-woman-1.jpg" alt="hot-woman 1" className="h-[40vh] w-full object-cover" />
                      </CarouselItem>
                      <CarouselItem className="basis-full">
                        <img src="/images/hot-woman-2.jpg" alt="hot-woman 2" className="h-full w-full object-cover" />
                      </CarouselItem>
                      <CarouselItem className="basis-full">
                        <img src="/images/hot-woman-3.jpg" alt="hot-woman 3" className="h-full w-full object-cover" />
                      </CarouselItem>
                      <CarouselItem className="basis-full">
                        <img src="/images/hot-woman-4.jpg" alt="hot-woman 4" className="h-full w-full object-cover" />
                      </CarouselItem>
                      <CarouselItem className="basis-full">
                        <img src="/images/hot-woman-5.jpg" alt="hot-woman 5" className="h-full w-full object-cover" />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
