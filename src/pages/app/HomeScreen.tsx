import { Outlet } from 'react-router-dom';

import { Menu } from '@/components/functional/menu';

export function HomeScreen() {
  return (
    <div className="home-screen min-h-screen flex justify-center items-center">
      <div className="h-screen w-screen overflow-auto">
        <Outlet />
      </div>
      <Menu />
    </div>
  );
}
