// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pilot Period',
  tagline: 'A tech & testing blog',
  url: 'https://www.pilot-period.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'viper3400', // Usually your GitHub org/user name.
  projectName: 'pilot-period', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        /*docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        docs: {
          routeBasePath: '/docs', // Serve the docs at the site's root
          /* other docs plugin options */
        },
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          blogSidebarCount: 15,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Pilot Period',
        logo: {
          alt: 'Pilot Period Logo',
          src: 'img/apple-touch-icon.png',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },*/
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: '/',
            label: 'Blog',
            position: 'left',
          },
          {
            href: '/docs/serenity-js',
            label: 'Serenity/JS',
            position: 'left',
          },
          {
            href: '/docs/about',
            label: 'About',
            position: 'left',
          },
          {
            href: 'https://github.com/viper3400',
            label: 'GitHub',
            position: 'right',
          },
          /*{
            type: 'localeDropdown',
            position: 'right',
          }*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
         /* {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },*/
          {
            title: 'Find me on',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/viper3400/',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodontech.de/@JanG/',
              },
              {
                label: 'Xing',
                href: 'https://www.xing.com/profile/Jan_Graefe2/cv',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jan-graefe-5b515b260/',
              },
            ],
          },
          {
            title: 'Build with',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ]
          },
          {
            title: 'Content creation assisted by',
            items: [
              {
                label: 'ChatGPT',
                href: 'https://chat.openai.com',
              },
              {
                label: 'Pixabay',
                href: 'https://pixabay.com',
              },
            ]
          }
        ],
        copyright: `CC BY-ND 4.0 ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      require.resolve('./src/plugins/piwik/index.js'),
      {
          id: '16f7a2cc-833a-4baf-8adc-40a9cc9ff38e',
          enable: true,
      }
    ]  
  ]
};

module.exports = config;