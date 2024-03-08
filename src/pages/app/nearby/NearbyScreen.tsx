/* eslint-disable react/jsx-no-useless-fragment */
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { ProfileCard } from '@/components/compound/profile-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ProfileScreen } from '@/pages/app/profile/ProfileScreen';
import { useCallCardStore } from '@/stores/call-card-store';

export function NearbyScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const { toggleCallCardVisibility } = useCallCardStore();
  const navigate = useNavigate();

  return (
    <div className="nearby h-full w-full md:flex">
      <div className="container relative overflow-auto p-0 pb-16 md:mt-8">
        <div className="discover-nearby">
          <div className="flex h-full w-full items-center justify-center p-0">
            <div className="profiles-scroll-container h-full w-full p-0">
              <ScrollArea className="h-full w-full rounded-md px-4">
                <div className="neraby-profiles grid h-full w-full grid-cols-2 gap-4 xl:grid-cols-3">
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
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      {isDesktop && <ProfileScreen />}
    </div>
  );
}
