export default class Offer {

  price: number;
  waitingTime: number;
  currency: string;

  constructor(price: number, waitingTime: number, currency: string) {
    this.price = price;
    this.waitingTime = waitingTime;
    this.currency = currency;
  }

}
