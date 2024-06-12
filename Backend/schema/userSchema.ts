import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 username: {
  type: String,
  required: true,
  unique: true,
  validate: [
   {
    validator: function (v: any) {
     return /^[a-zA-Z0-9_-]+$/.test(v);
    },
    message: "Username should only contain alphanumeric, underscore and dash!",
   },
   {
    validator: function (v: any) {
     return v.length > 4 && v.length < 30;
    },
    message: "Username must be longer than 4 and shorter than 30 characters!",
   },
  ],
 },
 email: {
  type: Object,
  required: true,
  address: {
   type: String,
   required: true,
   unique: true,
   validate: [
    {
     validator: function (v: any) {
      return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
     },
     message: "Email is not valid!",
    },
    {
     validator: function (v: any) {
      return v.length < 50;
     },
     message: "Email address must be shorter than 50 characters!",
    },
   ],
  },
  verified: {
   type: Boolean,
   default: false,
  },
 },
 password: {
  type: String,
  required: true,
 },
 createdAt: {
  type: Date,
  default: Date.now,
 },
 lastLoggedinAt: {
  type: Date,
  default: Date.now,
 },
});

export default userSchema;
