import { useState } from 'react';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

import { VideoCallPopup } from '../call/VideoCallPopup';

import { ProfileCard } from '@/components/compound/profile-card';
import { ProfileScreenMini } from '@/components/compound/profile-screen-mini';
import { SendCoins } from '@/components/functional/send-coins';
import { SendStickers } from '@/components/functional/send-stickers';
import { Button } from '@/components/ui/button';
import { CloseIcon } from '@/components/ui/icons/svg-icons';
import { useCallCardStore } from '@/stores/call-card-store';
import './shimmer.css';

export function DiscoverDesktop() {
  const { toggleCallCardVisibility, discoverGoLive, toggleDiscoverGoLive } =
    useCallCardStore();

  const navigate = useNavigate();

  const [sendStickers, setSendStickers] = useState(false);

  const [sendCoins, setSendCoins] = useState(false);

  const [shimmer, setShimmer] = useState(false);

  return (
    <div className="relative flex h-full w-full items-start justify-center p-0">
      <div className="profiles-scroll-container discover-desktop-container h-full rounded-md p-0 px-4">
        <div className="rounded-md py-4">
          <VideoCallPopup onClose={toggleDiscoverGoLive} />
        </div>
        <div className="flex items-center justify-center">
          <Button
            className={`custom-box-shadow relative mx-auto my-4 rounded-full
       bg-green-600 bg-indigo-700 px-12 py-6 text-2xl font-bold text-white shadow-lg hover:bg-green-600/80 ${
         shimmer ? 'shimmer' : ''
       }`}
            onClick={() => {
              setShimmer(true);
              setTimeout(() => {
                setShimmer(false);
              }, 1500);
              toggleDiscoverGoLive();
            }}>
            {shimmer && (
              <svg className="shimmer mr-2" viewBox="25 25 50 50">
                <circle className="shimmer-circle" r="20" cy="50" cx="50" />
              </svg>
            )}{' '}
            Go Live{' '}
          </Button>
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
        <div className="live-stream flex h-full w-[335px] flex-col gap-8 py-4">
          <div className="h-[45vh] border-2">
            <p className="mx-auto flex justify-center py-2 text-xl font-bold">
              {' '}
              Show support for Username
            </p>
            <div className="live-stream-action-buttons w-full px-2">
              {!sendStickers && !sendCoins ? (
                <div className="py-8">
                  <Button
                    className="my-2 flex w-full items-center justify-between py-8"
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
                    className="my-2 flex w-full items-center justify-between py-8"
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
          </div>
          <ProfileScreenMini />
        </div>
      )}
    </div>
  );
}
