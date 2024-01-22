import * as React from 'react';

import { Button } from '@/components/ui/button';
import { VideoCameraActiveIcon, CallIcon } from '@/components/ui/icons';

type profileCardProps = {
  userName: string;
  userImage: string;
  userLocationIcon: string;
  userLocationName: string;
  onCallActionTap: () => void;
};

const ProfileCard = React.forwardRef<HTMLDivElement, profileCardProps>(
  (
    {
      userName,
      userImage,
      userLocationIcon,
      userLocationName,
      onCallActionTap,
    },
    ref
  ) => (
    <div
      ref={ref}
      className="profile-card relative flex h-72 w-full flex-col items-center justify-center drop-shadow-xl">
      <div className="live-lable absolute left-2 top-2 flex items-center justify-center">
        <VideoCameraActiveIcon className="h-6 w-6" />
        <span className="text-md px-1 font-semibold text-primary">Live</span>
      </div>
      <img
        src={userImage}
        alt={userName}
        className="h-full w-full rounded-md"
      />
      <div className="profile-card-footer absolute bottom-2 flex w-full items-end justify-between px-2">
        <div className="user-info">
          <h3 className="py-2 text-lg font-medium text-white">{userName}</h3>
          <p className="user-info-location flex items-center gap-2">
            <img
              className="location-icon h-6"
              src={userLocationIcon}
              alt={userLocationName}
            />
            <span className="loaction-name text-md font-medium text-white">
              {userLocationName}
            </span>
          </p>
        </div>
        <div className="action-buttons flex flex-col">
          <Button size="icon" onClick={onCallActionTap}>
            {' '}
            <CallIcon className="h-4 w-4 stroke-2" />{' '}
          </Button>
        </div>
      </div>
    </div>
  )
);

const ProfileCardLarge = React.forwardRef<HTMLDivElement, profileCardProps>(
  (
    {
      userName,
      userImage,
      userLocationIcon,
      userLocationName,
      onCallActionTap,
    },
    ref
  ) => (
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
          <h3 className="py-2 text-xl font-medium text-white">{userName}</h3>
          <p className="user-info-location flex items-center gap-2">
            <img
              className="location-icon"
              src={userLocationIcon}
              alt={userLocationName}
            />
            <span className="loaction-name text-lg font-medium text-white">
              {userLocationName}
            </span>
          </p>
        </div>
        <div className="action-buttons flex flex-col gap-8">
          <Button size="icon" onClick={onCallActionTap}>
            {' '}
            <CallIcon className="h-8 w-8" />{' '}
          </Button>
          <Button size="icon" onClick={onCallActionTap}>
            {' '}
            <VideoCameraActiveIcon className="h-8 w-8 fill-primary stroke-accent stroke-2" />{' '}
          </Button>
        </div>
      </div>
    </div>
  )
);

export { ProfileCard, ProfileCardLarge };
