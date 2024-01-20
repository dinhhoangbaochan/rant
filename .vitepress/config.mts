import { defineConfig } from 'vitepress'
import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import fg from 'fast-glob' // make sure to install fast-glob

export default defineConfig({
  // ... other config options
  title: 'Hello, Chan Dinh',
  description: 'The official blog for the Vue.js project',
  cleanUrls: true,
  lastUpdated: true,
  buildEnd: async ({ outDir }) => {
    const files = await fg(['./posts/**/*.md', './pages/**/*.md']); // Adjust the glob pattern to match your directory structure
    const sitemap = new SitemapStream({ hostname: 'https://hello.chandinh.com/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)
    files.forEach(file => {
      const url = file
        .replace(/^\.\/posts\//, '/posts/') // Replace './posts/' with '/posts/'
        .replace(/^\.\/pages\//, '/pages/') // Replace './pages/' with '/pages/'
        .replace(/\.md$/, '.html') // Replace '.md' with '.html'
      sitemap.write({ url });
    });
    sitemap.end()

    await new Promise((resolve) => writeStream.on('finish', resolve))
  }
})
