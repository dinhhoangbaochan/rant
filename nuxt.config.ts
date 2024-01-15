// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900;1000&display=swap' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css' }
      ]
    }
  },
  content: {
    highlight: {
      theme: 'github-light'
    },
    markdown: {
      remarkPlugins: ['remark-prism']
    }
  },
})
