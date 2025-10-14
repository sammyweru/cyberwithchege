import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { getUncachableResendClient } from "./resend";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validationResult = contactFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Validation failed", 
          errors: validationResult.error.errors 
        });
      }

      const { name, email, message } = validationResult.data;

      // Send email using Resend
      const { client, fromEmail } = await getUncachableResendClient();
      
      const { data, error } = await client.emails.send({
        from: fromEmail,
        to: 'samuelchegewaweru@gmail.com', // Portfolio owner's email
        replyTo: email,
        subject: `Portfolio Contact: Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ message: "Failed to send email" });
      }

      return res.json({ 
        message: "Message sent successfully!",
        success: true 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
