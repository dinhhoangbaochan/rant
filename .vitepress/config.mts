import { createContentLoader, defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
// import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Hello, Chan Dinh',
  description: 'The official blog for the Vue.js project',
  cleanUrls: true,
  // buildEnd: genFeed
  lastUpdated: true,
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://hello.chandinh.com/' })
    const pages = await createContentLoader('*.md').load()
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)
    pages.forEach((page) => sitemap.write(
      page.url
        // Strip `index.html` from URL
        .replace(/index$/g, '')
        // Optional: if Markdown files are located in a subfolder
        .replace(/^\/docs/, '')
      ))
    sitemap.end()

    await new Promise((r) => writeStream.on('finish', r))
  }
})