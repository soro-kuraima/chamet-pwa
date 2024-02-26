import { Outlet } from 'react-router-dom';

import { RequireAuth } from '@/components/functional/require-auth';

export function AppLayout() {
  return (
    <RequireAuth>
      <div className="App bg-background-light min-h-screen">
        <div className="flex-start flex">
          <div className="container px-0 py-0 md:w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
