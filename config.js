/*
* 配置
*/
const config = {
  port: 3000,
  mongodb: 'mongodb://localhost:27017/practice',
  redis: '',
  session_secret: 'practice_secret',

  qiniu: {
    ACCESS_KEY: '',
    SECRET_KEY: '',
    BUCKET_NAME: '',
    DONAME: ''
  },
};

module.exports = config;
