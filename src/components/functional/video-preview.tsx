import { useEffect, useState } from 'react';

import ReactPlayer from 'react-player/lazy';

// eslint-disable-next-line import/extensions
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
      <div className="relative h-[50vh] w-full">
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
        <div className="action-item absolute left-0 right-0 top-0 z-[100] flex h-[50vh] w-[96%] flex-col items-center justify-center gap-2 backdrop-blur-md xl:w-[98%]">
          <button id="pulse" className="pulse" onClick={onClose}>
            {' '}
            <span className="text-xl font-semibold">Go Live</span>
          </button>
        </div>
      </div>
    </div>
  );
}
