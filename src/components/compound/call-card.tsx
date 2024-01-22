import * as React from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CallIcon, VideoCameraActiveIcon } from '@/components/ui/icons';

type CallCardProps = {
  onCardClose: () => void;
};

const CallCard = React.forwardRef<HTMLDivElement, CallCardProps>(
  ({ onCardClose }, ref) => (
    <div ref={ref} className="call-card bg-white rounded-md px-2 pt-2">
      <Card className="w-full p-0">
        <CardHeader className="p-0">
          <CardTitle>
            <div className="flex justify-end items-center">
              <h4 className="text-md text-black font-semibold">Choose how you would like to connect</h4>
              <Button variant="link" onClick={onCardClose}>
                <XMarkIcon className="h-8 w-8" />
              </Button>
            </div>
          </CardTitle>
          <CardDescription>
            <div className="flex justify-between items-center">
              <p className="text-black text-lg font-medium">My Balance</p>
              <div className="">
                <span className="text-black/60"><img src="/images/rupee.png" alt="rupeee" className="inline-flex mr-2" />{' 500'}</span>
                <Button variant="link" className="font-semibold">+Add</Button>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 py-1">
          <div className="flex justify-center items-center py-4 gap-20">
            <div className="audio flex flex-col items-center justify-center">
              <Button size="icon">
                {' '}
                <CallIcon className="h-8 w-8" />{' '}
              </Button>
              <p className="pt-4 text-black">Audio Call</p>
              <p className="text-black/60">{'( '}<img src="/images/rupee.png" alt="rupeee" className="inline-flex mr-1 h-4 w-4" />{' 100/min)'}</p>
            </div>
            <div className="video flex flex-col items-center justify-center">
              <Button size="icon">
                {' '}
                <VideoCameraActiveIcon className="h-8 w-8 fill-primary stroke-accent stroke-2" />{' '}
              </Button>
              <p className="pt-4 text-black">Video Call</p>
              <p className="text-black/60">{'( '}<img src="/images/rupee.png" alt="rupeee" className="inline-flex mr-1 h-4 w-4" />{' 300/min)'}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
);

export { CallCard };
