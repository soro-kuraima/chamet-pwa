import { useEffect, useState } from 'react';

import ReactPlayer from 'react-player/lazy';

// eslint-disable-next-line import/extensions
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';

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
    <div
      className="relative h-[50vh] w-full">
      <div className="video-container w-full h-full">
        <Carousel
          className="h-full w-full"
          setApi={setApi}
          opts={{
            loop: true,
          }}>
          <CarouselContent className="h-full w-full">
            <CarouselItem className="h-full w-full"><ReactPlayer
              height="100%"
              width="100%"
              playing
              loop
              url="/videos/video-closeup-1.webm"
             />
            </CarouselItem>
            <CarouselItem><ReactPlayer
              height="100%"
              width="100%"
              playing
              loop
              url="/videos/video-closeup-2.webm"
             />
            </CarouselItem>
            <CarouselItem><ReactPlayer
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
      <div className="action-item absolute left-1/2 right-1/2 top-[45%] flex flex-col items-center gap-2">
        <Button size="icon" className="bg-green-600 hover:bg-green-500 pulse h-20 w-20" onClick={onClose}>
          {' '}
          <span className="font-semibold text-lg">Go Live</span>
        </Button>
      </div>
    </div>
  </div>
);
}
