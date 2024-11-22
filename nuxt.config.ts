// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['/assets/scss/main.scss' ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },

  app:{
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3333', 
    },
  },

  modules: ['nuxt-swiper'],
})