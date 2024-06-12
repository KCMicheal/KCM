import useContactForm from '../hooks/useContactForm';
import { useState } from 'react';

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

const Contact = () => {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({ isSuccessful: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            <button type='submit' value='Submit' className='bg-primary p-4 w-[60%] rounded-xl text-white text-base
             font-ubuntu font-bold hover:bg-opacity-70  transition-all duration-300'>Send 👋</button>
          </form>
        </div>
        <div className="pl-16 md:p-0 w-full md:w-1/2 self-center p-2">
          <div className='grid grid-cols-2 gap-8 lg:gap-16'>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="3.2rem" height="3.2rem" viewBox="0 0 48 48">
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" />
                    <path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
