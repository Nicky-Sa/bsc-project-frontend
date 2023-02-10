import localFont from "@next/font/local";

export const peyda = localFont({
  variable: '--font-peyda', // to be used in global.css, not tailwind necessarily
  display: 'swap',
  src: [
    {
      path: './peyda/woff2/PeydaWeb-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './peyda/woff2/PeydaWeb-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './peyda/woff2/PeydaWeb-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './peyda/woff2/PeydaWeb-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './peyda/woff2/PeydaWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './peyda/woff2/PeydaWeb-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './peyda/woff2/PeydaWeb-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './peyda/woff2/PeydaWeb-Thin.woff2',
      weight: '100',
      style: 'normal',
    },

  ],
});

