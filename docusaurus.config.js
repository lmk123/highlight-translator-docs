/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  customFields: {
    latestVersion: '8.3.2',
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
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
    googleAnalytics: {
      trackingID: 'UA-163159722-1',
    },
    googleAdsense: {
      dataAdClient: 'ca-pub-7015533392136941',
    },
  },
  plugins: [
    'docusaurus-plugin-google-adsense',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        translations: {
          search_placeholder: '搜索',
          see_all_results: '查看全部结果',
          no_results: '无结果',
          search_results_for: '搜索"{{ keyword }}"',
          search_the_documentation: '搜索文档',
          count_documents_found: '找到了 {{ count }} 篇文档',
          count_documents_found_plural: '找到了 {{ count }} 篇文档',
          no_documents_were_found: '没有找到相关文档',
        },
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/lmk123/highlight-translator-docs/edit/next/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/lmk123/highlight-translator-docs/edit/next/',
        },
        theme: {},
      },
    ],
  ],
}
