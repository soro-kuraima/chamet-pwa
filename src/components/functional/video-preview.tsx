import { useEffect, useState } from 'react';

import Lottie from 'react-lottie';
import ReactPlayer from 'react-player/lazy';

// eslint-disable-next-line import/extensions
import animationData from '@/assets/lottie-animations/animation-pulsating-circle.json';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function VideoPreview({ onClose }: { onClose: () => void }) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    setInterval(() => {
      api?.scrollNext();
    }, 5000);

    return () => {
      api?.destroy();
    };
  }, [api]);

  return (
    <div>
      <div className="relative h-[45vh] w-full">
        <div className="video-container h-full w-full">
          <Carousel
            className="h-full w-full"
            setApi={setApi}
            opts={{
              loop: true,
            }}>
            <CarouselContent className="h-full w-full">
              <CarouselItem className="h-full w-full">
                <ReactPlayer
                  height="100%"
                  width="100%"
                  playing
                  loop
                  url="/videos/video-closeup-1.webm"
                />
              </CarouselItem>
              <CarouselItem>
                <ReactPlayer
                  height="100%"
                  width="100%"
                  playing
                  loop
                  url="/videos/video-closeup-2.webm"
                />
              </CarouselItem>
              <CarouselItem>
                <ReactPlayer
                  height="100%"
                  width="100%"
                  playing
                  loop
                  url="/videos/video-closeup-3.webm"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="action-item absolute left-0 right-0 top-0 z-[100] flex h-[45vh] w-full flex-col items-center justify-center gap-2 backdrop-blur-sm">
          <Button variant="link" size="icon" onClick={onClose}>
            {' '}
            <span className="text-xl font-semibold text-white">Go Live</span>
            <span className="absolute z-[-1]">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                height={400}
                width={400}
              />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
