import express from "express";

/* Importing Handlers */
import accountHandler from "./accountHandler";

const router = express.Router();

/* All Routes */
router.use("/account", accountHandler);

export default router;
