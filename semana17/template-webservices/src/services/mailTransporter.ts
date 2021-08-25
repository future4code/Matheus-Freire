import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()
const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
 port: 587,
 auth: {
 user: process.env.NODEMAILER_USER,
 pass: process.env.NODEMAILER_PASSWORD
 }
})
export default transporter