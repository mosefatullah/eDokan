import dotenv from "dotenv";
dotenv.config();

/*
 * Name: eDokan
 * Description: eDokan revolutionizes the retail experience, seamlessly integrating physical stalls into the online realm, elevating productivity and skyrocketing sales.
 */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

/* Importing Handlers */
import routesHandler from "./handlers/routesHandler";

/* Express App Initializaion */
const app = express();

/* Express Middlewares */
app.use(express.json());
app.use(
 cors({
  origin: process.env.FRONTEND_APP || "*",
  methods: "GET,PUT,POST,DELETE",
 })
);

/* MongoDB Connection */
mongoose
 .connect(process.env.MONGODB_URI || "")
 .then(() => console.log("Connected to MongoDB"))
 .catch((err) => console.log(err));

/* Application Route */
app.use("/api/v1/", routesHandler);

/* Error Handling */
app.use((err: any, req: any, res: any, next: Function) => {
 if (req.headersSent) {
  return next(err);
 }
 res.status(500).json({
  error: err || "Some error occurred!",
 });
});

/* Server Initialization */
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
