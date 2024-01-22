import { ProfileCard } from '@/components/compound/profile-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCallCardStore } from '@/stores/call-card-store';

export function Nearby() {
  const { toggleCallCardVisibility } = useCallCardStore();

  return (
    <div className="discover-nearby">
      <div className="w-fullflex h-full items-center justify-center p-0">
        <div className="profiles-scroll-container h-full w-full p-0">
          <ScrollArea className="h-full w-full rounded-md px-4">
            <div className="neraby-profiles grid h-full w-full grid-cols-2 gap-4">
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
              />
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
