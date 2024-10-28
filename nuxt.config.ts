// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/content', '@nuxtjs/mdc'],
  content: {
    highlight: {
      theme: "material-theme-darker",
      langs: ['php', 'js', 'html', 'css', 'shell', 'bash']
    }
  }
})