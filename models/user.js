import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    ResetPasswordExpiredAt: Date,
    verificationToken: String,
    verificationTokenExpiredAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
