import { getTopicBySearch } from '../../../service/api.js';

Page({
  data: {
    result: []
  },
  // 搜索
  handleSearchTopic: function(e) {
    const title = e.detail.value;
    getTopicBySearch({ title }).then(res => {
      this.setData({
        result: res.topics
      });
    });
  }
})