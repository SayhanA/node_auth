import { verificationEmailTemplage } from "./emailTemplate.js";
import { MailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const recipient = await MailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: verificationEmailTemplage.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email send successfully", recipient);
  } catch (error) {
    console.log("Error to sending verification email:", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};
