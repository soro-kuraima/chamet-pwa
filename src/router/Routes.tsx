import { createBrowserRouter, Navigate } from 'react-router-dom';

import { RequireAuth, Page } from '@/components/functional';
import { AccountScreen } from '@/pages/app/accounts/AccountScreen';
import { MyProfileScreen } from '@/pages/app/accounts/MyProfileScreen';
import { SettingsScreen } from '@/pages/app/accounts/SettingsScreen';
import { WalletScreen } from '@/pages/app/accounts/WalletScreen';
import { AppLayout } from '@/pages/app/AppLayout';
import { Discover } from '@/pages/app/discovery/Discover';
import { DiscoveryScreen } from '@/pages/app/discovery/DiscoveryScreen';
import { Nearby } from '@/pages/app/discovery/Nearby';
import { Popular } from '@/pages/app/discovery/Popular';
import { FeedsScreen } from '@/pages/app/feeds/FeedsScreen';
import { HomeScreen } from '@/pages/app/HomeScreen';
import { LiveFeeds } from '@/pages/app/live-feeds/LiveFeeds';
import { LiveFeedsScreen } from '@/pages/app/live-feeds/LiveFeedsScreen';
import { Page404 } from '@/pages/app/misc/Page404';
import { ProfileScreen } from '@/pages/app/profile/ProfileScreen';
import { RecentChatScreen } from '@/pages/app/recent-chat/RecentChatScreen';
import { RecentChatsScreen } from '@/pages/app/recent-chats/RecentChatsScreen';
import { AuthLayout } from '@/pages/auth/AuthLayout';
import { LoginScreen } from '@/pages/auth/login/LoginScreen';
import { OnboardScreen } from '@/pages/auth/onboard/OnboardScreen';

export const routes = createBrowserRouter([
  {
    path: '',
    element: (
      <RequireAuth>
        <Navigate to="/app/home/" />
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
            element: <Navigate to="/app/home/discovery/" />,
          },
          {
            path: 'discovery',
            element: (
              <Page title="Discover">
                <DiscoveryScreen />
              </Page>
            ),
            children: [
              {
                index: true,
                element: <Navigate to="/app/home/discovery/discover" />,
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
                element: <Navigate to="/app/home/live-feeds/lives" />,
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
          {
            path: 'recent-chat',
            element: (
              <Page title="Recent Chat">
                <RecentChatScreen />
              </Page>
            ),
          }
        ],
      },
      {
        path: 'account',
        element: (
          <Page title="Account">
            <AccountScreen />
          </Page>
        ),
      },
      {
        path: 'wallet',
        element: (
          <Page title="Wallet">
            <WalletScreen />
          </Page>
        ),
      },
      {
        path: 'my-profile',
        element: (
          <Page title="Profile">
            <MyProfileScreen />
          </Page>
        ),
      },
      {
        path: 'settings',
        element: (
          <Page title="Settings">
            <SettingsScreen />
          </Page>
        ),
      },
      {
        path: 'profile',
        element: (
          <Page title="Profile">
            <ProfileScreen />
          </Page>
        ),
      },
      {
        path: 'recent-chat',
        element: (
          <Page title="Recent Chat">
            <RecentChatScreen />
          </Page>
        ),
      },
    ],
  },
]);
