import { Request, Response } from "express";

export const signUp = async (req: Request, res: Response) => {
  res.send('Sign UP the user');
}

export const signIn = async (req: Request, res: Response) => {
  res.send('Sign IN the user');
}

module.exports.signUp = signUp;
module.exports.signIn = signIn;
