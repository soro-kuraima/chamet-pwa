import React from 'react';

import { Button } from '@/components/ui/button';
import { VideoCameraActiveIcon, CallIcon } from '@/components/ui/icons';

type profileCardProps = {
  userName: string;
  userImage: string;
  userLocationIcon: string;
  userLocationName: string;
};

const ProfileCard = React.forwardRef<HTMLDivElement, profileCardProps>(
  ({ userName, userImage }, ref) => (
    <div
      ref={ref}
      className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <img src={userImage} alt={userName} className="h-20 w-20 rounded-full" />
      <h1 className="text-xl font-semibold">{userName}</h1>
    </div>
  )
);

const ProfileCardLarge = React.forwardRef<HTMLDivElement, profileCardProps>(
  ({ userName, userImage, userLocationIcon, userLocationName }, ref) => (
    <div
      ref={ref}
      className="profile-card-large relative mb-4 flex h-full w-full flex-col items-center justify-center drop-shadow-xl">
      <div className="live-lable absolute left-2 top-2 flex items-center justify-center">
        <VideoCameraActiveIcon className="h-6 w-6" />
        <span className="text-md px-1 font-semibold text-primary">Live</span>
      </div>
      <img src={userImage} alt={userName} className="h-full w-full" />
      <div className="profile-card-footer absolute bottom-2 flex w-full items-end justify-between px-4">
        <div className="user-info">
          <h3 className="py-2 text-xl text-white font-medium">{userName}</h3>
          <p className="user-info-location flex items-center gap-2">
            <img className="location-icon" src={userLocationIcon} alt={userLocationName} />
            <span className="loaction-name text-lg text-white font-medium">{userLocationName}</span>
          </p>
        </div>
        <div className="action-buttons flex flex-col gap-8">
          <Button size="icon"> <CallIcon className="h-8 w-8" /> </Button>
          <Button size="icon"> <VideoCameraActiveIcon className="h-8 w-8 stroke-accent stroke-2 fill-primary" /> </Button>
        </div>
      </div>
    </div>
  )
);

export { ProfileCard, ProfileCardLarge };
