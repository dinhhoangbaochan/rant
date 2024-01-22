import { SiteConfig, defineConfig } from 'vitepress'
import generateSitemap from './theme/hook/generateSitemap.js';
import generateMeta from './theme/hook/generateMeta.js';

const hostname: string = 'https://hello.chandinh.com';


export default defineConfig({
  // ... other config options
  title: 'Hello, Chan Dinh',
  description: 'Where I write, share what I learn and also rant about what I hate...',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'author', content: 'Chan Dinh' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],

    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    ['link', { rel: 'icon', type: "image/png", sizes: '32x32', href: '/images/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: "image/png", sizes: '16x16', href: '/images/favicon-16x16.png' }],

    ['meta', { property: 'og:site_name', content: 'Hello, Chan Dinh' }],
    ['meta', { property: 'og:locale', content: 'vi_VN' }]
  ],
  transformHead: async (context) => (
    generateMeta(context, hostname)
  ),
  buildEnd: async ({outDir}) => {
    generateSitemap(outDir)
  }
})
