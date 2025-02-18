import nodemailer, { SendMailOptions } from "nodemailer";
import { isEmailValid } from "./helper.ts";

export interface MailOptions {
    to: string | string[];
    subject: string;
    html: string;
    filename?: string;
    path?: string;
}

export async function sendMail(to: string | string[], subject: string, html: string, filename?: string, path?: string): Promise<void> {
    const isValid = Array.isArray(to) ? to.every(email => isEmailValid(email)) : isEmailValid(to);

    if (!isValid) {
        throw new Error("Invalid email address");
    }

    if (!subject || !html) {
        throw new Error("Subject and HTML content are required");
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587", 10),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions: SendMailOptions = {
            from: `<${process.env.SMTP_USER}>`,
            to: Array.isArray(to) ? to.join(', ') : to,
            subject,
            html
        };

        if (filename && path) {
            if (!filename || !path) {
                throw new Error("Filename and path must be provided for attachments.");
            }
            mailOptions.attachments = [{ filename, path }];
        }

        const info = await transporter.sendMail(mailOptions);

        console.log(`Message sent: ${info.messageId} to ${to}`);
    } catch (error: unknown) {
        console.error("Error sending mail:", error);
        throw new Error(`Failed to send email to ${to}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
