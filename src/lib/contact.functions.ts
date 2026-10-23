
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional(),
});

export const sendContactMessage = createServerFn({
  method: "POST",
})
  .validator(ContactSchema)
  .handler(async ({ data }) => {
    if (data.website) {
      return { success: true };
    }



const apiKey = process.env["BREVO_API_KEY"];
const recipient = process.env["RUE_CONTACT_EMAIL"];
const sender = process.env["BREVO_SENDER_EMAIL"];

    if (!apiKey || !recipient || !sender) {
      throw new Error("Email service is not configured.");
    }

    const emailBody = [
      "New Enquiry Received | RueCoaching", 
      `First name: ${data.firstName}`,
      `Last name: ${data.lastName}`,
      `Email: ${data.email}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "RueCoaching",
            email: sender,
          },
          to: [
            {
              email: recipient,
            },
          ],
          replyTo: {
            email: data.email,
            name: `${data.firstName} ${data.lastName}`,
          },
          subject: `RueCoaching Enquiry | ${data.firstName} ${data.lastName}`,
          textContent: emailBody,
        }),
      }
    );

    if (!response.ok) {
      console.error(
        "Brevo email error:",
        response.status,
        await response.text()
      );

      throw new Error("Unable to send your message.");
    }

    return { success: true };
  });
