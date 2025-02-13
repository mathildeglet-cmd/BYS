import type { RequestHandler } from "express";
import userRepository from "../modules/item/UserRepository";

export const isEmailAvailable: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUsers = await userRepository.readEmails(email);

    if (existingUsers) {
      res.status(422).json({
        message: "Utilisateur déjà existant",
      });
      return;
    }
    next();
  } catch (err) {
    next(err);
  }
};
