import { ProfileCard } from '@/components/compound/profile-card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function LiveFeeds() {
  return (
    <div className="live-feeds">
      <div className="h-full w-fullflex items-center justify-center p-0">
        <div className="h-full w-full profiles-scroll-container p-0">
          <ScrollArea className="h-full w-full rounded-md px-4">
            <div className="neraby-profiles h-full w-full grid grid-cols-2 gap-4">
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
            />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
            />
            </div>
          </ScrollArea>
        </div>

      </div>
    </div>
  );
}
