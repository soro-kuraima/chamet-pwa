import { Outlet } from 'react-router-dom';

import { Menu } from '@/components/functional/menu';

export function HomeScreen() {
  return (
    <div className="home-screen flex min-h-screen items-center justify-center">
      <div className="h-screen w-screen overflow-auto">
        <Outlet />
      </div>
      <Menu />
    </div>
  );
}
