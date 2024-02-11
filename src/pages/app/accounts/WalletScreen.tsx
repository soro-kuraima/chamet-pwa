import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Overlay } from '@/components/compound/overlay';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export function WalletScreen() {
  const navigate = useNavigate();

  const [showPaymentOptions, togglePaymentOptions] = useState<boolean>(false);

  return (
    <div className="wallet-screen">
      <nav className="flex min-w-full border-b bg-background px-0 pb-2 pt-4">
        <ul className="flex w-full items-center justify-between">
          <li>
            <Button variant="link" onClick={() => navigate(-1)}>
              <ChevronLeftIcon className="h-10 w-10 text-black" />
            </Button>
          </li>
          <li>
            <h1 className="text-center text-xl font-medium text-black">
              My Balance
            </h1>
          </li>
          <li className="h-1 w-1/4" />
        </ul>
      </nav>
     <div className="money-section py-12 flex flex-col items-center gap-8">
        <img src='/images/rupee.png' className='h-20 w-20 object-contain' />
        <p className='text-black font-semibold text-xl'>Balance: Rs. 500</p>
        <Button variant={"link"} onClick={() => togglePaymentOptions(prev => !prev)}>
          <span className='text-red-600 text-lg font-medium'>Add Money</span>
          <ChevronRightIcon className='h-4 w-4 stroke-red-600' />
        </Button>
     </div>
     {
      showPaymentOptions && 
      <Overlay>
        <div className="payment-options h-full w-full flex flex-col justify-end md:justify-center md:items-center">
        <div className="flex w-full flex-col justify-end rounded-t-3xl bg-white px-0 py-8 md:w-1/3 md:items-center md:rounded-xl">
          <div className="options px-6">
          
              <RadioGroup defaultValue='upi' defaultChecked className='text-black'>
                <div className="option flex items-center gap-4 py-4">
                  <RadioGroupItem value='upi' id='r1' className='border-black text-white p-2 focus:ring-offset-1 focus:ring-2 focus:ring-black focus:border-none focus:bg-primary' />
                  <Label htmlFor='r1'>UPI</Label>
                </div>
                <div className="option flex items-center gap-4 py-4">
                  <RadioGroupItem value='card' id='r2' className='border-black text-white p-2 border-black text-white p-2 focus:ring-offset-1 focus:ring-2 focus:ring-black focus:border-none focus:bg-primary' />
                  <Label htmlFor='r2'>Credit or Debit Card (VISA / MasterCard / MIR) </Label>
                </div>
              </RadioGroup>
            
          </div>
          <div className="action-buttons flex justify-end gap-10 py-6 px-6">
            <Button size={"sm"} onClick={() => togglePaymentOptions(prev => !prev)} className='bg-secondary px-6 font-bold'>
              Cancel 
            </Button>

            <Button size={"sm"} onClick={() => togglePaymentOptions(prev => !prev)} className='bg-primary px-6 font-bold'>
              Continue
            </Button>
          </div>
        </div>
        </div>
      </Overlay>
     }
    </div>
  );
}
