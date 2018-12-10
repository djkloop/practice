import { signin } from '../../service/api.js';

Page({
  data: {

  },
  // 登录
  signin: function(e) {
    signin(e.detail.value).then(token => {
      // 保存token
      wx.setStorageSync('token', token);
      wx.showToast({
        title: '登录成功',
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
