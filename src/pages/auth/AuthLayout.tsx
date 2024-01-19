import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="auth-wrapper flex flex-col min-h-screen bg-background-light">
      <Outlet />
    </div>
  );
}
