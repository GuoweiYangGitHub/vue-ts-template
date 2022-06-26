import request from '../request';

export function getUserInfo(data: any) {
  return request({
    url: 'prize/type/category',
    method: 'GET',
    data
  });
}
