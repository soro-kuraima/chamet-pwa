import { useMediaQuery } from 'react-responsive';
import { Outlet, useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import logo from '@/assets/chamet-logo.svg';
// eslint-disable-next-line import/extensions
import loginBg from '@/assets/login-bg.jpeg';
import loginBgDesktop from '@/assets/login-bg-desktop.png';
import { Button } from '@/components/ui/button';

export function PhoneLoginScreen() {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const bgUrl = isDesktop ? loginBgDesktop : loginBg;

  return (
    <div>
      <div
        className="login-screen flex min-h-screen flex-col items-center justify-between bg-[#3087ec] bg-cover bg-center bg-blend-darken md:flex-col-reverse md:justify-center md:gap-8 md:bg-cover md:bg-no-repeat md:bg-blend-normal"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}>
        <div className="logo-container">
          <img
            src={logo}
            className={`${isDesktop ? 'absolute left-20 top-4' : 'mx-auto py-24'}`}
            alt="Chamet Logo"
          />
        </div>
        <div className="flex w-full flex-col justify-end rounded-t-3xl bg-white px-0 py-8 md:rounded-xl md:w-1/3 md:items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
