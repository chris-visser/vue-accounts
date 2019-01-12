module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Accounts',
      description: 'A Vue library to simplify the setup account systems'
    }
  },
  serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    repo: 'chris-visser/vue-accounts',
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Api', link: '/api/' },
      { text: 'Ecosystem', link: '/ecosystem/' },
    ],
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'API Reference',
            link: '/api/',
          },
          {
            text: 'Release Notes',
            link: 'https://github.com/chris-visser/vue-accounts/releases',
          },
        ],
        sidebar: [
          '/',
          '/getting-started',
          {
            title: 'Core Concepts',
            collapsable: false,
            children: [
              '/guide/core-concepts/stores.md',
              '/guide/core-concepts/components.md',
              '/guide/core-concepts/strategies.md'
            ],
          },
        ],
      },
    },
  },
};
