export default {
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/demo/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false, // 需要自定义 tabBar 才为 true
    color: '#000',
    selectedColor: '#487EFB',
    backgroundColor: '#fff',
    borderStyle:'black',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
      },
      {
        text: '我的',
        pagePath: 'pages/my/index',
      },
    ],
  },
};
