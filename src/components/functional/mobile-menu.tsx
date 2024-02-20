/* eslint-disable react/jsx-no-useless-fragment */
import { NavLink } from 'react-router-dom';
import {
  VideoHomeActiveIcon,
  VideoHomeIcon,
  LiveStream1Icon,
  LiveStream1ActiveIcon,
} from '@/components/ui/icons/svg-icons';
import LiveStream2Icon from '@/assets/live-stream-2.png';
import LiveStream2ActiveIcon from '@/assets/live-stream2-active.png';
import ChatBubble1Icon from '@/assets/chat-bubble1.png';
import ChatBubble1ActiveIcon from '@/assets/chat-bubble1-active.png';

export function MobileMenu() {
  return (
    <nav className="fixed bottom-0 left-0 z-[100] min-w-full border-t-2 border-accent bg-background p-1 drop-shadow-2xl">
      <ul className="mx-auto flex items-center justify-between px-4 py-2">
        <li>
          <NavLink to="/app/home/discovery">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <VideoHomeActiveIcon className="h-8 w-8" />
                ) : (
                  <VideoHomeIcon className="h-8 w-8" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/live-feeds">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <LiveStream1ActiveIcon className="h-8 w-8" />
                ) : (
                  <LiveStream1Icon className="h-8 w-8" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/feeds">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <img src={LiveStream2ActiveIcon} />
                ) : (
                  <img src={LiveStream2Icon} />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/recent-chats">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <img src={ChatBubble1ActiveIcon} />
                ) : (
                  <img src={ChatBubble1Icon} />
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
