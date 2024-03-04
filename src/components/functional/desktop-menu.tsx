/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-useless-fragment */
import { AvatarImage } from '@radix-ui/react-avatar';
import { PersonIcon, ImageIcon } from '@radix-ui/react-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import ChatBubble1ActiveIcon from '@/assets/chat-bubble1-active.png';
import ChatBubble1Icon from '@/assets/chat-bubble1.png';
import { Avatar } from '@/components/ui/avatar';
import {
  VideoHomeActiveIcon,
  VideoHomeIcon,
  LiveStream1Icon,
  LiveStream1ActiveIcon,
  LogoutIcon,
} from '@/components/ui/icons/svg-icons';

export function DesktopMenu() {
  const navigate = useNavigate();

  return (
    <div className="block w-[20vw] py-4">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-4 text-md font-semibold tracking-tight">
            <Avatar className="ring-2 ring-red-500 ring-offset-2">
              <AvatarImage
                src="/images/woman-post.png"
                alt="woman"
                className="object-cover"
              />
            </Avatar>
          </h2>
          <div className="flex flex-col gap-2 space-y-1">
            <NavLink to="/app/home/discovery">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <VideoHomeActiveIcon className="h-8 w-8" />
                      <span>Home</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary hover:bg-primary/10">
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
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <LiveStream1ActiveIcon className="h-8 w-8" />
                      <span>Live</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary hover:bg-primary/10">
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
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Feeds</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Feeds</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Suggestions</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Suggestions</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/recent-chats">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <img
                        src={ChatBubble1ActiveIcon}
                        alt="chat-bubble-active"
                      />
                      <span>Chats</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary hover:bg-primary/10">
                      <img src={ChatBubble1Icon} alt="chat bubble" />
                      <span>Chats</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <span className="relative group">
              <NavLink to="/app/home/feeds">
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                        <ImageIcon className="h-8 w-8" />
                        <span>Subscription Details</span>
                      </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Subscription Details</span>
                    </p>
                  )}
                  </>
              )}
              </NavLink>
              <ul className="hidden group-hover:block absolute -right-4 top-10 bg-background border rounded-md py-2 px-1">
                <li>
                  <Link to="/app/home/wallet">
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Wallet</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Active Subs</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Change Subs</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </span>

            <NavLink to="/app/home/feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Collections</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Collections</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <span className="relative group">
              <NavLink to="/app/home/my-profile-detailed">
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                        <PersonIcon className="h-8 w-8" />
                        <span>My Profile</span>
                      </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2  py-1 text-md text-md font-semibold font-semibold text-secondary hover:bg-primary/10">
                      <PersonIcon className="h-8 w-8" />
                      <span>My Profile</span>
                    </p>
                  )}
                  </>
              )}
              </NavLink>
              <ul className="hidden group-hover:block absolute -right-4 top-10 bg-background border rounded-md py-2 px-1">
                <li>
                  <Link to="/app/home/wallet">
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Become a creator</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Privacy Policy</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </span>

            <NavLink to="/app/home/feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Platform Privacy Policy</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Platform Privacy Policy</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/app/home/feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Terms & Conditions</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Terms & Conditions</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <span className="relative group">
              <NavLink to="/app/home/feeds">
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                        <ImageIcon className="h-8 w-8" />
                        <span>Settings</span>
                      </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Settings</span>
                    </p>
                  )}
                  </>
              )}
              </NavLink>
              <ul className="hidden group-hover:block absolute -right-4 top-10 bg-background border rounded-md py-2 px-1">
                <li>
                  <Link to="/app/home/wallet">
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Language Preferences</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Choose Theme</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </span>
            <NavLink to="/app/home/feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Help & Support</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Help & Support</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/app/home/feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-md font-semibold hover:bg-primary/10">
                      <LogoutIcon className="h-8 w-8" />

                      <span>Sign Out</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-md font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <LogoutIcon className="h-8 w-8" />

                      <span>Sign Out</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

          </div>
        </div>
      </div>
    </div>
  );
}

