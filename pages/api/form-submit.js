const axios = require('axios');

export default async function handler(req, res) {
    const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;
    const messageBody = {
        email: req.body.email,
        gRecaptchaToken: req.body.gRecaptchaToken,
    };
    const postData = messageBody;
    const { gRecaptchaToken, email } = postData;

    console.log(
        "gRecaptchaToken,email",
        gRecaptchaToken?.slice(0, 10) + "...",
        email
    );

    const formData = `secret=${secretKey}&response=${req.body.gRecaptchaToken}`;
    try {
        const response = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        if (response && response.data?.success && response.data?.score > 0.5) {
            console.log(
                "Saving data to the database:",
                email,
            );
            console.log("Success: response.data?.score:", response.data?.score);
            res.status(200).send(response.data);
        } else {
            console.log("fail: response.data?.score:", response.data?.score);
        }
    } catch (e) {
        console.log("recaptcha error:", e);
    }
}


