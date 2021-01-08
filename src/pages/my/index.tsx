import React, { useState } from 'react';
import { View, Button, Text } from '@tarojs/components';
import HTTP from '../../services';

// async getGoodsInfo(goodsId) {
//     const res = await detailApi.product({
//           id: goodsId,
//     });
// }

import './index.less';

const My = () => {
  const onUersInfo = () => {
    HTTP.usersTest.getUsersInfoTest('').then((res) => {
      console.log(res,'res');
    });
  };

  return (
    <View>
      <Text>My</Text>
      <Button onClick={onUersInfo}>click HTTP</Button>
    </View>
  );
};

export default React.memo(My);
