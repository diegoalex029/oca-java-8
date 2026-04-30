
import {themes as prismThemes} from 'prism-react-renderer';

const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OCA Java 8',
  tagline: 'Guía de estudio para la certificación Oracle Certified Associate Java SE 8',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://diegoalex029.github.io',
  baseUrl: '/oca-java-8/',

  organizationName: 'diegoalex029',
  projectName: 'oca-java-8',

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'OCA Java 8',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'ocaSidebar',
            position: 'left',
            label: 'Contenido',
          },
          {
            href: 'https://github.com/diegoalex029/oca-java-8',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Bunnies. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java'],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
