import { ArrowLeftStartOnRectangleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { AdjustmentsHorizontalIcon, UserCircleIcon } from '@heroicons/react/24/solid';

import ellipseBg1 from '@/assets/ellipse-bg-1.svg';
import ellipseBg2 from '@/assets/ellipse-bg-2.svg';
import ellipseBg3 from '@/assets/ellipse-bg-3.svg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { VideoCameraActiveIcon } from '@/components/ui/icons';

export function AccountScreen() {
  return (
    <div
      className="account pb-16"
    >
      <div
        className="absolute h-32 w-full top-0 z-[-10] bg-cover bg-bottom"
        style={{
      backgroundImage: `url(${ellipseBg1})`,
    }}
    />
      <div
        className="absolute h-48 w-full top-0 z-[-20] bg-cover bg-bottom"
        style={{
        backgroundImage: `url(${ellipseBg2})`,
      }} />
      <div
        className="absolute h-64 w-full top-0 z-[-30] bg-cover bg-bottom"
        style={{
           backgroundImage: `url(${ellipseBg3})`,
        }} />
      <div className="account-menu px-2 py-4 flex justify-between items-center">
        <div className="back-button">
          <Button variant="link">
            <ChevronLeftIcon className="h-8 w-8 stroke-black" />
          </Button>
          <div className="h-8" />
        </div>
        <div className="user-info">
          <p className="text-black text-2xl font-medium">Username</p>
        </div>
        <div className="profile-icon">
          <img src="/images/account-icon.png" alt="account-icon" className="h-20 w-20" />
        </div>
      </div>
      <div className="badges-section w-full flex justify-end items-center gap-8 px-4 py-6">
        <Badge className="bg-white rounded-full">
          <img src="/images/flag-india.png" alt="flag-india" className="h-4 w-4" />
          <span className="text-black ml-1">India</span>
        </Badge>
        <Badge className="bg-white rounded-full">
          <img src="/images/g-translate-icon.png" alt="flag-india" className="h-4 w-4" />
          <span className="text-black ml-1">English</span>
        </Badge>
      </div>
      <div className="account-stats w-full px-12 py-6 flex justify-between items-center">
        <div className="stat flex flex-col items-center">
          <p className="text-black text-2xl font-medium">0</p>
          <p className="text-black text-sm font-medium">Friends</p>
        </div>
        <div className="stat flex flex-col items-center">
          <p className="text-black text-2xl font-medium">0</p>
          <p className="text-black text-sm font-medium">Followers</p>
        </div>
        <div className="stat flex flex-col items-center">
          <p className="text-black text-2xl font-medium">0</p>
          <p className="text-black text-sm font-medium">Following</p>
        </div>
      </div>
      <div className="container p-0">
        <div className="account-menu px-8 py-12 flex flex-col gap-8">
          <div className="account-menu-item w-full flex items-center justify-between">
            <div className="flex items-center">
              <VideoCameraActiveIcon className="h-8 w-8" />
              <span className="px-8 text-black text-lg font-medium">Home</span>
            </div>
          </div>
          <div className="account-menu-item w-full flex items-center justify-between">
            <div className="flex items-center">
              <img src="/images/rupee.png" alt="Rupee" className="h-8 w-8" />
              <span className="px-8 text-black text-lg font-medium">My Balance</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/rupee.png" alt="Rupee" className="h-6 w-6" />
              <span className="text-black text-lg font-medium">500</span>
              <ChevronRightIcon className="h-8 w-8 stroke-black/60" />
            </div>
          </div>
          <div className="account-menu-item w-full flex items-center justify-between">
            <div className="flex items-center">
              <UserCircleIcon className="h-8 w-8 inline-flex" />
              <span className="px-8 text-black text-lg font-medium">Profile</span>
            </div>
            <ChevronRightIcon className="h-6 w-6 stroke-black/60" />
          </div>
          <div className="account-menu-item w-full flex items-center justify-between">
            <div className="flex items-center">
              <AdjustmentsHorizontalIcon className="h-8 w-8 inline-flex" />
              <span className="px-8 text-black text-lg font-medium">Settings</span>
            </div>
            <ChevronRightIcon className="h-6 w-6 stroke-black/60" />
          </div>
        </div>
        <div className="refer-link mt-8">
          <div className="flex items-center gap-10 px-6 py-1 bg-gradient-to-b from-[#3087ec]/30 to-[#3830d7]/30">
            <img src="/images/gift-box.png" alt="gift-box" className="h-16 w-16" />
            <span className="text-primary text-lg font-semibold">Refer a friend</span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-[100] min-w-full bg-background px-8 py-10 flex items-center gap-4">
        <ArrowLeftStartOnRectangleIcon className="h-8 w-8" />
        <span className="text-black font-medium">Sign Out</span>
      </div>
    </div>

  );
}
