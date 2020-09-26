//TODO: understand why types are not working correctly with got lib
// import got, {Options} from "got";
const got = require("got");

export default class Offer {

  price: number;
  waitingTime: number;
  currency: string;

  constructor(price: number, waitingTime: number, currency: string) {
    this.price = price;
    this.waitingTime = waitingTime;
    this.currency = currency;
  }

  static searchOffers = async (token: string, startLatitude: number, startLongitude: number, endLatitude: number, endLongitude: number) => {
    try {

      const options = {
        headers: {
          'usertoken': token,
          'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig'
        },
        responseType: 'json',
        body: JSON.stringify({
          'startLatitude': startLatitude,
          'startLongitude': startLongitude,
          'endLatitude': endLatitude,
          'endLongitude': endLongitude
        })
      };

      const result = await got.post('https://staging.api.external.thegoodseat.fr/getalloffers', options);

      const offers: Offer[] = [];

      // TODO: YUCK !
      result.body['body'].forEach(offer => {
        offers.push(new Offer(
          offer.price,
          offer.arrivalTime,
          offer.currency
        ))
      })

      return offers;

    } catch(error) {
      throw new Error('Issue while fetching offers : ' + error.message);
    }
  }

}
