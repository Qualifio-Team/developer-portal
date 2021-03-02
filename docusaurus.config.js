module.exports = {
  title: 'Qualifio Developer Portal',
  tagline: 'By developers for developers',
  url: 'https://qualifio-team.github.io/',
  baseUrl: '/developer-portal/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Qualifio-Team', // Usually your GitHub org/user name.
  projectName: 'developer-portal', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Qualifio Developer Portal',
      logo: {
        alt: 'Qualifio Logo',
        src: 'img/qualifio-icon-light-background.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'my-api', label: 'API', position: 'left' },
        { to: 'petstore-api', label: 'Petstore API', position: 'left' },
        { to: 'petstore-swag-api', label: 'Petstore API (swag)', position: 'left' },
        {
          href: 'https://www.qualifio.com/',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      //style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Qualifio Developer Portal, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
            routePath: '/my-api/',
          },
          {
            spec: './api/petstore.yaml',
            routePath: '/petstore-api/',
          },
          {
            spec: './api/swagger.yaml',
            routePath: '/petstore-swag-api/',
          },
        ],
      },
    ],
  ],
}
