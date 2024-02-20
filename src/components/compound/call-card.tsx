import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AudioCallIcon,
  CloseIcon,
  VideoHomeActiveIcon,
} from '@/components/ui/icons/svg-icons';

type CallCardProps = {
  onCardClose: () => void;
};

const CallCard = React.forwardRef<HTMLDivElement, CallCardProps>(
  ({ onCardClose }, ref) => {
    const navigate = useNavigate();

    return (
      <div ref={ref} className="call-card rounded-md bg-white px-2 pt-2">
        <Card className="w-full p-0">
          <CardHeader className="p-0">
            <CardTitle>
              <div className="flex items-center justify-end">
                <h4 className="text-md font-semibold text-black">
                  Choose how you would like to connect
                </h4>
                <Button variant="link" onClick={onCardClose}>
                  <CloseIcon className="h-8 w-8" />
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-black">My Balance</p>
                <div className="">
                  <span className="text-black/60">
                    <img
                      src="/images/rupee.png"
                      alt="rupeee"
                      className="mr-2 inline-flex"
                    />
                    {' 500'}
                  </span>
                  <Button variant="link" className="font-semibold">
                    +Add
                  </Button>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 py-1">
            <div className="flex items-center justify-center gap-20 py-4">
              <div className="audio flex flex-col items-center justify-center">
                <Button size="icon" onClick={() => navigate('/app/audio-call')}>
                  {' '}
                  <AudioCallIcon className="h-8 w-8" />{' '}
                </Button>
                <p className="pt-4 text-black">Audio Call</p>
                <p className="text-black/60">
                  {'( '}
                  <img
                    src="/images/rupee.png"
                    alt="rupeee"
                    className="mr-1 inline-flex h-4 w-4"
                  />
                  {' 100/min)'}
                </p>
              </div>
              <div className="video flex flex-col items-center justify-center">
                <Button size="icon" onClick={() => navigate('/app/video-call')}>
                  {' '}
                  <VideoHomeActiveIcon className="h-8 w-8 fill-primary stroke-accent stroke-2" />{' '}
                </Button>
                <p className="pt-4 text-black">Video Call</p>
                <p className="text-black/60">
                  {'( '}
                  <img
                    src="/images/rupee.png"
                    alt="rupeee"
                    className="mr-1 inline-flex h-4 w-4"
                  />
                  {' 300/min)'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
);

export { CallCard };
