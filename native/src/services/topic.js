import request from '../utils/request';

// 创建话题
export function addTopic(data) {
  return request({
    url: '/v1/create',
    method: 'post',
    data
  });
}

// 删除话题
export function delTopic(tid) {
  return request({
    url: `/v1/topic/${tid}/delete`,
    method: 'delete',
  });
}

// 编辑话题
export function updateTopic(tid, data) {
  return request({
    url: `/v1/topic/${tid}/edit`,
    method: 'put',
    data
  });
}

// 获取话题列表
export function fetchTopics(data) {
  return request({
    url: '/v1/topics/list',
    method: 'get',
    data
  })
}

// 搜索话题
export function fetchTopicsByQuery(data) {
  return request({
    url: '/v1/topics/search',
    method: 'get',
    data
  });
}

// 获取无人回复的话题
export function fetchTopicsNoReply(data) {
  return request({
    url: '/v1/topics/no_reply',
    method: 'get',
    data
  });
}

// 根据ID获取话题详情
export function fetchTopicById(tid) {
  return request({
    url: `/v1/topic/${tid}`,
    method: 'get'
  });
}

// 喜欢或者取消喜欢话题
export function starOrUn(tid) {
  return request({
    url: `/v1/topic/${tid}/star_or_un`,
    method: 'put'
  });
}

// 收藏或者取消收藏话题
export function collectOrUn(tid) {
  return request({
    url: `/v1/topic/${tid}/collect_or_un`,
    method: 'put'
  });
}
