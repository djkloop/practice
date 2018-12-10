import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.interceptors.response.use(res => {
  return res.data;
}, err => {
  return Promise.reject(err);
})

export default ({ url, method = 'get', data = {} }) => {
  const params = {
    url,
    method
  };

  if (method === 'get') {
    params.params = data;
  } else {
    params.data = data;
  }

  return axios(params);
}
