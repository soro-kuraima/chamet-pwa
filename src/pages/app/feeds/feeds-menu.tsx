/* eslint-disable react/jsx-no-useless-fragment */
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';

import { MenuIcon } from '@/components/ui/icons';

export function FeedsMenu() {
  return (
    <nav className="flex min-w-full items-center justify-between bg-background px-4 py-8">
      <ul className="flex items-center justify-between gap-4">
        <li>
          <NavLink to="/app/home/feeds">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className="text-xl font-semibold text-primary">
                    Posts
                  </span>
                ) : (
                  <span className="text-xl font-medium text-black">Posts</span>
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/app/account">
            <PlusCircleIcon className="h-10 w-10 fill-black" />
          </Link>
        </li>
        <li>
          <Link to="/app/home/feeds">
            <MenuIcon className="h-8 w-8" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
