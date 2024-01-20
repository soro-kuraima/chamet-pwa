import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import logo from '@/assets/chamet-logo.svg';
// eslint-disable-next-line import/extensions
import loginBg from '@/assets/login-bg.jpeg';
import { Button } from '@/components/ui/button';
import { setAccessToken } from '@/lib/token';

export function LoginScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="login-screen flex min-h-screen flex-col items-center justify-between bg-[#3087ec] bg-cover bg-center bg-blend-darken"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}>
        <div className="logo-container">
          <img src={logo} className="mx-auto py-24" alt="Chamet Logo" />
        </div>
        <div className="flex w-full flex-col justify-end px-8 py-8">
          <div className="action-buttons flex min-h-full flex-col items-center justify-end">
            <div className="w-11/12 py-2">
              <Button
                size="lg"
                className="w-full rounded-full bg-gray-400 bg-opacity-90 py-6 shadow-2xl drop-shadow-xl hover:bg-gray-400/90">
                {' '}
                Start{' '}
              </Button>
            </div>
            <div className="w-11/12 py-2">
              <Button
                size="lg"
                className="w-full rounded-full bg-red-600 bg-opacity-90 py-6 text-white shadow-lg drop-shadow-xl hover:bg-red-600/90"
                onClick={() => {
                  setAccessToken(crypto.randomUUID());
                  navigate('/app/home');
                }}>
                {' '}
                Gmail{' '}
              </Button>
            </div>
            <div className="w-11/12 py-2">
              <Button
                size="lg"
                className="w-full rounded-full bg-indigo-700 bg-opacity-90 py-6 shadow-lg drop-shadow-xl hover:bg-indigo-700/90">
                {' '}
                Phone{' '}
              </Button>
            </div>
          </div>
          <div className="footnote mt-16">
            <p className="py-0 text-center text-lg font-medium text-white">
              By Signing in, you agree to the
            </p>
            <div className="links flex items-end justify-center py-0">
              <Button
                variant="link"
                className="px-2 py-1 text-center text-lg font-medium text-white underline">
                User Agreement
              </Button>
              <span className="px-0 py-1 text-white">{' & '}</span>
              <Button
                variant="link"
                className="px-2 py-1 text-center text-lg font-medium text-white underline">
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
