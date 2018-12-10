const perfix = 'http://localhost:3000/v1';

const request = (url, data = {}, method = 'GET') => {
  const token = wx.getStorageSync('token');

  wx.showLoading({
    title: 'Loading...'
  });

  return new Promise((resolve, reject) => {
    wx.request({
      url: perfix + url,
      data,
      method,
      header: {
        'Authorization': token
      },
      complete: res => {
        wx.hideLoading();
        if (res.statusCode === 200) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          wx.removeStorageSync('token');
          reject(res.data);
        } else {
          wx.showToast({
            title: res.data,
            icon: 'none'
          });
          reject(res.data);
        }
      }
    });
  });
};

export default request;
