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
            <CarouselItem className="h-full w-full">
              <ReactPlayer
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
      <div className="action-item absolute top-0 left-0 right-0 z-[100] flex flex-col items-center justify-center gap-2 h-[50vh] backdrop-blur-sm w-[96%] xl:w-[98%]">
        <Button size="icon" className="bg-green-600 hover:bg-green-500 pulse h-40 w-40" onClick={onClose}>
          {' '}
          <span className="font-semibold text-xl">Go Live</span>
        </Button>
      </div>
    </div>
  </div>
);
}
