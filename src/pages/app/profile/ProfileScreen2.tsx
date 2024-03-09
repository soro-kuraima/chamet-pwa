import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AddWhiteIcon } from '@/components/ui/icons/svg-icons';

export function ProfileScreen2() {
  return (
    <div className="flex ml-4 w-2/5 bg-background flex-col border-t border-gray-300 drop-shadow-xl shadow-xl my-4 mt-12 flex flex-col shadow-2xl drop-shadow-xl rounded-md border border-gray-300">
      <div className="flex w-full flex-col items-center justify-end px-4 py-4">
        <div className="w-full py-2">
          <div className="user-info flex w-full items-center justify-between gap-4 py-1">
            <Avatar className="h-12 w-12 ring-2 ring-red-500 ring-offset-2">
              <AvatarImage src="/images/woman-profile.png" alt="woman" />
              <AvatarFallback>Woman</AvatarFallback>
            </Avatar>
            <div className="user-info-text flex flex-col">
              <h3 className="text-lg font-medium text-black">Username</h3>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Button size="icon">
                <AddWhiteIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <div className="badges-section flex items-center justify-start gap-4 px-4 py-2">
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
        <div className="account-stats flex w-full items-center justify-between px-4 py-8">
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

        <div className="-mx-px flex flex-wrap py-6 px-1 border-t-2 md:-mx-3">
          {/* column */}
          <div className="w-1/2 p-px">
            {/* post 1 */}

            {/* post images */}
            <img
              className="h-[15vh] w-full object-cover"
              src="/images/scenery-1.png"
              alt="scenery-1"
              />
          </div>
          <div className="w-1/2 p-px">
            <img
              className="h-[15vh] w-full object-cover"
              src="/images/woman-post.png"
              alt="woman-post"
              />
            {/* overlay */}
          </div>
          <div className="w-1/2 p-px">
            <img
              className="h-[15vh] w-full object-cover"
              src="/images/man-profile.png"
              alt="man-profile"
              />
            {/* overlay */}
          </div>
          <div className="w-1/2 p-px">
            <img
              className="h-[15vh] w-full object-cover"
              src="/images/scenery-3.png"
              alt="scenery-3"
              />
          </div>
          <div className="w-1/2 p-px">
            <img
              className="h-[15vh] w-full object-cover"
              src="/images/scenery-2.png"
              alt="/scenery-2"
              />
          </div>
        </div>

      </div>
    </div>
  );
}
