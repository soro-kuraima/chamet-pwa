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
        className="login-screen min-h-screen bg-[#3087ec] bg-blend-darken bg-cover bg-center flex flex-col justify-between items-center"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
        <div className="logo-container">
          <img src={logo} className="py-24 mx-auto" alt="Chamet Logo" />
        </div>
        <div className="flex flex-col w-full justify-end px-8 py-8">
          <div className="action-buttons min-h-full flex flex-col justify-end items-center">
            <div className="py-2 w-11/12">
              <Button
                size="lg"
                className="custom-box-shadow py-6 w-full bg-gray-400 hover:bg-gray-400/90 shadow-2xl bg-opacity-90 rounded-full"
              >
                {' '}
                Start{' '}
              </Button>
            </div>
            <div className="py-2 w-11/12">
              <Button
                size="lg"
                className="custom-box-shadow py-6 w-full bg-red-600 hover:bg-red-600/90 shadow-lg bg-opacity-90 text-white rounded-full"
                onClick={() => {
                  setAccessToken(crypto.randomUUID());
                  navigate('/app/home');
                }}
              >
                {' '}
                Gmail{' '}
              </Button>
            </div>
            <div className="py-2 w-11/12">
              <Button
                size="lg"
                className="custom-box-shadow py-6 w-full bg-indigo-700 hover:bg-indigo-700/90 shadow-lg bg-opacity-90 rounded-full"
              >
                {' '}
                Phone{' '}
              </Button>
            </div>
          </div>
          <div className="footnote mt-16">
            <p className="py-0 text-white text-center text-lg font-medium">
              By Signing in, you agree to the
            </p>
            <div className="py-0 links flex justify-center items-end">
              <Button
                variant="link"
                className="px-2 py-1 text-white text-center text-lg font-medium underline"
              >
                User Agreement
              </Button>
              <span className="text-white px-0 py-1">{' & '}</span>
              <Button
                variant="link"
                className="px-2 py-1 text-white text-center text-lg font-medium underline"
              >
                Privacy Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
