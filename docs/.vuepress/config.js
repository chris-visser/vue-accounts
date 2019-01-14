module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Accounts',
      description: 'A Vue library to simplify the setup account systems',
    },
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
      {
        text: 'Ecosystem',
        items: [
          { text: 'Meteor', link: '/addons/meteor' },
          { text: 'Vuetify', link: '/addons/vuetify/' },
          { text: 'Vue Element', link: '/addons/element/' },
          { text: 'Vue Bootstrap', link: '/addons/bootstrap-vue/' },
        ]
      }
    ],
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Guide', link: '/guide/' },
          // { text: 'API Reference', link: '/api/' },
          // { text: 'Ecosystem', link: '/ecosystem/' },
          { text: 'Release Notes', link: 'https://github.com/chris-visser/vue-accounts/releases' },
        ],
        sidebar: [
          '/',
          '/guide/getting-started',
          {
            title: 'Core Concepts',
            collapsable: false,
            children: [
              '/guide/core-concepts/overview.md',
              '/guide/core-concepts/stores.md',
              '/guide/core-concepts/components.md',
              '/guide/core-concepts/strategies.md',
            ],
          },
          {
            title: 'Advanced Concepts',
            collapsable: false,
            children: [
              '/guide/advanced-concepts/style-guide.md',
              '/guide/advanced-concepts/application-structure.md',
              '/guide/advanced-concepts/security.md'
            ],
          },
        ],
      },
    },
  },
};
