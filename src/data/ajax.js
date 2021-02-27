const { default: axios } = require("axios");

class AjaxManager {
  static get = this.get;
  static post = this.post;
  static put = this.put;
  static delete = this.delete;
  constructor() {
    this.get = this.get;
    this.post = this.post;
    this.put = this.put;
    this.delete = this.delete;
    this.patch = this.patch;
  }

  /**
   * Make a get request
   */
  async get(url) {
    return axios.get(url);
  }

  async post(url, data) {
    return axios.post(url, data);
  }

  async put(url, data) {
    return axios.post(url, data);
  }

  async delete(url) {
    return axios.post(url);
  }
}

const instance = new AjaxManager();
export default instance;
