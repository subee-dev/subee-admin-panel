/**
 * Subscription Model
 *
 * Declare what response is expected and
 * construct the model as app needs
 */
export class Subscription {
  id;
  logo;
  nameKr;
  nameEn;
  description;
  createdAt;
  updatedAt;
  recommended;
  notRecommended;
  averageRate;

  constructor(subscription) {
    this.id = subscription.id;
    this.logo = subscription.logo;
    this.nameKr = subscription.nameKr;
    this.nameEn = subscription.nameEn;
    this.name = `${subscription.nameKr} ${subscription.nameEn}`;
    this.description = subscription.description;
    this.createdAt = subscription.createdAt;
    this.updatedAt = subscription.updatedAt;
    this.recommended = subscription.recommended;
    this.notRecommended = subscription.notRecommended;
    this.averageRate = subscription.averageRate;
  }
}
