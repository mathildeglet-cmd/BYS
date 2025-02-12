import express from "express";
import programActions from "../modules/item/program/programActions";

const router = express.Router();

router.post("/program/add", programActions.add);
router.get("/programs");
router.get("/program/:id");

export default router;
