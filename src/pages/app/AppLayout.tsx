import { Outlet } from 'react-router-dom';

import { RequireAuth } from '@/components/functional/require-auth';

export function AppLayout() {
  return (
    <RequireAuth>
      <div className="App bg-background-light min-h-screen">
        <div className="flex-start flex overflow-hidden">
          <div className="container px-0 py-0">
            <Outlet />
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
