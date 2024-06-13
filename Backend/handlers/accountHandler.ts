import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userSchema from "../schema/userSchema";
import checkAuth from "../middlewares/checkAuth";
import supabase from "../lib/supabase.config";

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

/* POST - login: google */
router.post("/login/google", async (req, res) => {
 try {
  const { data, error } = await supabase.auth.signInWithOAuth({
   provider: "google",
   options: {
    redirectTo: process.env.FRONTEND_APP,
    queryParams: {
     access_type: "offline",
     prompt: "consent",
    },
   },
  });

  if (error) {
   res.status(500).json({
    message: "Some error occurred!",
   });
   console.error(error.message);
  } else {
   res.status(200).json({ url: data.url });
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

/* POST - logout */
router.post("/logout", checkAuth, async (req, res) => {
 try {
  res.status(200).json({
   message: "Successfully logged out!",
  });
 } catch (err: any) {
  res.status(500).json({
   message: "Some error occurred!",
  });
  console.error(err.message);
 }
});

/* POST - reset password */
router.post("/login/reset-password", async (req, res) => {
 try {
  const { data, error } = await supabase.auth.resetPasswordForEmail(
   req.body.email,
   {
    redirectTo: process.env.FRONTEND_PASSWORD_RESET,
   }
  );

  if (error) {
   res.status(500).json({
    message: error.message,
   });
   console.error(error.message);
  } else {
   res.status(200).json({
    message: "Password reset link sent!",
    data: data,
   });
  }
 } catch (err: any) {
  res.status(500).json({
   message: "Some error occurred!",
  });
  console.error(err.message);
 }
});

export default router;
