import { Request, Response } from "express";
//TODO: understand why types are not working correctly with got lib
// import got, {Options} from "got";
import Offer from "../models/Offer";
const got = require("got");

export const search = async (req: Request, res: Response) => {

  try {

    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];

      // TODO: set coordinates dynamically
      const options = {
        headers: {
          'usertoken': bearerToken,
          'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig'
        },
        responseType: 'json',
        body: JSON.stringify({
          'startLatitude': 48.870377,
          'startLongitude': 2.370615,
          'endLatitude': 48.882719,
          'endLongitude': 2.322451
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

      res.send({code: 200, offers: offers});
    } else {
      // TODO: explicit the error
      // Forbidden
      res.sendStatus(403);
    }

  } catch(error) {
    // TODO: explicit the error
    res.sendStatus(500);
  }

}
module.exports.search = search;
