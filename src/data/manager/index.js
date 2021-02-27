import AjaxManager from "../ajax";

/**
 * Collection of API calls related to Subscription
 */
class SubscriptionManager {
  constructor() {
    this.AjaxManager = AjaxManager;
  }

  /**
   * Testing Manager
   */
  async testSubscriptions() {
    const url = "https://api.github.com/users/mapbox";
    const response = await this.AjaxManager.get(url);
    console.log("hit?");
    return response;
  }
}

const instance = new SubscriptionManager();
export default instance;
