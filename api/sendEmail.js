import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, date, time, salon, city } = JSON.parse(req.body);

  // Yahoo SMTP
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: "ancutaciocirtau@yahoo.com",
      pass: process.env.YAHOO_APP_PASSWORD, // parola generată
    },
  });

  try {
    await transporter.sendMail({
      from: "ancutaciocirtau@yahoo.com",
      to: "ancutaciocirtau@yahoo.com",
      subject: `Rezervare nouă la ${salon}`,
      text: `
Noua rezervare:

Salon: ${salon}
Oraș: ${city}
Data: ${date}
Ora: ${time}
Email client: ${email}
      `,
    });

    return res.status(200).json({ message: "Email trimis!" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
