import Request from '../utils/request';
import apis from './apis';

const { userTextApis } = apis;

export const getUsersInfoTest = (data) =>
  Request({
    url: userTextApis.getUsersInfoApi(),
    method: 'GET',
    data,
  });
