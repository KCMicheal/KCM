const { NextResponse } = require('next/server');
const axios = require('axios');

async function POST(request, response) {
    const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

    const postData = await request.json();
    const { gRecaptchaToken, email } = postData;

    console.log(
        "gRecaptchaToken,email",
        gRecaptchaToken?.slice(0, 10) + "...",
        email
    );

    let res;
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
    try {
        response = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
    } catch (e) {
        console.log("recaptcha error:", e);
    }

    if (response && response.data?.success && response.data?.score > 0.5) {
        // Save data to the database from here
        console.log(
            "Saving data to the database:",
            email,
        );
        console.log("res.data?.score:", response.data?.score);

        return NextResponse.json({
            success: true,
            score: response.data?.score,
        });
    } else {
        console.log("fail: res.data?.score:", response.data?.score);
        return NextResponse.json({ success: false, score: response.data?.score });
    }
}

module.exports = { POST };
