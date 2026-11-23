import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '价格行为笔记',
  description: '用结构看盘，不用指标猜方向。Al Brooks 价格行为学的读盘笔记与复盘方法。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://price-action-notes.pages.dev'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'author', content: '价格行为笔记' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '价格行为笔记' }],
    ['script', { type: 'module', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token":"210ea7044175480794fbe624f2fcbd2b"}' }]
  ],
  themeConfig: {
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '更新于' },
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/what-is-price-action' },
      { text: '交易笔记', link: '/notes/trend-stop-and-exit' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '价格行为学在读什么', link: '/guide/what-is-price-action' },
            { text: '一张图先看哪三件事', link: '/guide/reading-a-chart' },
            { text: '怎么练才不白练', link: '/guide/how-to-practice' }
          ]
        }
      ],
      '/notes/': [
        {
          text: '交易笔记',
          items: [
            { text: '趋势里的止损与离场', link: '/notes/trend-stop-and-exit' },
            { text: '复盘记录模板', link: '/notes/review-template' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清空',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    footer: {
      message: '本站在分享学习笔记，不构成任何投资建议',
      copyright: '内容仅供学习交流'
    },
    socialLinks: []
  }
})
