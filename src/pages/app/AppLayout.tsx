import { Outlet } from 'react-router-dom';

import { RequireAuth } from '@/components/functional/require-auth';

export function AppLayout() {
  return (
    <RequireAuth>
      <div className="App min-h-screen bg-background-dark">
        <header className="h-20 text-background-contrastText">
          this is a header
        </header>
        <div className="flex-start flex overflow-hidden">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
