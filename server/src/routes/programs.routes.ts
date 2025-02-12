import express from "express";
import programActions from "../modules/item/program/programActions";

const router = express.Router();
router.get("/", programActions.browse);
// router.get("/program/:id");

export default router;
