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
  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
    
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'gabe-crafting', // your GitHub/GitLab username or organization
      repo: 'https://github.com/gabe-crafting/portofolio', // your repository name
      branch: 'master', // the branch to commit to (default: main)
    }
  }
})