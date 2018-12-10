Page({
  data: {
    uid: '',
    type: 'action'
  },
  onLoad: function (options) {
    this.setData({
      uid: options.uid,
      type: options.type
    });
  },
  onReady: function () {

  },
})