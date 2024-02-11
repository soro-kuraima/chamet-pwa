import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AboutUsScreen() {
  const navigate = useNavigate();

return (
  <div className="privacy policy">
    <nav className="flex min-w-full border-b bg-background px-0 pb-2 pt-4">
      <ul className="flex w-full items-center justify-between">
        <li>
          <Button variant="link" onClick={() => navigate(-1)}>
            <ChevronLeftIcon className="h-10 w-10 text-black" />
          </Button>
        </li>
        <li>
          <h1 className="text-center text-xl font-medium text-black">
            Privacy Policy
          </h1>
        </li>
        <li className="h-1 w-1/4" />
      </ul>
    </nav>
    <ScrollArea>
      <div className="content flex h-[90vh] flex-col justify-between">
        <div className="top">
          <p className="px-4 py-10 text-justify font-medium text-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
        </div>
        <div className="bottom flex flex-col items-center justify-center">
          <img src="/chamet-logo.svg" alt="Chamet Logo" />
          <p className="pt-8 text-black">
            Copyright © Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </ScrollArea>
  </div>
);
}
