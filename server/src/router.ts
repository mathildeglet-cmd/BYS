import express from "express";

const router = express.Router();

import adminProgram from "./routes/adminProgram.routes";
router.use("/admin/", adminProgram);

import programs from "./routes/programs.routes";
router.use("/programs", programs);

import userRoute from "./routes/user.routes";

router.use("/user", userRoute);

export default router;
