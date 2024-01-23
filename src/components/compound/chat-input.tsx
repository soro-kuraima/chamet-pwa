import * as React from 'react';

import { FaceSmileIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatInput = React.forwardRef<HTMLDivElement>(
    // eslint-disable-next-line no-empty-pattern
    ({}, ref) =>
(
  <div ref={ref} className="chat-input px-0 py-2 flex justify-between items-center">
    <Button variant="link">
      <FaceSmileIcon className="h-6 w-6 text-black" />
    </Button>
    <Input
      className="flex-grow rounded-full"
      placeholder="Type a message..."
    />
    <Button variant="link">
      <PaperClipIcon className="h-6 w-6 text-black -rotate-45" />
    </Button>
    <Button size="icon" className="p-2">
      <MicrophoneIcon className="h-6 w-6" />
    </Button>
  </div>
)
);

export { ChatInput };
