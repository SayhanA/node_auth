import dotenv from "dotenv";
dotenv.config();

import { MailtrapClient } from "mailtrap";

export const mailTrapClient = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN });

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Full Stack web developer testing",
};

