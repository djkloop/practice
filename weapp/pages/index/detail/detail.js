import { getTopicDetail, getNoReplyTopic } from '../../../service/api.js';

Page({
  data: {
    tid: '',
    topic: {},
    author: {},
    replies: [],
    noReplyTopic: [],
    collect: false,
    like: false
  },
  onLoad: function (options) {
    this.setData({ tid: options.tid });
  },
  onReady: function () {
    this.getTopicDetail();
    this.getNoReplyTopic();
  },
  // 获取话题详情
  getTopicDetail: function() {
    getTopicDetail(this.data.tid).then(data => {
      this.setData({
        topic: data.topic,
        author: data.author,
        replies: data.replies,
        collect: data.collect,
        like: data.like
      });
    });
  },
  // 获取尚未回复的话题
  getNoReplyTopic: function() {
    getNoReplyTopic().then(data => {
      this.setData({ noReplyTopic: data });
    });
  }
})