import { ProfileCardLarge } from '@/components/compound/profile-card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCallCardStore } from '@/stores/call-card-store';
import { useMediaQuery } from 'react-responsive';
import { DiscoverDesktop } from './DiscoverDesktop';

export function Discover() {
  const { toggleCallCardVisibility } = useCallCardStore();

  const isDesktop = useMediaQuery({query: '(min-width: 768px)'})

  if(isDesktop) {
    return (<div className="discover">
      <DiscoverDesktop />
    </div>);
  }

  return (
    <div className="discover">
      <div className="go-live-button flex items-center justify-center p-0">
        <div className="profiles-scroll-container p-0">
          <ScrollArea className="h-full w-full rounded-md px-4">
            <ProfileCardLarge
              userName="UserName"
              userImage="/images/woman-profile.png"
              userLocationIcon="/images/flag-india.png"
              userLocationName="IND"
              onCallActionTap={toggleCallCardVisibility}
            />
            <ProfileCardLarge
              userName="UserName"
              userImage="/images/man-profile.png"
              userLocationIcon="/images/flag-usa.png"
              userLocationName="USA"
              onCallActionTap={toggleCallCardVisibility}
            />
            <ProfileCardLarge
              userName="UserName"
              userImage="/images/woman-profile.png"
              userLocationIcon="/images/flag-india.png"
              userLocationName="IND"
              onCallActionTap={toggleCallCardVisibility}
            />
            <ProfileCardLarge
              userName="UserName"
              userImage="/images/man-profile.png"
              userLocationIcon="/images/flag-usa.png"
              userLocationName="USA"
              onCallActionTap={toggleCallCardVisibility}
            />
          </ScrollArea>
        </div>
        <Button
          className="custom-box-shadow fixed bottom-[12%] rounded-full
       bg-indigo-700 px-12 py-6 text-2xl font-bold text-white shadow-lg hover:bg-indigo-700/90">
          {' '}
          Go Live{' '}
        </Button>
      </div>
    </div>
  );
}
