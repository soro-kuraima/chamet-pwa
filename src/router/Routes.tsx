import { createBrowserRouter, Navigate } from 'react-router-dom';

import { RequireAuth, Page } from '@/components/functional';
import { AppLayout } from '@/pages/app/AppLayout';
import { FeedsScreen } from '@/pages/app/feeds/FeedsScreen';
import { Discover } from '@/pages/app/home/Discover';
import { HomeScreen } from '@/pages/app/home/HomeScreen';
import { Nearby } from '@/pages/app/home/Nearby';
import { Popular } from '@/pages/app/home/Popular';
import { LiveFeeds } from '@/pages/app/live-feeds/LiveFeeds';
import { LiveFeedsScreen } from '@/pages/app/live-feeds/LiveFeedsScreen';
import { Page404 } from '@/pages/app/misc/Page404';
import { RecentChatsScreen } from '@/pages/app/recent-chats/RecentChatsScreen';
import { AuthLayout } from '@/pages/auth/AuthLayout';
import { LoginScreen } from '@/pages/auth/login/LoginScreen';
import { OnboardScreen } from '@/pages/auth/onboard/OnboardScreen';

export const routes = createBrowserRouter([
  {
    path: '',
    element: (
      <RequireAuth>
        <Navigate to="/app" />
      </RequireAuth>
    ),
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        element: (
          <Page title="Login">
            <LoginScreen />
          </Page>
        ),
      },
      {
        path: 'onboarding',
        element: (
          <Page title="onboard">
            <OnboardScreen />
          </Page>
        ),
      },
    ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    errorElement: <Page404 />,
    children: [
      {
        path: 'home',
        element: (
          <Page title="Home">
            {' '}
            <HomeScreen />{' '}
          </Page>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/app/home/discover" />,
          },
          {
            path: 'discover',
            element: <Discover />,
          },
          {
            path: 'nearby',
            element: <Nearby />,
          },
          {
            path: 'popular',
            element: <Popular />,
          },
        ],
      },
      {
        path: 'live-feeds',
        element: (
          <Page title="Live Feeds">
            <LiveFeedsScreen />
          </Page>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/app/live-feeds/lives" />,
          },
          {
            path: 'lives',
            element: <LiveFeeds />,
          },
          {
            path: 'nearby-lives',
            element: <Nearby />,
          },
        ],
      },
      {
        path: 'feeds',
        element: (
          <Page title="Feeds">
            <FeedsScreen />
          </Page>
        ),
      },
      {
        path: 'recent-chats',
        element: (
          <Page title="Recent Chats">
            <RecentChatsScreen />
          </Page>
        ),
      },
    ],
  },
]);
