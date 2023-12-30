/* eslint-disable turbo/no-undeclared-env-vars */
import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    name: { type: String, trim: true, require: true },
    email: { type: String, trim: true, require: true },
    password: { type: String, trim: true, require: true },
    profilePic: {
      type: String,
      default: process.env.DEFAULT_PROFILE_IMAGE,
      require: true,
    },
  },
  { timestamps: true }
);

export const Chat = mongoose.model("User", userModel);
