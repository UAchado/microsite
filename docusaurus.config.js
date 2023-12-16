// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UAchado Documentation',
  favicon: 'https://github.com/UAchado.png',

  // Set the production url of your site here
  url: 'https://uachado.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/microsite/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UAchado', // Usually your GitHub org/user name.
  projectName: 'microsite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "Sprints",
          blogSidebarCount: "ALL",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'UAchado',
        logo: {
          alt: 'UAchado Logo',
          src: 'https://github.com/UAchado.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog',
            label: 'Sprints',
            position: 'left',
          },
          {
            to: "http://uachado.pt/",
            label: "UAchado",
            position: "right",
          },
          {
            to: "https://uachado.atlassian.net/jira/software/projects/UAC/boards/2",
            label: "Jira",
            position: "right",
          },
          {
            to: "https://github.com/uachado",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/project_presentation',
              },
              {
                label: 'Sprints',
                to: '/blog',
              },
            ],
          },
          {
            title: ' ',
          },
          {
            title: ' ',
          },
          {
            title: ' ',
          },
          {
            title: ' ',
          },
          {
            title: 'More',
            items: [
              {
                label: 'UAchado',
                href: 'http://uachado.pt',
              },
              {
                label: 'Jira',
                href: 'https://uachado.atlassian.net/jira/software/projects/UAC/boards/2',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UAchado',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ES`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
