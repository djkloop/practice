import request from '../utils/request';

// 获取图形验证码
export function getCaptcha() {
  return request({
    url: '/v1/aider/captcha',
    method: 'get'
  });
}

// 获取短信验证码
export function getSmsCode(data) {
  return request({
    url: '/v1/aider/sms_code',
    method: 'get',
    data
  });
}
