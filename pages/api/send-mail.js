const nodemailer = require("nodemailer");

export default function handler(req, res) {

    const message = {
        from: req.body.email,
        to: process.env.GMAIL_EMAIL_ADDRESS,
        subject: req.body.subject,
        text: req.body.message,
        html: `<p>${req.body.message} from ${req.body.email} with subject: ${req.body.subject}</p>`,
    };

    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        // port: 587,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: process.env.GMAIL_EMAIL_ADDRESS,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        if (req.method === 'POST') {
            transporter.sendMail(message, (err, info) => {

                if (err) {
                    res.status(404).json({
                        error: `Connection refused at ${err.address}`
                    });
                } else {
                    res.status(250).json({
                        success: `Message delivered to ${info.accepted}`
                    });
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Message sent");
    }
    
}