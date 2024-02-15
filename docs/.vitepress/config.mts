import { defineConfig } from 'vitepress'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-poc/',
  title: "Onex Primerica Design System",
  description: "A Living Design System Documentation",
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/vitepress-poc/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/assets/images/primerica-logo-light.svg',
      dark: '/assets/images/primerica-logo-dark.svg'
    },
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      { text: 'Brand', link: '/src/brand' },
      {
        text: 'FOUNDATIONS',
        collapsed: true,
        items: [
          { text: 'Color Palette', link: '/src/Foundations/color-palette' },
          { text: 'Content Format', link: '/src/Foundations/content-format' },
          { text: 'Data Formats', link: '/src/Foundations/data-formats' },
          { text: 'Focus Indicators', link: '/src/Foundations/focus-indicators' },
          { text: 'Iconography', link: '/src/Foundations/iconography' },
          { text: 'Illustration', link: '/src/Foundations/illustration' },
          { text: 'Interaction', link: '/src/Foundations/interaction' },
          { text: 'Layout', link: '/src/Foundations/layout' },
          { text: 'Motion', link: '/src/Foundations/motion' },
          { text: 'Multi-Language Support', link: '/src/Foundations/multiLanguage' },
          { text: 'Shadows', link: '/src/Foundations/shadows' },
          { text: 'Spacing', link: '/src/Foundations/spacing' },
          { text: 'Typography', link: '/src/Foundations/typography' },
          { text: 'Typography Spacing', link: '/src/Foundations/typography-spacing' },
        ]
      },
      {
        text: 'COMPONENTS',
        collapsed: true,
        items: [
          { text: 'Accordions', link: '/src/Components/accordions' },
        ]
      },
    ],
    outline: {
      label: 'Table of Content',
      level: [2, 3],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    plugins: [ 
      vuetify({ 
        autoImport: true,
      }),
    ],
  },
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    },
    lineNumbers: true
  }


})
