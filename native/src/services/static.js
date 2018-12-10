import request from '../utils/request';

// 获取快速开始文档
export function getQuickStart() {
  return request({
    url: '/v1/static/quick_start',
    method: 'get'
  });
}

// 获取API说明文档
export function getApiDoc() {
  return request({
    url: '/v1/static/api_doc',
    method: 'get'
  });
}

// 获取关于文档
export function getAbout() {
  return request({
    url: '/v1/static/about',
    method: 'get'
  });
}
