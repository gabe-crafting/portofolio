// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    'nuxt-studio',
  ],
  css: ['@/assets/css/main.css'],
  appConfig: {
    ui: {
      colors: {
        primary: 'blue',
      },
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})