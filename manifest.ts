import { VitePWAOptions } from 'vite-plugin-pwa';

export const manifestForPlugIn : Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'CHAMET',
    short_name: 'chamet',
    description: 'Chamet is a video chat application',
    icons: [
      {
        src: '/app-icons/android/mipmap-xxxhdpi/ic_launcher.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/app-icons/playstore.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon',
      },
      {
        src: '/app-icons/appstore.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/app-icons/maskable/maskable-xxxhdpi.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#3930d7',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};
