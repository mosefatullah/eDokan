import express from "express";

/* Importing Handlers */
import accountHandler from "./accountHandler";

const router = express.Router();

/* Application Routes */
router.use("/account", accountHandler);

export default router;
