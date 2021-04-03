module.exports = {
  title: '划词翻译',
  description: '让浏览不同语言的网站变得无比轻松的浏览器扩展程序。',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-163159722-1'
      }
    ]
  ],
  themeConfig: {
    sidebar: {
      '/services/': [{
        title: '服务申请',
        path: '/services/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          'baidu-api',
          'qq-api',
          'ali-api',
          'youdao-api',
          'baidu-ocr'
        ]
      }]
    },
    logo: '/logo.png',
    smoothScroll: true,
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '常见问题', link: '/faq.html' },
      { text: '服务申请', link: '/services/' },
      { text: '更新日志', link: '/log.html' },
      { text: '反馈问题', link: '/issues.html' },
      { text: '隐私政策', link: '/privacy-policy.html' }
    ],
    repo: 'https://github.com/lmk123/crx-selection-translate',
    repoLabel: '查看源码',
    docsRepo: 'lmk123/highlight-translator-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页'
  }
}
