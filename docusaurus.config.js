// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");
// Override code blocks to be Obol coloured
const customObolDarkTheme = {
  ...darkCodeTheme,
  plain: { color: "#bfc7d5", backgroundColor: "#243D42" },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Obol Network",
  tagline: "Building Distributed Validators for Ethereum",
  url: "https://docs.obol.tech/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ObolNetwork", // Usually your GitHub org/user name.
  projectName: "obol-docs", // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ObolNetwork/obol-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/ObolNetwork/obol-docs/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "GTM-NZ2HGMB",
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Obol Network",
        logo: {
          alt: "Obol Network Logo",
          src: "/img/ObolIconDark.svg",
          srcDark: "/img/ObolIconLight.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "https://blog.obol.tech", label: "Blog", position: "left" },
          {
            href: "https://github.com/obolnetwork/obol-docs",
            label: "GitHub",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Obol Network Logo",
          src: "/img/ObolLineWhite.svg",
          srcDark: "/img/ObolLineWhite.svg",
          width: "30px",
          height: "30px",
          href: "https://obol.tech/",
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro to Obol",
                to: "/docs/intro",
              },
              {
                label: "Charon",
                to: "/docs/charon/intro",
              },
              {
                label: "DV Launchpad",
                to: "/docs/dvl/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/n6ebKsX46w',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/obolnetwork',
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: 'Blog',
                to: 'https://blog.obol.tech/',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/obolnetwork/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Obol Labs, Inc. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: customObolDarkTheme,
        additionalLanguages: ["solidity", "json5"],
      },
      metadata: [
        { property: "og:image", content: "/img/obol_og_image.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
      ],
    }),
};

module.exports = config;
