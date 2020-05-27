module.exports = {
  title: 'BF',
  dest: './dist',
  base: '/myantdpro-docs/',
  repo: 'https://github.com/hankaibo/myantdpro-docs',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      {text: '主页', link: '/'},
      {text: '指南', link: '/zh/guide/'},
      {
        text: '参考', items: [
          {text: 'Ant Design 文档', link: 'https://ant.design/docs/react/introduce-cn'},
          {text: 'Ant Design Pro 文档', link: 'https://pro.ant.design/docs/getting-started-cn'},
        ]
      },
      {
        text: 'Github', link: 'https://github.com/hankaibo'
      }
    ],
    sidebar: {
      '/zh/guide/': getGuideSidebar('指南', '其它'),
    }
  }
};

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'environment',
        'menu'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'faq',
        'donate'
      ]
    }
  ]
}
