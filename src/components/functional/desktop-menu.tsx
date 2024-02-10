/* eslint-disable react/jsx-no-useless-fragment */
import { SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';
import {
  SparklesIcon as SparklesSolidIcon,
  BoltIcon as BoltSolidIcon,
} from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

import { VideoCameraIcon, VideoCameraActiveIcon } from '@/components/ui/icons';

export function DesktopMenu() {
  return (
    <nav className="fixed left-0 top-0 z-[100] min-h-full border-r-2 border-accent bg-background p-1 drop-shadow-2xl">
      <ul className="mx-auto flex flex-col items-center gap-12 px-4 py-16">
        <li>
          <NavLink to="/app/home/discovery">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <VideoCameraActiveIcon className="h-10 w-10" />
                ) : (
                  <VideoCameraIcon className="h-10 w-10" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/live-feeds">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <BoltSolidIcon className="h-10 w-10" />
                ) : (
                  <BoltIcon className="h-10 w-10 stroke-accent" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/feeds">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <SparklesSolidIcon className="h-10 w-10" />
                ) : (
                  <SparklesIcon className="h-10 w-10 stroke-accent" />
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
