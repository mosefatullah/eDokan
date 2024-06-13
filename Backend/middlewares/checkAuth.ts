import jwt, { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";
import userSchema from "../schema/userSchema";

const User = mongoose.model("User", userSchema);

const checkLogin = async (req: any, res: any, next: Function) => {
 const { authorization } = req.headers;
 try {
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as JwtPayload;
  if (
   decoded["app_metadata"] &&
   decoded["app_metadata"]["provider"] === "google"
  ) {
   const user = await User.findOne({ email: { address: decoded["email"] } });
   if (!user) next("Authentication failed or user not found!");
   else {
    user.lastLoggedinAt = new Date();
    user.picture =
     decoded["user_metadata"]["avatar_url"] ||
     decoded["user_metadata"]["picture"];
    await user.save();
    req.user = {
     picture:
      decoded["user_metadata"]["avatar_url"] ||
      decoded["user_metadata"]["picture"],
     email: decoded["email"],
     userId: user._id,
    };
   }
  } else {
   const user = await User.findOne({ _id: decoded["userId"] });
   if (!user) next("Authentication failed or user not found!");
   else {
    user.lastLoggedinAt = new Date();
    await user.save();
    req.user = {
     picture: user.picture || null,
     email: user.email.address,
     userId: user._id,
    };
   }
  }
  next();
 } catch {
  next("Authentication failed!");
 }
};

export default checkLogin;
