const API = require('../utils/api');
const md2html = require('../utils/md2html');

class Static {
  // 社区规范
  async renderNorms(req, res) {
    const text = await API.getQuickStart();

    return res.render('pages/norms', {
      title: '社区规范',
      text: md2html(text)
    });
  }
}

module.exports = new Static();
