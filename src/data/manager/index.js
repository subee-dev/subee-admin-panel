import AjaxManager from "../ajax";
import { Subscription } from "../models/subscription";

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
  async fetchAllSubcriptions() {
    const config = {
      params: {
        limit: 1000,
      },
    };

    const response = await this.AjaxManager.get("/v1/subscriptions", config);
    return response;
  }

  async updateSubscription(subscription: Subscription) {
    var fd = new FormData();
    fd.append("nameKr", subscription.nameKr);
    fd.append("nameEn", subscription.nameEn);
    fd.append("description", subscription.description);
    subscription.tags.forEach((t, index) => {
      fd.append(`tags[${index}][name]`, t);
    });
    fd.append("logo", subscription.logo);

    const response = await this.AjaxManager.patch(
      `/v1/subscriptions/${subscription.id}`,
      fd,
    );

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
