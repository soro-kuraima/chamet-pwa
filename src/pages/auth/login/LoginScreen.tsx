import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import logo from '@/assets/chamet-logo.svg';
// eslint-disable-next-line import/extensions
import loginBgDesktop from '@/assets/login-bg-desktop.png';
import loginBg from '@/assets/login-bg.jpeg';
import { Button } from '@/components/ui/button';

export function LoginScreen() {
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
        <div className="flex w-full flex-col justify-end px-8 py-8 md:w-1/3 md:rounded-xl md:bg-white/20 md:py-16">
          <div className="action-buttons flex min-h-full flex-col items-center justify-end md:flex-row md:gap-16">
            <div className="w-11/12 py-2 md:w-1/2">
              <Button
                size="lg"
                className="w-full rounded-full bg-red-600 bg-opacity-90 py-6 text-white shadow-lg drop-shadow-xl hover:bg-red-600/90"
                onClick={() => {
                  navigate('/auth/login-using-phone');
                }}>
                {' '}
                Gmail{' '}
              </Button>
            </div>
            <div className="w-11/12 py-2 md:w-1/2">
              <Button
                size="lg"
                className="w-full rounded-full bg-indigo-700 bg-opacity-90 py-6 shadow-lg drop-shadow-xl hover:bg-indigo-700/90"
                onClick={() => {
                  navigate('/auth/login-using-phone');
                }}>
                {' '}
                Phone{' '}
              </Button>
            </div>
          </div>
          <div className="footnote mt-16 md:mt-4">
            <p className="py-0 text-center text-lg font-medium text-white md:text-black">
              By Signing in, you agree to the
            </p>
            <div className="links flex items-end justify-center py-0">
              <Button
                variant="link"
                className="px-2 py-1 text-center text-lg font-medium text-white underline md:text-black">
                User Agreement
              </Button>
              <span className="px-0 py-1 text-white md:text-black">
                {' & '}
              </span>
              <Button
                variant="link"
                className="px-2 py-1 text-center text-lg font-medium text-white underline md:text-black">
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
