import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arch · 台灣高工建築科學習基地',
    short_name: 'Arch',
    description: '面向台灣高工建築科學生的開放學習平台。統測五科全真題、動態圖解實驗室、營造現場手冊與三大證照地圖。',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#1F567A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
