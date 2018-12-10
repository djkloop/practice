import { getCurrentUserInfo } from '../../service/api.js';

Page({
  data: {
    user: {}
  },
  onReady: function () {
    wx.getStorage({
      key: 'token',
      success: (res) => {
        this.getUserData();
      },
    });
  },
  // 获取当前用户信息
  getUserData: function() {
    getCurrentUserInfo().then(data => {
      this.setData({ user: data });
    });
  },
  // 根据登录状态跳转
  handleNavigateTo: function(e) {
    const { type } = e.currentTarget.dataset;
    const { user } = this.data;
    let url;
    if (user.id) {
      url = `/pages/user/user?uid=${user.id}&type=${type}`;
    } else {
      url = `/pages/signin/signin`;
    }
    wx.navigateTo({
      url
    });
  }
})