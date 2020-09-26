import { Request, Response } from "express";
import Offer from "../models/Offer";

export const search = async (req: Request, res: Response) => {

  try {

    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];

      const offers = await Offer.searchOffers(
        bearerToken,
        req.query.startLatitude as unknown as number,
        req.query.startLongitude as unknown as number,
        req.query.endLatitude as unknown as number,
        req.query.endLongitude as unknown as number
      );

      res.send({code: 200, offers: offers});
    } else {
      // TODO: explicit the error
      // Forbidden
      res.sendStatus(403);
    }

  } catch(error) {
    // TODO: explicit the error
    res.status(500).send({code: 500, message: error.message});
  }

}
module.exports.search = search;
