const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {

    const message = {
        from: req.body.email,
        to: process.env.GMAIL_EMAIL_ADDRESS,
        subject: req.body.subject,
        text: req.body.message,
        html: getHtmlContent(req.body.email, req.body.subject, req.body.message),
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
        await new Promise((resolve, reject) => {
            if (req.method === 'POST') {
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        res.status(404).json({
                            error: `Connection refused at ${err.address}`
                        });
                        reject(err);
                    } else {
                        res.status(250).json({
                            success: `Message delivered to ${info.accepted}`
                        });
                        resolve(info);
                    }
                });
            }
        })
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Message sent");
    }

    function getHtmlContent(email, subject, message) {
        const filePath = path.join(process.cwd(), '/public/mailtemplate.html');
        let htmlContent = fs.readFileSync(filePath, 'utf8');
        htmlContent = htmlContent.replace('{{emailAddress}}', email);
        htmlContent = htmlContent.replace('{{subject}}', subject);
        htmlContent = htmlContent.replace('{{message}}', message);
        return htmlContent;
    }
    
}