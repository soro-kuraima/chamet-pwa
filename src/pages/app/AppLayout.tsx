import { Outlet } from 'react-router-dom';

import { RequireAuth } from '@/components/functional/require-auth';

export function AppLayout() {
  return (
    <RequireAuth>
      <div className="App bg-background-light h-screen w-screen p-0 m-0">
        <div className="p-0 m-0 flex justify-start">

          <Outlet />

        </div>
      </div>
    </RequireAuth>
  );
}
