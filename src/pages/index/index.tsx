import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Button, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';

// import { add, minus, asyncAdd } from "../../actions/counter"; // dispatch action

import './index.less';

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

// type PageStateProps = {
//   counter: {
//     num: number;
//   };
// };

// type PageDispatchProps = {
//   add: () => void;
//   dec: () => void;
//   asyncAdd: () => any;
// };

// type PageOwnProps = {};

// type PageState = {};

// type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

// interface Index {
//   props: IProps;
// }

interface IIndexProps {
  props: any;
}

function Index(props:IIndexProps) {
  const storeCounter = useSelector(({ counterTest }) => counterTest);
  const dispatch = useDispatch();
  const handleAdd = () => {
    // dispatch(add());
    dispatch({ type: 'counterTest/add' });
  };
  const handleDec = () => {
    dispatch({ type: 'counterTest/minus' });
  };
  const handleAsyncAdd = () => {
    setTimeout(() => {
      dispatch({ type: 'counterTest/add' });
    }, 2000);
  };

  return (
    <View className='index'>
      <Button className='add_btn' onClick={handleAdd}>
        +
      </Button>
      <Button className='dec_btn' onClick={handleDec}>
        -
      </Button>
      <Button className='dec_btn' onClick={handleAsyncAdd}>
        async
      </Button>
      <View>
        <Text>{storeCounter.num}</Text>
      </View>
      <View>
        <Text>Hello World</Text>
      </View>
      <Button
        onClick={() => {
          Taro.navigateTo({ url: '/pages/demo/index' });
        }}
      >
        jump Demo
      </Button>
    </View>
  );
}

export default Index;
