/* eslint-disable react/jsx-no-useless-fragment */
import { VideoCameraIcon, BoltIcon, SparklesIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { VideoCameraIcon as VideoCameraSolidIcon, BoltIcon as BoltSolidIcon, SparklesIcon as SparklesSolidIcon, ChatBubbleLeftIcon as ChatBubbleLeftSolidIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

export function Menu() {
  return (
    <nav className="custom-box-shadow fixed z-[100] bottom-0 left-0 min-w-full bg-background p-1">
      <ul className="flex mx-auto px-4 py-2 justify-between items-center">
        <li>
          <NavLink to="/app/home/discovery">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <VideoCameraSolidIcon className="h-10 w-10" />
                  ) : (
                    <VideoCameraIcon className="h-10 w-10" />
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
                  <BoltSolidIcon className="h-10 w-10" />
                  ) : (
                    <BoltIcon className="h-10 w-10" />
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
                  <SparklesSolidIcon className="h-10 w-10" />
                  ) : (
                    <SparklesIcon className="h-10 w-10" />
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
                  <ChatBubbleLeftSolidIcon className="h-10 w-10" />
                  ) : (
                    <ChatBubbleLeftIcon className="h-10 w-10" />
                  )}
              </>
              )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
