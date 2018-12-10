import { getSmsCode, signup } from '../../service/api.js';

Page({
  data: {
    mobile: null,
    text: '获取短信验证码',
    disabled: false
  },
  // 获取手机号
  handleMobileFin: function(e) {
    const { value } = e.detail;
    this.setData({ mobile: value });
  },
  // 获取短信验证码
  handleGetSmsCode: function() {
    const { mobile } = this.data;
    let timer;
    let countTime = 60;
    if (!mobile || !/^1[3,5,7,8,9]\d{9}$/.test(mobile)) {
      wx.showToast({
        title: '请填写正确的手机号',
        icon: 'none'
      });
    } else {
      this.setData({ disabled: true });
      getSmsCode({ mobile }).then(res => {
        timer = setInterval(() => {
          countTime--;
          if (countTime === 0) {
            this.setData({ disabled: false });
            clearInterval(timer);
            return;
          }
          this.setData({ text: `${countTime}s后重试` });
        }, 1000);
      });
    }
  },
  // 注册
  signup: function(e) {
    signup(e.detail.value).then(res => {
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        success: function() {
          wx.switchTab({
            url: '../index/index',
          });
        }
      });
    });
  }
})