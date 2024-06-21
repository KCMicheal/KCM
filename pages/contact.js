"use client";

import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import useContactForm from '../hooks/useContactForm';
import React, { useState } from 'react';
import GoogleCaptchaWrapper from '../components/google-captcha-wrapper';



const openCalendlyPopup = () => {
  window.open('https://calendly.com/kcmicheal', 'popupWindow', 'width=600,height=600,scrollbars=yes');
}
const sendEmail = async (email, subject, message) => {
  return fetch('/api/send-mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      subject: subject,
      message: message,
    }),
  });
};

export default function Contact() {
  return (
    <GoogleCaptchaWrapper>
      <ContactInside />
    </GoogleCaptchaWrapper>
  )
}

function ContactInside() {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({ isSuccessful: false, message: '' });
  const [notification, setNotification] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      setNotification(
        "Execute recaptcha not available yet likely meaning key not recaptcha key not set"
      );
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      submitEnquiryForm(gReCaptchaToken);
    });

    const submitEnquiryForm = (gReCaptchaToken) => {
      async function goAsync() {
        const response = await axios({
          method: "post",
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'ContentType': 'application/json',
          },
          url: "/api/contactformsubmit",
          data: {
            gRecaptchaToken: gReCaptchaToken,
            email: values.email,
          },  
        });

        if (response?.data?.success === true) {
          setNotification(`Success with score: ${response?.data?.score}`);
        } else {
          setNotification(`Failure with score: ${response?.data?.score}`);
        }
      }
      goAsync().then(() => { }); // suppress async warning
    };
    
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage(
          { isSuccessful: true, message: 'Thank you for your message.' });
      }
    } catch (e) {
      console.error(e); // Log the error to the console
      setResponseMessage({
        isSuccessful: false,
        message: 'Oops something went wrong. Please try again.',
      });
    }
  };

  return (
    <div>
      <div className="body-heading1">contact</div>
      <div className="flex flex-col md:flex-row justify-between h-[70vh] gap-4">
        <div className=" w-full md:w-1/2 self-center ">
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-2/3 md:w-full lg:w-[22vw]'>

            <input
              required
              id='email'
              value={values.email}
              onChange={handleChange}
              type='email'
              placeholder='email address'
              className=' p-3 md:p-4 bg-secondary text-white rounded-2xl dark:bg-white dark:text-secondary outline-4 outline-primary'
            />

            <input
              required
              id='subject'
              value={values.subject}
              onChange={handleChange}
              type='text'
              placeholder='subject'
              className=' p-3 md:p-4 bg-secondary text-white rounded-2xl dark:bg-white dark:text-secondary outline-4 outline-primary'
            />

            <textarea
              required
              value={values.message}
              onChange={handleChange}
              id='message'
              rows={3}
              placeholder='message'
              className=' p-3 md:p-4 bg-secondary text-white rounded-2xl dark:bg-white dark:text-secondary outline-4 outline-primary'
            />

            {notification && <p className="mt-3 text-info">{notification}</p>}
            <button type='submit' value='Submit' className='bg-primary p-4 w-[60%] rounded-xl text-white text-base
             font-ubuntu font-bold hover:bg-opacity-70  transition-all duration-300'>Send 👋</button>
          </form>
        </div>
        <div className="w-full md:w-1/2 self-center p-2">
          <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16'>
            <div className='flex flex-col justify-center items-center bg-white p-2 rounded-xl max-w-20 shadow-lg hover:scale-125 transition-all cursor-pointer hover:bg-opacity-70'>
              <a href="https://www.linkedin.com/in/john-doe-000000000/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.2rem" height="3.2rem" viewBox="0 0 48 48">
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" />
                    <path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className='flex flex-col justify-center items-center bg-white p-2 rounded-xl max-w-20 shadow-lg hover:scale-125 transition-all cursor-pointer hover:bg-opacity-70'>
              <a href="https://www.linkedin.com/in/john-doe-000000000/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
                  <g fill="none">
                    <rect width="256" height="256" fill="#242938" rx="60" />
                    <path fill="#e24329" d="m127.999 220.001l37.562-113.192h-75.12L128 219.997z" />
                    <path fill="#fc6d26" d="M127.999 220.001L90.441 106.809h-52.64l90.198 113.188z" />
                    <path fill="#fca326" d="m37.8 106.806l-11.417 34.4c-1.043 3.136.094 6.574 2.822 8.513L128 220.001L37.8 106.809z" />
                    <path fill="#e24329" d="M37.8 106.805h52.641L67.817 38.63c-1.164-3.507-6.235-3.507-7.397 0L37.8 106.808z" />
                    <path fill="#fc6d26" d="m128 220.001l37.562-113.192h52.643L128 219.997z" />
                    <path fill="#fca326" d="m218.203 106.806l11.416 34.4c1.041 3.136-.1 6.574-2.824 8.513L128 220.001l90.203-113.192z" />
                    <path fill="#e24329" d="M218.202 106.805h-52.64l22.622-68.175c1.165-3.506 6.235-3.506 7.397 0l22.624 68.178z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className='flex flex-col justify-center items-center bg-white p-2 rounded-xl max-w-20 shadow-lg hover:scale-125 transition-all cursor-pointer hover:bg-opacity-70'>
              <a href="https://www.linkedin.com/in/john-doe-000000000/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
                  <g fill="none">
                    <rect width="256" height="256" fill="#fff" rx="60" />
                    <rect width="256" height="256" fill="#0a66c2" rx="60" />
                    <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
                  </g>
                </svg>
              </a>
            </div>
            <div className='flex flex-col justify-center items-center bg-white p-2 rounded-xl max-w-20 shadow-lg hover:scale-125 transition-all cursor-pointer hover:bg-opacity-70'>
              <a href="https://www.linkedin.com/in/john-doe-000000000/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="48" viewBox="0 0 448 512">
                  <path fill="black" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z" />
                </svg>
              </a>
            </div>
            <div className='flex flex-col justify-center items-center bg-white p-2 rounded-xl max-w-20 shadow-lg hover:scale-125 transition-all cursor-pointer hover:bg-opacity-70'>
              <a href="https://www.linkedin.com/in/john-doe-000000000/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                  <path fill="black" d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z" />
                </svg>
              </a>
            </div>
            <div className='flex flex-col justify-center items-center bg-white p-2 rounded-xl max-w-20 shadow-lg hover:scale-125 transition-all cursor-pointer hover:bg-opacity-70'>
              <a href="javascript: void(0)" target="_blank" rel="noreferrer" onClick={openCalendlyPopup}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                  <path fill="black" d="M19.655 14.262q.421.001.828.064c0 .005-.005.01-.005.014a6 6 0 0 1-.381.786l-1.219 2.106a6.24 6.24 0 0 1-5.411 3.127h-2.432a6.25 6.25 0 0 1-5.412-3.127l-1.218-2.106a6.25 6.25 0 0 1 0-6.252l1.218-2.106a6.24 6.24 0 0 1 5.412-3.127h2.432a6.25 6.25 0 0 1 5.411 3.127l1.219 2.106c.147.252.271.519.381.786c0 .004.005.009.005.014a5.5 5.5 0 0 1-.828.064c-1.816 0-2.501-.607-3.291-1.306c-.764-.676-1.711-1.517-3.44-1.517h-1.029c-1.251 0-2.387.455-3.2 1.278c-.796.805-1.233 1.904-1.233 3.099v1.411c0 1.196.437 2.295 1.233 3.099c.813.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676-.841 3.439-1.517c.791-.703 1.471-1.306 3.287-1.301m.005-3.237q.6 0 1.179-.11q-.003-.007-.002-.014a6.3 6.3 0 0 0-.349-1.218a4.6 4.6 0 0 0 1.986-.819c0-.004-.005-.013-.005-.018a10.6 10.6 0 0 0-1.489-3.03a10.9 10.9 0 0 0-2.331-2.395a10.64 10.64 0 0 0-6.428-2.138c-1.448 0-2.855.28-4.175.841c-1.273.543-2.423 1.315-3.407 2.299S2.878 6.552 2.341 7.83a10.7 10.7 0 0 0-.842 4.175c0 1.448.281 2.855.842 4.174c.542 1.274 1.314 2.423 2.298 3.407s2.129 1.761 3.407 2.299c1.324.556 2.727.841 4.175.841c2.34 0 4.561-.74 6.428-2.137a10.8 10.8 0 0 0 2.331-2.396a10.8 10.8 0 0 0 1.489-3.03c0-.004.005-.014.005-.018a4.6 4.6 0 0 0-1.986-.819c.161-.395.276-.804.349-1.218c.005-.009.005-.014.005-.023a5.85 5.85 0 0 1 2.404 1.035c.685.505.552 1.075.446 1.416C22.184 20.437 17.619 24 12.221 24c-6.625 0-12-5.375-12-12s5.37-12 12-12c5.398 0 9.963 3.563 11.471 8.464c.106.341.239.915-.446 1.421a5.8 5.8 0 0 1-2.404 1.034c.128.716.128 1.45 0 2.166a6.3 6.3 0 0 0-1.182-.11c-4.184 0-3.968 2.823-6.736 2.823h-1.029c-1.899 0-3.15-1.357-3.15-3.095v-1.411c0-1.738 1.251-3.094 3.15-3.094h1.034c2.768 0 2.552 2.823 6.731 2.827" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
