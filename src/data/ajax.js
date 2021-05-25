const { default: axios } = require("axios");

const baseConfig = {
  baseURL: "https://dev.subee-api.com",
  // baseURL: "https://prod.subee-api.com",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
  },
};

class AjaxManager {
  static get = this.get;
  static post = this.post;
  static patch = this.patch;
  static put = this.put;
  static delete = this.delete;
  constructor() {
    this.get = this.get;
    this.post = this.post;
    this.patch = this.patch;
    this.put = this.put;
    this.delete = this.delete;
    this.patch = this.patch;
  }

  /**
   * Make a get request
   */
  async get(url, config = {}) {
    const mergedConfig = {
      ...baseConfig,
      ...config,
    };
    return axios.get(url, mergedConfig);
  }

  async post(url, data, config = {}) {
    const mergedConfig = {
      ...baseConfig,
      ...config,
    };
    return axios.post(url, data, mergedConfig);
  }

  async patch(url, data, config = {}) {
    const mergedConfig = {
      ...baseConfig,
      ...config,
    };
    console.log("Form Data: ", data);
    return axios.patch(url, data, mergedConfig);
  }

  async put(url, data, config = {}) {
    const mergedConfig = {
      ...baseConfig,
      ...config,
    };
    return axios.put(url, data, mergedConfig);
  }

  async delete(url, config = {}) {
    const mergedConfig = {
      ...baseConfig,
      ...config,
    };
    return axios.delete(url, mergedConfig);
  }
}

const instance = new AjaxManager();
export default instance;
