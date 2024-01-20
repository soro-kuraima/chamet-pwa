/* eslint-disable react/jsx-no-useless-fragment */
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import { Link, NavLink, Outlet } from 'react-router-dom';

export function LiveFeedsScreen() {
  return (
    <div className="live-feeds">
      <LiveFeedsMenu />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

function LiveFeedsMenu() {
    return (
      <nav className="min-w-full px-4 py-8 bg-background flex justify-between items-center">
        <ul className="flex gap-4 justify-between items-center">
          <li>
            <NavLink to="/app/home/live-feeds/lives">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <span className="text-xl text-primary font-semibold">Live Feeds</span>
                  ) : (
                    <span className="text-xl text-black font-medium">Live Feeds</span>
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
                    <span className="text-xl text-primary font-semibold">Nearby Lives</span>
                  ) : (
                    <span className="text-xl text-black font-medium">Nearby Lives</span>
                  )}
                </>
              )}
            </NavLink>
          </li>
        </ul>
        <Link to="/app/account">
          <Squares2X2Icon className="h-8 w-8" />
        </Link>
      </nav>
    );
}

