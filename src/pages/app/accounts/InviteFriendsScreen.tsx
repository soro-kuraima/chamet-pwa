import {
  ArrowLeftStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function InviteFriendsScreen() {
  const navigate = useNavigate();

  return (
    <div className="invite-friends-screen relative h-screen bg-primary">
        <div
        className="absolute left-0 top-0  w-72 h-72 overflow-hidden bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ellipse-76-rf.svg')",
        }}
      />
      <div
        className="absolute right-0 top-28 h-72 w-32 overflow-hidden bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ellipse-76-lf.svg')",
        }}
      />

      <ScrollArea>
      <div className="flex items-center w-2/3 justify-between py-2 md:w-[55%]">
              <div className="back-button">
                <Button variant="link" onClick={() => navigate(-1)}>
                  <ChevronLeftIcon className="h-8  w-8 stroke-white" />
                </Button>
            
              </div>
              <div className="user-info">
                <p className="text-2xl font-medium text-white">
                  Invite Friends
                </p>
              </div>
            </div>
        <div className="content h-screen flex flex-col justify-between md:justify-start md:items-center">
            
            <div className="invite-image flex flex-col items-center gap-4">
                <img src='/images/invite-box.png' className='h-96 w-auto object-contain' />
                <p className="text-white font-bold text-3xl tracking-wide"> Invite Friends!</p>
            </div>
            <div className="flex flex-col justify-end rounded-t-3xl border-t-2 bg-white px-6 py-8 md:rounded-xl md:w-1/2">
              <div className="py-8">
                <p className="mb-4 text-xl font-medium text-black">
                  Share your invite link
                </p>
                <p className=" flex justify-between items-center border-b py-2 border-black">
                    <span className='text-xl font-semibold'>https://chatapp.invite...</span>
                    <DocumentDuplicateIcon className='h-8 w-8'/> 
                </p>
                <div className="submit-button pt-12">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-indigo-700 bg-opacity-90 py-6 shadow-lg drop-shadow-xl hover:bg-indigo-700/90"
                    onClick={() => {
                      navigate('/auth/login-using-phone/enter-otp');
                    }}>
                    {' '}
                    Invite Friends{' '}
                  </Button>
                </div>
              </div>
            </div>
          </div>
      </ScrollArea>
    </div>
  );
}
