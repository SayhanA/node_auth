import express from "express";
import {
  login,
  signIn,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signIn);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

router.post("/forget-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.post("/check-verify", verifyEmail);

export default router;
