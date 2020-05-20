module.exports = {
  title: 'myantdpro',
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
      {text: '指南', link: '/guide/'},
      {
        text: '参考', items: [
          {text: 'Ant Design 文档', link: 'https://ant.design/docs/react/introduce-cn'},
          {text: 'Ant Design Pro 文档', link: 'https://pro.ant.design/docs/getting-started-cn'},
        ]
      }
    ],
    sidebar: {
      '/guide/': getGuideSidebar('指南'),
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
        'department',
        'user',
        'role',
        'menu',
        'api',
        'dictionary',
        'information'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: []
    }
  ]
}
