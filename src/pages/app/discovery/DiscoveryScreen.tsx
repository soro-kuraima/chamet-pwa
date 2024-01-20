/* eslint-disable react/jsx-no-useless-fragment */
import { Link, NavLink, Outlet } from 'react-router-dom';

import { MenuIcon } from '@/components/ui/icons';

export function DiscoveryScreen() {
  return (
    <div className="discovery pb-16">
      <DiscoveryMenu />
      <div className="container relative p-0">
        <Outlet />
      </div>
    </div>
  );
}

function DiscoveryMenu() {
  return (
    <nav className="flex min-w-full items-center justify-between bg-background px-4 py-8">
      <ul className="flex items-center justify-between gap-4">
        <li>
          <NavLink to="/app/home/discovery/discover">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className="text-xl font-semibold text-primary">
                    Discover
                  </span>
                ) : (
                  <span className="text-xl font-medium text-black">
                    Discover
                  </span>
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
                  <span className="text-xl font-semibold text-primary">
                    Nearby
                  </span>
                ) : (
                  <span className="text-xl font-medium text-black">Nearby</span>
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
                  <span className="text-xl font-semibold text-primary">
                    Popular
                  </span>
                ) : (
                  <span className="text-xl font-medium text-black">
                    Popular
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
