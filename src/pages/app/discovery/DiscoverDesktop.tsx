import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { VideoCallPopup } from '../call/VideoCallPopup';

import { ProfileCard } from '@/components/compound/profile-card';
import { Button } from '@/components/ui/button';
import { useCallCardStore } from '@/stores/call-card-store';

export function DiscoverDesktop() {
  const { toggleCallCardVisibility } = useCallCardStore();

  const navigate = useNavigate();

  const [goLive, setGoLive] = useState(false);

  return (
    <div className="relative flex h-full w-full items-center justify-center p-0">
      <div className="profiles-scroll-container h-full w-full rounded-md px-4 p-0">
        <div className="rounded-md py-4">
          <VideoCallPopup onClose={() => setGoLive((prev) => !prev)} />
        </div>
        <div className="neraby-profiles grid h-full w-full grid-cols-2 gap-4 xl:grid-cols-3">
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
      <Button
        className="custom-box-shadow fixed bottom-[12%] rounded-full
       bg-indigo-700 px-12 py-6 text-2xl font-bold text-white shadow-lg hover:bg-indigo-700/90"
        onClick={() => setGoLive((prev) => !prev)}
       >
        {' '}
        Go Live{' '}
      </Button>
    </div>
  );
}
