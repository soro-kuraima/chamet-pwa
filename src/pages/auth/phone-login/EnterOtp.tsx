import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { setAccessToken } from '@/lib/token';

export function EnterOtp() {
  const navigate = useNavigate();

  return (
    <div className="phone px-6 md:w-4/5">
      <h1 className="heading text-2xl font-semibold text-black">Enter OTP</h1>
      <div className="phone py-4">
        <p className="py-1 text-xl font-medium text-black">
          Verification Code sent to
        </p>
        <p className="flex items-center gap-2 py-1 text-lg font-semibold text-black">
          <span>+919876832214</span>
          <PencilSquareIcon className="h-8 w-8 stroke-primary" />
        </p>
        <div className="mt-6 flex items-center gap-8">
          <Input
            className="rounded-2xl border-none bg-secondary/50 py-8 text-center text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none]"
            id="otp-input"
            value={0}
            disabled
          />
          <Input
            className="rounded-2xl border-none bg-secondary/50 py-8 text-center text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none]"
            id="otp-input"
            value={0}
            disabled
          />
          <Input
            className="rounded-2xl border-none bg-secondary/50 py-8 text-center text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none]"
            id="otp-input"
            value={0}
            disabled
          />
          <Input
            className="rounded-2xl border-none bg-secondary/50 py-8 text-center text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none]"
            id="otp-input"
            value={0}
            disabled
          />
        </div>
        <div className="resend-code flex items-center justify-between pt-8">
          <p>00:30 sec</p>
          <Button variant="link" className="text-lg font-medium text-secondary">
            Resend
          </Button>
        </div>
        <div className="submit-button pt-6">
          <Button
            size="lg"
            className="w-full rounded-full bg-indigo-700 bg-opacity-90 py-6 shadow-lg drop-shadow-xl hover:bg-indigo-700/90"
            onClick={() => {
              setAccessToken(crypto.randomUUID());
              navigate('/app/home');
            }}>
            {' '}
            Submit{' '}
          </Button>
        </div>
      </div>
    </div>
  );
}
