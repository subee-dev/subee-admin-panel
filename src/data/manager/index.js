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

  async deleteSubscription(id) {
    //TODO: Uncomment below and add correct api route
    //const url = `testing/${id}`;
    //const response = await this.AjaxManager.delete(url);
    console.log("Delete Clicked", id);
    return true;
  }
}

const instance = new SubscriptionManager();
export default instance;
