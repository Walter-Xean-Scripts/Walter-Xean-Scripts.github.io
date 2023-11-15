import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WXScripts',
  tagline: 'High quality scripts for FiveM',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.wxs.gg/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Walter-Xean-Scripts', // Usually your GitHub org/user name.
  projectName: 'Walter-Xean-Scripts.github.io', // Usually your repo name.
  deploymentBranch: 'deployment', // Deployment branch.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    defaultMode: 'dark',
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'WXScripts',
      logo: {
        alt: 'WXScripts Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          label: "Our GitHub",
          href: "https://github.com/Walter-Xean-Scripts/"
        },
        {
          label: 'Our Store',
          href: 'https://store.wxs.gg',
        },
        {
          label: 'Our Discord',
          href: 'https://discord.com/invite/tpJE2854th',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} WXScripts. Documentation built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'lua'
      ]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
