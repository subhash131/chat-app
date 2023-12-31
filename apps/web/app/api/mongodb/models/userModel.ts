/* eslint-disable turbo/no-undeclared-env-vars */
import mongoose, { models } from "mongoose";

const userModel = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    profilePic: {
      type: String,
      default: process.env.DEFAULT_PROFILE_IMAGE,
    },
  },
  { timestamps: true }
);

export const User: typeof models.User =
  models.User || mongoose.model("User", userModel);
