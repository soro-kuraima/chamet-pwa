/* eslint-disable react/jsx-no-useless-fragment */

import { Button } from '@/components/ui/button';
import { MenuIcon } from '@/components/ui/icons/menu';
import { Input } from '@/components/ui/input';
import { Feeds } from '@/pages/app/feeds/Feeds';
import { FeedsMenu } from '@/pages/app/feeds/feeds-menu';
import { ChevronLeftIcon, DocumentTextIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PlusCircleIcon from '@heroicons/react/24/solid/PlusCircleIcon';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export function AddPostScreen() {
    const navigate = useNavigate();
  return (
    <div className="live-feeds pb-16">
       <nav className="flex min-w-full items-center justify-between bg-background px-2 py-4">
      <ul className="flex items-center justify-between gap-2">
        <li>
        <Button variant="link" onClick={() => navigate(-1)}>
                  <ChevronLeftIcon className="h-8  w-8 stroke-black" />
                </Button>
        </li>
        <li>
            <span className='text-xl font-medium text-black'>Add Post</span>
        </li>
      </ul>
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/app/account">
            <MenuIcon className="h-8 w-8" />
          </Link>
        </li>
      </ul>
    </nav>
      <div className="container relative p-0">
        <div className="h-full w-full md:w-[40vw]">
            <div className="image-placeholder bg-secondary h-[50vh] flex items-center justify-center">
                <img  src='/images/image-placeholder.png' />
            </div>
            <div className="post-inputs py-6 px-4">
                <div className=" flex gap-2 items-center py-4">
                <MapPinIcon className='h-8 w-8' />
                <Input placeholder='Add Location' className='border-0  border-b border-black rounded-none focus:outline-0 focus:border-0 focus:ring-0' disabled />
                </div>
                <div className="flex gap-2 items-center py-4">
                    <DocumentTextIcon className='h-8 w-8' />
                <Input placeholder='Add Description' className='border-0  border-b border-black rounded-none' disabled />
                </div>
            </div>
            <div className="submit-button px-6">
            <Button
                size="lg"
                className="w-full rounded-full bg-primary bg-opacity-90 py-6 text-white shadow-lg drop-shadow-xl hover:bg-primary/90"
                onClick={() => {
                  navigate('/app/home/feeds');
                }}>
                {' '}
                Post{' '}
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
