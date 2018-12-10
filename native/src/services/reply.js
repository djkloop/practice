import request from '../utils/request';

// 新增回复
export function addReply(tid, data) {
  return request({
    url: `/v1/topics/${tid}/reply`,
    method: 'post',
    data
  });
}

// 删除回复
export function delReply(rid) {
  return request({
    url: `/v1/reply/${rid}/delete`,
    method: 'delete'
  });
}

// 编辑回复
export function updateReply(rid, data) {
  return request({
    url: `/v1/reply/${rid}/edit`,
    method: 'put'
  });
}

// 回复点赞
export function upReply(rid) {
  return request({
    url: `/v1/reply/${rid}/up`,
    method: 'put'
  });
}
