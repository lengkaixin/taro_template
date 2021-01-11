// 自定义 tabBar
import React, { useState } from 'react';
import { View } from '@tarojs/components';

const list = [
  {
    text: '首页',
    pagePath: 'pages/index/index',
  },
  {
    text: '我的',
    pagePath: 'pages/my/index',
  },
];

const CustomTabBar = () => {
  return (
    <View>
      {list.map((item) => {
        return <View key={item.text}>{item.text}</View>;
      })}
    </View>
  );
};

export default React.memo(CustomTabBar);
