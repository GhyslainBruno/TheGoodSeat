import { Request, Response } from "express";
import User from "../models/User";
import Authentication from "../models/Authentication";

export const signUp = async (req: Request, res: Response) => {

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

  try {
    if (Authentication.doesUserExist) {
      res.status(200).send({code: 200, message: 'User successfully signed up', user: user});
    } else {
      res.status(500).send();
    }
  } catch(error) {
    res.send({code: 500, message: error.message});
  }
}

export const signIn = async (req: Request, res: Response) => {
  res.send('BAR Sign IN the user');
}

module.exports.signUp = signUp;
module.exports.signIn = signIn;
