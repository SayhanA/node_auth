import dotenv from "dotenv";
dotenv.config();

const { MailtrapClient } = require("mailtrap");

export const MailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Full Stack web developer testing",
};
