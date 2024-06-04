import nodemailer from 'nodemailer';

const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const hotmailTransporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.HOTMAIL_USER,
    pass: process.env.HOTMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, company, quantity, message, useHotmail } = req.body;

    const mailOptions = {
      from: useHotmail ? process.env.HOTMAIL_USER : process.env.GMAIL_USER,
      to: 'supremo110403@gmail.com',
      subject: 'Nuevo Pedido al Mayoreo',
      text: `
        Nombre: ${name}
        Correo Electrónico: ${email}
        Empresa: ${company}
        Cantidad: ${quantity}
        Mensaje: ${message}
      `,
    };

    const transporter = useHotmail ? hotmailTransporter : gmailTransporter;

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ error: 'Error al enviar el correo', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
