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
  transformHead: async (context) => (
    generateMeta(context, hostname)
  ),
  buildEnd: async ({outDir}) => {
    generateSitemap(outDir)
  }
})
