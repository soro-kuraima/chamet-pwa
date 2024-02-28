import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="auth-wrapper bg-background-light h-screen w-screen p-0 m-0">
      <Outlet />
    </div>
  );
}
