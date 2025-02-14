import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import UserRepository from "../modules/item/user/UserRepository";

export const login: RequestHandler = async (req, res) => {
  const token = jwt.sign(req.body, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });

  res
    .cookie("auth_token", token, {
      secure: false,
      httpOnly: true,
      maxAge: 360000,
    })
    .status(200);
};

export const logout: RequestHandler = (req, res) => {
  res.clearCookie("auth_token").json({
    message: "Déconnexion",
  });
};

export const checkAuth: RequestHandler = async (req, res) => {
  const token = req.cookies?.auth_token;

  if (!token) {
    res.status(403);
  }
  return;
};
