import { useNavigate } from 'react-router-dom';

import { ProfileCard } from '@/components/compound/profile-card';
import { VideoPreview } from '@/components/functional/video-preview';
import { VideoCallPopup } from '@/components/functional/VideoCallPopup';
import { useCallCardStore } from '@/stores/call-card-store';

export function DiscoverDesktop() {
  const { toggleCallCardVisibility, discoverGoLive, toggleDiscoverGoLive } =
    useCallCardStore();

  const navigate = useNavigate();

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
    </div>
  );
}
