/* eslint-disable react/jsx-no-useless-fragment */
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import { Link, NavLink, Outlet } from 'react-router-dom';

export function DiscoveryScreen() {
  return (
    <div className="discovery">
      <DiscoveryMenu />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

function DiscoveryMenu() {
    return (
      <nav className="min-w-full px-4 py-8 bg-background flex justify-between items-center">
        <ul className="flex gap-4 justify-between items-center">
          <li>
            <NavLink to="/app/home/discovery/discover">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <span className="text-xl text-primary font-semibold">Discover</span>
                  ) : (
                    <span className="text-xl text-black font-medium">Discover</span>
                  )}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/home/discovery/nearby">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <span className="text-xl text-primary font-semibold">Nearby</span>
                  ) : (
                    <span className="text-xl text-black font-medium">Nearby</span>
                  )}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/home/discovery/popular">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <span className="text-xl text-primary font-semibold">Popular</span>
                  ) : (
                    <span className="text-xl text-black font-medium">Popular</span>
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
