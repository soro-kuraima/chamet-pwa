import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import womanProfile from '@/assets/woman-profile.png';
import {
  ArrowPathRoundedSquareIcon,
  MicrophoneIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/button';

export function VideoCallScreen() {
  return (
    <div>
      <div
        className="login-screen flex min-h-screen flex-col items-center justify-between bg-cover bg-center md:gap-8 md:bg-top md:bg-no-repeat"
        style={{
          backgroundImage: `url(${womanProfile})`,
        }}>
        <div className="user-container w-full px-4">
          <div className="user flex w-full justify-between items-start py-6">
            <div className="user-info py-2">
              <p className="text-white text-xl"> Username</p>
              <p className="text-white text-lg">02:35</p>
            </div>
            <div className="user-image">
              <img src='/images/video-call-user.png' className='h-32 w-32' />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between rounded-t-3xl bg-white/10 px-0 pb-8 md:w-1/3 md:items-center md:rounded-xl">
          <div className="mb-8 mt-4 h-1 w-16 rounded-md bg-secondary/30"></div>
          <div className="action-buttons-I flex w-full items-center justify-between px-2">
            <div className="action-item flex flex-col items-center gap-2">
              <Button size={'icon'} className="bg-secondary/30">
                {' '}
                <SunIcon className="h-12 w-12 fill-white" />
              </Button>
              <span className="text-white">Effects</span>
            </div>
            <div className="action-item flex flex-col items-center gap-2">
              <Button size={'icon'} className="bg-secondary/30">
                {' '}
                <MicrophoneIcon className="h-12 w-12 fill-white" />{' '}
              </Button>
              <span className="text-white">Mute</span>
            </div>
            <div className="action-item flex flex-col items-center gap-2">
              <Button size={'icon'} className="bg-secondary/30">
                {' '}
                <ArrowPathRoundedSquareIcon className="h-12 w-12 fill-white" />{' '}
              </Button>
              <span className="text-white">Flip</span>
            </div>
            <div className="action-item flex flex-col items-center gap-2">
              <Button size={'icon'} className="bg-red-600">
                {' '}
                <XMarkIcon className="h-12 w-12 fill-white" />{' '}
              </Button>
              <span className="text-white">Cancel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
