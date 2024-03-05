/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-useless-fragment */
import { AvatarImage } from '@radix-ui/react-avatar';
import { PersonIcon, ImageIcon } from '@radix-ui/react-icons';
import { BadgeDollarSign, Bookmark, Flame, HeartHandshake } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

import ChatBubble1ActiveIcon from '@/assets/chat-bubble1-active.png';
import DocumentIcon from '@/assets/document.png';
import FolderIcon from '@/assets/folder.png';
import { Avatar } from '@/components/ui/avatar';
import {
  VideoHomeActiveIcon,
  LiveStream1ActiveIcon,
  LogoutIcon,
  SettingsIcon,
} from '@/components/ui/icons/svg-icons';

export function DesktopMenu() {
  return (
    <div className="block w-[20vw] py-4">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="text-md mb-4 font-semibold tracking-tight">
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
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <VideoHomeActiveIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Home</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary hover:bg-primary/10">
                      <VideoHomeActiveIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
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
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <LiveStream1ActiveIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Live</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary hover:bg-primary/10">
                      <LiveStream1ActiveIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
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
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Feeds</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8 stroke-primary drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Feeds</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/suggestions">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <Flame className="h-8 w-8 fill-red-500 stroke-red-500 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Suggestions</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <Flame className="h-8 w-8 fill-red-500 stroke-red-500 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
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
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <img
                        src={ChatBubble1ActiveIcon}
                        alt="chat-bubble-active"
                        className="drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span>Chats</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary hover:bg-primary/10">
                      <img
                        src={ChatBubble1ActiveIcon}
                        alt="chat-bubble-active"
                        className="drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span>Chats</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <span className="group relative">
              <NavLink to="/app/home/wallet">
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                        <BadgeDollarSign className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span>Subscription Details</span>
                      </p>
                    ) : (
                      <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                        <BadgeDollarSign className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span>Subscription Details</span>
                      </p>
                    )}
                  </>
                )}
              </NavLink>
              <ul className="absolute -right-4 top-10 z-[10] hidden w-48 rounded-md border bg-background px-1 py-2 group-hover:block">
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Wallet</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Active Subs</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Change Subs</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </span>

            <NavLink to="/app/home/collections">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <Bookmark className="h-8 w-8 fill-primary drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Collections</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <Bookmark className="h-8 w-8 fill-primary drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Collections</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <span className="group relative">
              <NavLink to="/app/home/my-profile-detailed">
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                        <PersonIcon className="h-8 w-8 fill-primary stroke-primary drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span>My Profile</span>
                      </p>
                    ) : (
                      <p className="text-md text-md flex items-center gap-4  rounded-full px-2 py-1 font-semibold font-semibold text-secondary hover:bg-primary/10">
                        <PersonIcon className="h-8 w-8 fill-primary stroke-primary drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span>My Profile</span>
                      </p>
                    )}
                  </>
                )}
              </NavLink>
              <ul className="absolute -right-4 top-10 z-[10] hidden w-48 rounded-md border bg-background px-1 py-2 group-hover:block">
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Become a creator</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Privacy Policy</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </span>

            <NavLink to="/app/home/settings/privacy-policy">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <img
                        src={DocumentIcon}
                        className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                        alt="document"
                      />
                      <span>Platform Privacy Policy</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img
                        src={DocumentIcon}
                        className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                        alt="document"
                      />
                      <span>Platform Privacy Policy</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/app/home/settings/user-agreement">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <img
                        src={FolderIcon}
                        className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                        alt="folder"
                      />
                      <span>Terms & Conditions</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img
                        src={FolderIcon}
                        alt="folder"
                        className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span>Terms & Conditions</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <span className="group relative">
              <NavLink to="/app/home/settings">
                {({ isActive }) => (
                  <>
                    {isActive ? (
                      <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                        <SettingsIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span>Settings</span>
                      </p>
                    ) : (
                      <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                        <SettingsIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span>Settings</span>
                      </p>
                    )}
                  </>
                )}
              </NavLink>
              <ul className="absolute -right-4 top-10 z-[10] hidden w-48 rounded-md border bg-background px-1 py-2 group-hover:block">
                <li>
                  <Link to="/app/home/settings">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Language Preferences</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/settings">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span>Choose Theme</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </span>
            <NavLink to="/app/home/help">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <HeartHandshake className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Help & Support</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <HeartHandshake className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span>Help & Support</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/logout">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <LogoutIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />

                      <span>Sign Out</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <LogoutIcon className="h-8 w-8 drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />

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
