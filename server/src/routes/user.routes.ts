import express from "express";
import { login } from "../auth/authAction";
import { hashPassword } from "../middlewares/argon.middleware";
import { comparePassword } from "../middlewares/argon.middleware";
import { verifieEmail } from "../middlewares/isUserRegistered.middleware";
import UserActions from "../modules/item/user/UserActions";

const router = express.Router();

router.post("/register", hashPassword, UserActions.add);
router.post("/login", hashPassword, verifieEmail, comparePassword, login);

export default router;
