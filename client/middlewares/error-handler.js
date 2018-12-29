/* eslint-disable no-unused-vars */
class ErrorHandler {
  handle404(req, res, next) {
    return res.render('pages/exception', {
      title: '404',
      errorTitle: '抱歉！你访问的页面失联了',
      errorMsg: [
        '网址有错误 - 请检查地址是否完整或存在多余字符。',
        '网址已失效 - 可能页面已删除。'
      ]
    });
  }

  handle500(err, req, res, next) {
    return res.render('pages/exception', {
      title: '500',
      errorTitle: '抱歉！当前页面暂时无法访问',
      errorMsg: [err.message]
    });
  }
}

module.exports = new ErrorHandler();
