const axios = require('axios');

export default async function handler(req, res) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const messageBody = {
        email: req.body.email,
        gRecaptchaToken: req.body.gRecaptchaToken,
    };

    const { gRecaptchaToken, email } = messageBody;

    console.log(
        "gRecaptchaToken,email",
        gRecaptchaToken?.slice(0, 10) + "...",
        email
    );

    // Use FormData instead of string concatenation for better reliability
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', req.body.gRecaptchaToken);

    const verifyReCaptcha = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(
                    "https://www.google.com/recaptcha/api/siteverify",
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        // Adjust timeout if necessary
                        timeout: 5000, // 5 seconds
                    }
                );

                if (response && response.data?.success && response.data?.score > 0.5) {
                    console.log("Success: response.data?.score:", response.data?.score);
                    resolve(response.data);
                    res.status(200).send(response.data);
                } else {
                    console.log("fail: response.data?.score:", response.data?.score);
                    reject(new Error('Verification failed'));
                }
            } catch (e) {
                console.log("recaptcha error:", e);
                reject(e);
            }
        });
    };

    // Usage example
    verifyReCaptcha()
       .then(data => {
            // Handle successful verification
            console.log('Verification successful:', data);
        })
       .catch(error => {
            // Handle errors
            console.error('Error during verification:', error);
        });
}


