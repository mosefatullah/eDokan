import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userSchema from "../schema/userSchema";
import checkAuth from "../middlewares/checkAuth";

const router = express.Router();

/* User model */
const User = mongoose.model("User", userSchema);

/* GET - auto login: verify token */
router.get("/login/verify", checkAuth, async (req, res) => {
 try {
  res.status(200).json({
   message: "Successfully logged in!",
  });
 } catch (err: any) {
  res.status(500).json({
   message: "Some error occurred!",
  });
  console.error(err.message);
 }
});

/* POST - login: username, password */
router.post("/login", async (req, res) => {
 try {
  let reqObj = {};
  if (req.body.username) {
   reqObj = {
    $or: [
     { username: req.body.username },
     { email: { address: req.body.username } },
    ],
   };
  }
  const user = await User.findOne(reqObj);
  if (user) {
   if (bcrypt.compareSync(req.body.password, user.password)) {
    const token = jwt.sign(
     {
      userId: user._id,
      username: user.username,
     },
     process.env.JWT_SECRET || "",
     {
      expiresIn: "14d",
     }
    );
    res.status(200).json({
     message: "Successfully logged in!",
     accessToken: token,
    });
   } else {
    res.status(401).json({
     message: "Authentication failed!",
    });
   }
  } else {
   res.status(401).json({
    message: "Authentication failed!",
   });
  }
 } catch (err: any) {
  res.status(500).json({
   message: "Some error occurred!",
  });
  console.error(err.message);
 }
});

/* POST - singup: username, email, password */
router.post("/signup", async (req, res) => {
 if (req.body.username && req.body.password && req.body.email) {
  const newUser = new User({
   username: req.body.username,
   email: { address: req.body.email },
   password: bcrypt.hashSync(req.body.password, 10),
  });
  try {
   const data = await newUser.save();
   res.status(201).json({
    message: "Successfully signed up!",
    user: {
     username: data.username,
     email: data.email.address,
    },
   });
  } catch (err: any) {
   res.status(500).json({
    error: "Some error occurred!",
   });
   console.error(err.message);
  }
 } else {
  res.status(400).json({
   error: "Please fill up all required fields!",
  });
 }
});

export default router;
