import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// API endpoint to handle form submission
app.post('/api/send-message', async (req: express.Request, res: express.Response) => {
  const { email, message } = req.body;

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New Message from Contact Form',
      text: `Email: ${email}\nMessage: ${message}`,
    });

    // Send data to Notion
    const databaseId = process.env.NOTION_DATABASE_ID;
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Title: {
          title: [
            {
              text: {
                content: `New Message from ${email}`,
              },
            },
          ],
        },
      },
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            rich_text: [
              {
                type: 'text',
                text: {
                  content: message,
                },
              },
            ],
          },
        },
      ],
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});