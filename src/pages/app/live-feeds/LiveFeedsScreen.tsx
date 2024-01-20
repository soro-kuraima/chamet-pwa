/* eslint-disable react/jsx-no-useless-fragment */
import { Link, NavLink, Outlet } from 'react-router-dom';

import { MenuIcon } from '@/components/ui/icons';

export function LiveFeedsScreen() {
  return (
    <div className="live-feeds pb-16">
      <LiveFeedsMenu />
      <div className="container relative p-0">
        <Outlet />
      </div>
    </div>
  );
}

function LiveFeedsMenu() {
  return (
    <nav className="flex min-w-full items-center justify-between bg-background px-4 py-8">
      <ul className="flex items-center justify-between gap-4">
        <li>
          <NavLink to="/app/home/live-feeds/lives">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className="text-xl font-semibold text-primary">
                    Live Feeds
                  </span>
                ) : (
                  <span className="text-xl font-medium text-black">
                    Live Feeds
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/live-feeds/nearby-lives">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className="text-xl font-semibold text-primary">
                    Nearby Lives
                  </span>
                ) : (
                  <span className="text-xl font-medium text-black">
                    Nearby Lives
                  </span>
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <Link to="/app/account">
        <MenuIcon className="h-8 w-8" />
      </Link>
    </nav>
  );
}
