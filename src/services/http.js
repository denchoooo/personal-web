import axios from 'axios';

export default {
  token: '',

  init() {
    axios.defaults.baseURL = `${process.env
      .REACT_APP_GHOST_BLOG_HOST}/ghost/api/v0.1`;

    const tokenMeta = process.env.REACT_APP_GHOST_BLOG_TOKEN;

    if (tokenMeta) {
      axios.interceptors.request.use(config => {
        const newConfig = config;

        newConfig.headers.Authorization = `Bearer ${tokenMeta}`;

        return newConfig;
      });
    }
  },

  post(url, data, successCallback, errorCallback) {
    return axios
      .request({
        url,
        data,
        method: 'post'
      })
      .then(successCallback)
      .catch(errorCallback);
  },

  get(url, successCallback, errorCallback) {
    return axios
      .request({
        url,
        method: 'get'
      })
      .then(successCallback)
      .catch(errorCallback);
  },

  patch(url, data, successCallback, errorCallback) {
    return axios
      .request({
        url,
        data,
        method: 'patch'
      })
      .then(successCallback)
      .catch(errorCallback);
  },

  delete(url, successCallback, errorCallback) {
    return axios
      .request({
        url,
        method: 'delete'
      })
      .then(successCallback)
      .catch(errorCallback);
  }
};
