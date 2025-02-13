import type { RequestHandler } from "express";
import userRepository from "../modules/item/user/UserRepository";

export const verifieEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userEmail = await userRepository.readUserByEmail(email);

    if (!userEmail) {
      res.sendStatus(422);
      return;
    }
    req.body.dbpassword = userEmail.password;

    next();
  } catch (err) {
    next(err);
  }
};
