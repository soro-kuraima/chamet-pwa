import {
  ArrowLeftStartOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  ExclamationCircleIcon,
  FolderIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function SettingsScreen() {
  const navigate = useNavigate();

  return (
    <div className="settings">
      <nav className="flex min-w-full border-b bg-background px-0 pb-2 pt-4">
        <ul className="flex w-full items-center justify-between">
          <li>
            <Button variant="link" onClick={() => navigate(-1)}>
              <ChevronLeftIcon className="h-10 w-10 text-black" />
            </Button>
          </li>
          <li>
            <h1 className="text-center text-xl font-medium text-black">
              Settings
            </h1>
          </li>
          <li className="h-1 w-1/4" />
        </ul>
      </nav>
      <ScrollArea>
        <div className="content flex h-[90vh] flex-col justify-between">
          <div className="top">
            <div className="container p-0">
              <div className="account-menu flex flex-col gap-8 px-8 py-12">
                <Link to="/app/privacy-policy">
                  <div className="account-menu-item flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <DocumentTextIcon className="h-8 w-8" />
                      <span className="px-8 text-lg font-medium text-black">
                        Privacy Policy
                      </span>
                    </div>
                    <ChevronRightIcon className="h-6 w-6 stroke-black/60" />
                  </div>
                </Link>
                <Link to="/app/user-agreement">
                  <div className="account-menu-item flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <FolderIcon className="inline-flex h-8 w-8" />
                      <span className="px-8 text-lg font-medium text-black">
                        User Agreement
                      </span>
                    </div>
                    <ChevronRightIcon className="h-6 w-6 stroke-black/60" />
                  </div>
                </Link>
                <Link to="/app/about-us">
                  <div className="account-menu-item flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <ExclamationCircleIcon className="inline-flex h-8 w-8" />
                      <span className="px-8 text-lg font-medium text-black">
                        About Us
                      </span>
                    </div>
                    <ChevronRightIcon className="h-6 w-6 stroke-black/60" />
                  </div>
                </Link>
                <div className="account-menu-item flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <StarIcon className="inline-flex h-8 w-8" />
                    <span className="px-8 text-lg font-medium text-black">
                      Version
                    </span>
                  </div>
                  <span>v 1.0.0</span>
                </div>
              </div>
              <Link to={'/app/invite-friends'} className="refer-link mt-8">
                <div className="flex items-center gap-10 bg-gradient-to-b from-[#3087ec]/30 to-[#3830d7]/30 px-6 py-1">
                  <img
                    src="/images/gift-box.png"
                    alt="gift-box"
                    className="h-16 w-16"
                  />
                  <span className="text-lg font-semibold text-primary">
                    Refer a friend
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="bottom">
            <div className="flex min-w-full items-center gap-4 bg-background px-8 py-10">
              <ArrowLeftStartOnRectangleIcon className="h-8 w-8" />
              <span className="font-medium text-black">Sign Out</span>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
