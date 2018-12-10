import request from '../utils/request';

// 获取用户消息
export function fetchUserNotice() {
  return request({
    url: '/v1/notice/user',
    method: 'get'
  });
}

// 获取系统消息
export function fetchSystemNotice() {
  return request({
    url: '/v1/notice/system',
    method: 'get'
  });
}
