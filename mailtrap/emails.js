import { verificationEmailTemplage } from "./emailTemplate.js";
import { MailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await MailtrapClient.send({
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

export const sendWelcomeEmail = async (email, name)=> {
  const recipient = [{ email }];

  try {
    const response = await MailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "ef721b85-dcc4-4a40-9243-287c1521e59b",
      template_variables: {
        "name": name,
      } 
    })
  } catch (error) {
    console.log("Error to sending verification email:", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};
