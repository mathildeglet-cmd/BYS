import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import adminProgram from "./routes/adminProgram.routes";
router.use("/admin/", adminProgram);

import programs from "./routes/programs.routes";
router.use("/programs", programs);
export default router;
