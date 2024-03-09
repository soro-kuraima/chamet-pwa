/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-useless-fragment */
import { AvatarImage } from '@radix-ui/react-avatar';
import {
  BadgeDollarSign,
  BellIcon,
} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function DesktopMenu() {
  return (
    <div className="block h-screen w-[20vw] border border-gray-300 bg-background py-4 shadow-2xl md:pl-4">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-md font-semibold tracking-tight">
              <Avatar className="ring-2 ring-red-500 ring-offset-2">
                <AvatarImage
                  src="/images/woman-post.png"
                  alt="woman"
                  className="object-cover"
              />
              </Avatar>
            </h2>
            <Button size="icon" className="p-3">
              <BellIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col gap-2 space-y-1">
            <NavLink to="/app/home/discovery">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <img
                        src="/menu-icons/home-button.png"
                        alt="home-button"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span className="text-black">Home</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/home-button.png"
                        alt="home-button"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span className="text-black">Home</span>
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
                      <img
                        src="/menu-icons/lives.png"
                        alt="live icon"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span className="text-black">Live</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/lives.png"
                        alt="live icon"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span className="text-black">Live</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/nearby">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="text-md flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 font-semibold hover:bg-primary/10">
                      <img
                        src="/menu-icons/lives.png"
                        alt="live icon"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span className="text-black">Nearby</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/lives.png"
                        alt="live icon"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span className="text-black">Nearby</span>
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
                      <img
                        src="/menu-icons/feeds.png"
                        alt="feeds icon"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Feeds</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/feeds.png"
                        alt="feeds icon"
                        className="h-8 w-8 stroke-primary shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Feeds</span>
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
                      <img
                        src="/menu-icons/suggestions.png"
                        alt="suggestions icon"
                        className="h-8 w-8 fill-red-500 stroke-red-500 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Suggestions</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/suggestions.png"
                        alt="suggestions icon"
                        className="h-8 w-8 fill-red-500 stroke-red-500 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Suggestions</span>
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
                        src="/menu-icons/chat.png"
                        alt="chat icon"
                        className="h-8 w-8 -scale-x-100 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Chats</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/chat.png"
                        alt="chat icon"
                        className="h-8 w-8 -scale-x-100 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Chats</span>
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
                        <BadgeDollarSign className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span className="text-black">Subscription Details</span>
                      </p>
                    ) : (
                      <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                        <BadgeDollarSign className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span className="text-black">Subscription Details</span>
                      </p>
                    )}
                  </>
                )}
              </NavLink>
              <ul className="absolute -right-4 top-10 z-[10] hidden w-48 rounded-md border bg-background px-1 py-2 group-hover:block">
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span className="text-black">Wallet</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span className="text-black">Active Subs</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span className="text-black">Change Subs</span>
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
                      <img
                        src="/menu-icons/collections.png"
                        alt="collections"
                        className="h-8 w-8 fill-primary shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Collections</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/collections.png"
                        alt="collections"
                        className="h-8 w-8 fill-primary shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Collections</span>
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
                        <img
                          src="/menu-icons/profile.png"
                          alt="profile"
                          className="h-8 w-8 fill-primary stroke-primary shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span className="text-black">My Profile</span>
                      </p>
                    ) : (
                      <p className="text-md text-md flex items-center gap-4  rounded-full px-2 py-1 font-semibold font-semibold text-secondary hover:bg-primary/10">
                        <img
                          src="/menu-icons/profile.png"
                          alt="profile"
                          className="h-8 w-8 fill-primary stroke-primary shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span className="text-black">My Profile</span>
                      </p>
                    )}
                  </>
                )}
              </NavLink>
              <ul className="absolute -right-4 top-10 z-[10] hidden w-48 rounded-md border bg-background px-1 py-2 group-hover:block">
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span className="text-black">Become a creator</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/wallet">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span className="text-black">Privacy Policy</span>
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
                        src="/menu-icons/privacy-policy.png"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                        alt="privacy policy"
                      />
                      <span className="text-black">Platform Privacy Policy</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/privacy-policy.png"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                        alt="privacy policy"
                      />
                      <span className="text-black">Platform Privacy Policy</span>
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
                        src="/menu-icons/terms-and-conditions.png"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                        alt="terms and conditions"
                      />
                      <span className="text-black">Terms & Conditions</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img
                        src="/menu-icons/terms-and-conditions.png"
                        alt="terms and conditions"
                        className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]"
                      />
                      <span className="text-black">Terms & Conditions</span>
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
                        <img
                          src="/menu-icons/setting.png"
                          alt="setting"
                          className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span className="text-black">Settings</span>
                      </p>
                    ) : (
                      <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                        <img
                          src="/menu-icons/setting.png"
                          alt="setting"
                          className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                        <span className="text-black">Settings</span>
                      </p>
                    )}
                  </>
                )}
              </NavLink>
              <ul className="absolute -right-4 top-10 z-[10] hidden w-48 rounded-md border bg-background px-1 py-2 group-hover:block">
                <li>
                  <Link to="/app/home/settings">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span className="text-black">Language Preferences</span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/app/home/settings">
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <span className="text-black">Choose Theme</span>
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
                      <img src="/menu-icons/support.png" alt="support" className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Help & Support</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img src="/menu-icons/support.png" alt="support" className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />
                      <span className="text-black">Help & Support</span>
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
                      <img src="/menu-icons/logout.png" alt="logout" className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />

                      <span className="text-black">Sign Out</span>
                    </p>
                  ) : (
                    <p className="text-md flex items-center gap-4 rounded-full px-2 py-1 font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <img src="/menu-icons/logout.png" alt="logout" className="h-8 w-8 shadow-2xl drop-shadow-[0_85px_85px_rgba(248,250,252,1)]" />

                      <span className="text-black">Sign Out</span>
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
