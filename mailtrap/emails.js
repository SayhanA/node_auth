import {
  passwordResetRequestTemplage,
  passwordResetSuccessTemplage,
  verificationEmailTemplage,
} from "./emailTemplate.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: verificationEmailTemplage.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email send successfully", response);
  } catch (error) {
    console.log("Error to sending verification email:", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "ef721b85-dcc4-4a40-9243-287c1521e59b",
      template_variables: {
        name: name,
      },
    });

    console.log("Welcome email send succcessfully", response);
  } catch (error) {
    console.log("Error to sending verification email:", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, url) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset Password",
      html: passwordResetRequestTemplage.replace("{reset_link}", url),
      category: "Password reset",
    });
    console.log('Send password reset email:', response);
  } catch (error) {
    console.log("Error to sending password reset email:", error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset password successfull",
      html: passwordResetSuccessTemplage,
      category: "Password Reset",
    });
    console.log("Password reset success email send successfully", response);
  } catch (error) {
    console.log("Error to sending password success email:", error);
    throw new Error(`Error sending password success email: ${error}`);
  }
};
