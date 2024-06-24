// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  content: {
    highlight: {
      theme: 'material-theme-darker'
    }
  }
})