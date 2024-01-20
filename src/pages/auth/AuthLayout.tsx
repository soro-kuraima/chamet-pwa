import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="auth-wrapper bg-background-light flex min-h-screen flex-col">
      <Outlet />
    </div>
  );
}
