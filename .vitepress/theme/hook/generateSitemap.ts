import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import fg from 'fast-glob' // make sure to install fast-glob

const generateSitemap = async (outDir: string) => {
  const files = await fg(['./posts/**/*.md', './pages/**/*.md']); // Adjust the glob pattern to match your directory structure
  const sitemap = new SitemapStream({ hostname: 'https://hello.chandinh.com/' })
  const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

  sitemap.pipe(writeStream)
  files.forEach(file => {
    const url = file
      .replace(/^\.\/posts\//, '/posts/') // Replace './posts/' with '/posts/'
      .replace(/^\.\/pages\//, '/pages/') // Replace './pages/' with '/pages/'
      .replace(/\.md$/, '')
    sitemap.write({ url });
  });
  sitemap.end()

  await new Promise((resolve) => writeStream.on('finish', resolve))
}

export default generateSitemap