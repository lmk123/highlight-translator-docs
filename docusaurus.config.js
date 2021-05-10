/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  customFields: {
    latestVersion: '7.6.8',
  },
  title: '划词翻译',
  tagline: '简单好用的划词 / 截图 / 全文翻译扩展',
  url: 'https://hcfy.limingkai.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'logo.png',
  organizationName: 'lmk123',
  projectName: 'crx-selection-translate',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  themeConfig: {
    navbar: {
      title: '划词翻译',
      logo: {
        alt: '划词翻译 Logo',
        src: 'logo.png',
      },
      items: [
        { to: '/docs/install', label: '安装', position: 'right' },
        { to: '/docs/faq', label: '常见问题', position: 'right' },
        { to: '/docs/services/intro', label: '服务申请', position: 'right' },
        { to: '/docs/log', label: '更新日志', position: 'right' },
        { to: '/docs/issues', label: '反馈问题', position: 'right' },
        { to: '/blog', label: '产品博客', position: 'right' },
        {
          href: 'https://github.com/lmk123/crx-selection-translate',
          label: '查看源码',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/lmk123/highlight-translator-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/lmk123/highlight-translator-docs/edit/master/',
        },
        theme: {},
      },
    ],
  ],
}
