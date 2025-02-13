import express from "express";
import { hashPassword } from "../middlewares/argon.middleware";
import UserActions from "../modules/item/UserActions";

const router = express.Router();

router.post("/register", hashPassword, UserActions.add);

export default router;
