import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  AudioCallRedIcon,
  BluetoothIcon,
  HoldIcon,
  MicIcon,
  SpeakerIcon,
} from '@/components/ui/icons/svg-icons';

export function AudioCallScreen() {
  return (
    <div className="audio-call flex h-screen w-full flex-col items-center justify-between bg-primary md:w-[50vw]">
      <div className="mt-8">
        <p className="text-xl font-medium text-white">Dialing...</p>
      </div>
      <div className="py-4">
        <p className="text-2xl font-semibold text-white">Username</p>
      </div>
      <div className="avatar-container px-14 py-8">
        <Avatar className="h-48 w-48 border-[24px] outline outline-[24px] outline-offset-[24px] outline-secondary/20 ring-[24px] ring-secondary/60 ring-offset-0">
          <AvatarImage src="/images/woman-profile.png" />
        </Avatar>
      </div>
      <div className="action-buttons-I flex w-full items-center justify-between px-8">
        <div className="action-item flex flex-col items-center gap-2">
          <MicIcon className="h-12 w-12 stroke-white" />
          <span className="text-white">Mute</span>
        </div>
        <div className="action-item flex flex-col items-center gap-2">
          <BluetoothIcon className="h-12 w-12 stroke-white" />
          <span className="text-white">Bluetooth</span>
        </div>
        <div className="action-item flex flex-col items-center gap-2">
          <HoldIcon className="h-12 w-12 stroke-white" />
          <span className="text-white">Hold</span>
        </div>
      </div>
      <div className="action-buttons-II flex w-full items-center justify-end gap-20 px-8 py-16 md:gap-72">
        <div className="action-item">
          <Button size="icon" className="bg-white">
            <AudioCallRedIcon className="h-12 w-12" />
          </Button>
        </div>
        <div className="action-item">
          <SpeakerIcon className="h-12 w-12 stroke-white" />
        </div>
      </div>
    </div>
  );
}
