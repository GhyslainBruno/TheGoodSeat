import { Request, Response } from "express";
import User from "../models/User";
import Authentication from "../models/Authentication";

export const signUp = async (req: Request, res: Response) => {

  try {

    const user = new User(
      req.body.email,
      req.body.firstName,
      req.body.lastName,
      req.body.birthDate,
      req.body.phoneNumber,
      req.body.isPhoneNumberVerified,
      req.body.country,
    );

    await Authentication.signUp(user);

    if (Authentication.doesUserExist) {
      res.status(200).send({code: 200, message: 'User successfully signed UP', user: user});
    } else {
      res.status(500).send();
    }
  } catch(error) {
    res.send({code: 500, message: error.message});
  }
}

export const signIn = async (req: Request, res: Response) => {
  try {

    const user = await Authentication.signIn(req.body.email, req.body.phoneNumber);

    if (Authentication.isUserSignedIn) {
      res.status(200).send({code: 200, message: 'User successfully signed IN', user: user});
    } else {
      res.status(401).send();
    }
  } catch(error) {
    res.status(400).send({code: 500, message: error.message});
  }
}

module.exports.signUp = signUp;
module.exports.signIn = signIn;
