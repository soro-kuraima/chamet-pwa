import {
  ArrowLeftStartOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import {
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';

import ellipseBg1 from '@/assets/ellipse-bg-1.svg';
import ellipseBg2 from '@/assets/ellipse-bg-2.svg';
import ellipseBg3 from '@/assets/ellipse-bg-3.svg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { VideoCameraActiveIcon } from '@/components/ui/icons';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AccountScreen() {
  return (
    <div className="account">
      <div
        className="absolute top-0 z-[-10] h-32 w-full bg-cover bg-bottom overflow-hidden md:w-[90vw]"
        style={{
          backgroundImage: `url(${ellipseBg1})`,
        }}
      />
      <div
        className="absolute top-0 z-[-20] h-48 w-full bg-cover bg-bottom overflow-hidden md:w-[90vw]"
        style={{
          backgroundImage: `url(${ellipseBg2})`,
        }}
      />
      <div
        className="absolute top-0 z-[-30] h-64 w-full bg-cover bg-bottom overflow-hidden md:w-[90vw]"
        style={{
          backgroundImage: `url(${ellipseBg3})`,
        }}
      />
      <ScrollArea>
        <div className="content flex h-screen flex-col justify-between">
          <div className="top">
            <div className="account-menu flex items-center justify-between px-2 py-4">
              <div className="back-button">
                <Button variant="link">
                  <ChevronLeftIcon className="h-8 w-8 stroke-black" />
                </Button>
                <div className="h-8" />
              </div>
              <div className="user-info">
                <p className="text-2xl font-medium text-black">Username</p>
              </div>
              <div className="profile-icon">
                <img
                  src="/images/account-icon.png"
                  alt="account-icon"
                  className="h-20 w-20"
                />
              </div>
            </div>
            <div className="badges-section flex w-full items-center justify-end gap-8 px-4 py-6">
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
            <div className="account-stats flex w-full items-center justify-between px-12 py-6">
              <div className="stat flex flex-col items-center">
                <p className="text-2xl font-medium text-black">0</p>
                <p className="text-sm font-medium text-black">Friends</p>
              </div>
              <div className="stat flex flex-col items-center">
                <p className="text-2xl font-medium text-black">0</p>
                <p className="text-sm font-medium text-black">Followers</p>
              </div>
              <div className="stat flex flex-col items-center">
                <p className="text-2xl font-medium text-black">0</p>
                <p className="text-sm font-medium text-black">Following</p>
              </div>
            </div>
            <div className="container p-0">
              <div className="account-menu flex flex-col gap-8 px-8 py-12">
                <div className="account-menu-item flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <VideoCameraActiveIcon className="h-8 w-8" />
                    <span className="px-8 text-lg font-medium text-black">
                      Home
                    </span>
                  </div>
                </div>
                <div className="account-menu-item flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/images/rupee.png"
                      alt="Rupee"
                      className="h-8 w-8"
                    />
                    <span className="px-8 text-lg font-medium text-black">
                      My Balance
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/rupee.png"
                      alt="Rupee"
                      className="h-6 w-6"
                    />
                    <span className="text-lg font-medium text-black">500</span>
                    <ChevronRightIcon className="h-8 w-8 stroke-black/60" />
                  </div>
                </div>
                <div className="account-menu-item flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <UserCircleIcon className="inline-flex h-8 w-8" />
                    <span className="px-8 text-lg font-medium text-black">
                      Profile
                    </span>
                  </div>
                  <ChevronRightIcon className="h-6 w-6 stroke-black/60" />
                </div>
                <div className="account-menu-item flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <AdjustmentsHorizontalIcon className="inline-flex h-8 w-8" />
                    <span className="px-8 text-lg font-medium text-black">
                      Settings
                    </span>
                  </div>
                  <ChevronRightIcon className="h-6 w-6 stroke-black/60" />
                </div>
              </div>
              <div className="refer-link mt-8">
                <div className="flex items-center gap-10 bg-gradient-to-b from-[#3087ec]/30 to-[#3830d7]/30 px-6 py-1">
                  <img
                    src="/images/gift-box.png"
                    alt="gift-box"
                    className="h-16 w-16"
                  />
                  <span className="text-lg font-semibold text-primary">
                    Refer a friend
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex min-w-full items-center gap-4 bg-background px-8 py-10">
              <ArrowLeftStartOnRectangleIcon className="h-8 w-8" />
              <span className="font-medium text-black">Sign Out</span>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
