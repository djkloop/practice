import request from '../utils/request';

// 注册
export function signup(data) {
  return request({
    url: '/v1/signup',
    method: 'post',
    data
  });
}

// 登录
export function signin(data) {
  return request({
    url: '/v1/signin',
    method: 'post',
    data
  });
}

// 忘记密码
export function forgetPass(data) {
  return request({
    url: '/v1/forget_pass',
    method: 'post',
    data
  });
}

// 获取当前用户信息
export function getCurrentUser() {
  return request({
    url: '/v1/info',
    method: 'get'
  });
}

// 更新个人信息
export function updateUserInfo(data) {
  return request({
    url: '/v1/setting',
    method: 'put',
    data
  });
}

// 修改密码
export function updatePass(data) {
  return request({
    url: '/v1/update_pass',
    method: 'put',
    data
  });
}

// 获取积分榜前一百用户列表
export function getUserTop100() {
  return request({
    url: '/v1/users/top100',
    method: 'get'
  });
}

// 根据ID获取用户信息
export function getUserById(uid) {
  return request({
    url: `/v1/user/${uid}`,
    method: 'get'
  });
}

// 获取用户动态
export function getUserAction(uid) {
  return request({
    url: `/v1/user/${uid}/action`,
    method: 'get'
  });
}

// 获取用户专栏列表
export function getUserCreate(uid) {
  return request({
    url: `/v1/user/${uid}/create`,
    method: 'get'
  });
}

// 获取用户喜欢列表
export function getUserStar(uid) {
  return request({
    url: `/v1/user/${uid}/star`,
    method: 'get'
  });
}

// 获取用户收藏列表
export function getUserCollect(uid) {
  return request({
    url: `/v1/user/${uid}/collect`,
    method: 'get'
  });
}

// 获取用户粉丝列表
export function getUserFollower(uid) {
  return request({
    url: `/v1/user/${uid}/follower`,
    method: 'get'
  });
}

// 获取用户关注列表
export function getUserFollowing(uid) {
  return request({
    url: `/v1/user/${uid}/following`,
    method: 'get'
  });
}

// 关注或者取消关注用户
export function followOrUn(uid) {
  return request({
    url: `/v1/user/${uid}/follow_or_un`,
    method: 'put'
  });
}
