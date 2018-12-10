const request = require('./request');

// 获取社区规范文档
exports.getNorms = () => request('/static/norms');
// 获取图形验证码
exports.getCaptcha = () => request('/aider/captcha', { width: 100, height: 34 });
// 获取短信验证码
exports.getSmsCode = mobile => request('/aider/sms_code', mobile);
// 注册
exports.signup = info => request('/signup', info, 'POST');
// 登录
exports.signin = info => request('/signin', info, 'POST');
// 忘记密码
exports.forgetPass = obj => request('/forget_pass', obj, 'PATCH');
// 获取当前登录用户信息
exports.getCurrentUser = () => request('/info');
// 获取积分榜前一百用户列表
exports.getUsersTop100 = () => request('/users/top100');
// 根据ID获取用户信息
exports.getUserById = uid => request(`/user/${uid}`);
// 获取用户动态
exports.getUserAction = uid => request(`/user/${uid}/action`);
// 获取用户专栏列表
exports.getUserCreate = uid => request(`/user/${uid}/create`);
// 获取用户喜欢列表
exports.getUserLike = uid => request(`/user/${uid}/like`);
// 获取用户收藏列表
exports.getUserCollect = uid => request(`/user/${uid}/collect`);
// 获取用户粉丝列表
exports.getUserFollower = uid => request(`/user/${uid}/follower`);
// 获取用户关注列表
exports.getUserFollowing = uid => request(`/user/${uid}/following`);
// 更新个人信息
exports.setting = info => request('/setting', info, 'PUT');
// 修改密码
exports.updatePass = obj => request('/update_pass', obj, 'PATCH');
// 关注或者取消关注某个用户
exports.followOrUn = uid => request(`/user/${uid}/follow_or_un`, {}, 'PATCH');
// 创建话题
exports.createTopic = obj => request('/create', obj, 'POST');
// 删除话题
exports.deleteTopic = tid => request(`/topic/${tid}/delete`, {}, 'DELETE');
// 编辑话题
exports.editTopic = (tid, obj) => request(`/topic/${tid}/edit`, obj, 'PUT');
// 获取话题列表
exports.getTopicList = page => request('/topics/list', page);
// 搜索话题列表
exports.getTopicByTitle = title => request('/topics/search', title);
// 获取无人回复的话题
exports.getNoReplyTopic = count => request('/topics/no_reply', count);
// 根据ID获取话题详情
exports.getTopicDetail = tid => request(`/topic/${tid}`);
// 喜欢或者取消喜欢话题
exports.likeOrUn = tid => request(`/topic/${tid}/like_or_un`, {}, 'PATCH');
// 收藏或者取消收藏话题
exports.collectOrUn = tid => request(`/topic/${tid}/collect_or_un`, {}, 'PATCH');
// 创建回复
exports.createReply = (tid, content) => request(`/topic/${tid}/reply`, content, 'POST');
// 删除回复
exports.deleteReply = rid => request(`/reply/${rid}/delete`, {}, 'DELETE');
// 编辑回复
exports.editReply = (rid, content) => request(`/reply/${rid}/edit`, content, 'PUT');
// 回复点赞
exports.upReply = rid => request(`/reply/${rid}/up`, {}, 'PATCH');
// 获取用户消息
exports.getUserNotice = () => request('/notice/user');
// 获取系统消息
exports.getSystemNotice = () => request('/notice/system');
