/* eslint-disable react/jsx-no-useless-fragment */
import { AvatarImage } from '@radix-ui/react-avatar';
import { NavLink } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import {
  VideoHomeActiveIcon,
  VideoHomeIcon,
  LiveStream1Icon,
  LiveStream1ActiveIcon,
  LogoutIcon,
} from '@/components/ui/icons/svg-icons';
import LiveStream2Icon from '@/assets/live-stream-2.png';
import LiveStream2ActiveIcon from '@/assets/live-stream2-active.png';
import ChatBubble1Icon from '@/assets/chat-bubble1.png';
import ChatBubble1ActiveIcon from '@/assets/chat-bubble1-active.png';
import {
  BellIcon,
  DotsHorizontalIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '../ui/badge';

export function DesktopMenu() {
  return (
    <div className="block w-[30vh] py-4">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-4 text-lg font-semibold tracking-tight">
            <Avatar className="ring-2 ring-red-500 ring-offset-2">
              <AvatarImage
                src="/images/woman-post.png"
                alt="woman"
                className="object-cover"
              />
            </Avatar>
          </h2>
          <div className="flex flex-col gap-4 space-y-1">
            <NavLink to="/app/home/discovery">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <VideoHomeActiveIcon className="h-8 w-8" />
                      <span>Home</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary hover:bg-primary/10">
                      <VideoHomeIcon className="h-8 w-8" />
                      <span>Home</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/app/home/live-feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <LiveStream1ActiveIcon className="h-8 w-8" />
                      <span>Live</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary hover:bg-primary/10">
                      <LiveStream1Icon className="h-8 w-8" />
                      <span>Live</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <img src={LiveStream2ActiveIcon} />
                      <span>Feeds</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img src={LiveStream2Icon} />
                      <span>Feeds</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/recent-chats">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <img src={ChatBubble1ActiveIcon} />
                      <span>Chats</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary hover:bg-primary/10">
                      <img src={ChatBubble1Icon} />
                      <span>Chats</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/live-feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <BellIcon className="h-8 w-8" />
                      <span>Notifications</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary hover:bg-primary/10">
                      <BellIcon className="h-8 w-8" />
                      <span>Notifications</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/my-profile">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <PersonIcon className="h-8 w-8" />
                      <span>My Profile</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2  py-1 text-lg text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                      <PersonIcon className="h-8 w-8" />
                      <span>My Profile</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-4 rounded-full px-0 px-2 py-1 text-lg font-semibold font-semibold">
                  <DotsHorizontalIcon className="h-8 w-8" />
                  <span>More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                sideOffset={-200}
                avoidCollisions={false}
                align="end"
                className="w-56">
                <DropdownMenuLabel>
                  <div className="user-info relative inline-flex p-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/images/chat-user.png"
                        alt="chat user"
                      />
                      <AvatarFallback>{'Chat User'}</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-3 right-2 h-2 w-2 rounded-full bg-green-400 ring-1 ring-white ring-offset-2" />
                  </div>
                  <p className="font-semibold text-black">Username</p>
                  <div className="badges-section flex w-full items-center gap-2 py-2">
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
                  <div className="account-stats flex w-full items-center justify-between">
                    <div className="stat flex flex-col items-center">
                      <p className="text-sm font-semibold text-black">0</p>
                      <p className="text-sm font-semibold text-black">
                        Friends
                      </p>
                    </div>
                    <div className="stat flex flex-col items-center">
                      <p className="text-sm font-semibold text-black">0</p>
                      <p className="text-sm font-semibold text-black">
                        Followers
                      </p>
                    </div>
                    <div className="stat flex flex-col items-center">
                      <p className="text-sm font-semibold text-black">0</p>
                      <p className="text-sm font-semibold text-black">
                        Following
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="py-2">
                  <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                    <PersonIcon className="h-5 w-5" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                    <PersonIcon className="h-5 w-5" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                    <PersonIcon className="h-5 w-5" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="py-2">
                  <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                    <PersonIcon className="h-5 w-5" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10 hover:text-primary">
                      <PersonIcon className="h-5 w-5" />
                      <span>My Profile</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                          <PersonIcon className="h-5 w-5" />
                          <span>My Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                          <PersonIcon className="h-5 w-5" />
                          <span>My Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                          <PersonIcon className="h-5 w-5" />
                          <span>My Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                          <PersonIcon className="h-5 w-5" />
                          <span>My Profile</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                    <PersonIcon className="h-5 w-5" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                  <PersonIcon className="h-5 w-5" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                  <PersonIcon className="h-5 w-5" />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-md my-3 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                  <LogoutIcon className="h-6 w-6" />
                  <span className="font-medium text-black">Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
