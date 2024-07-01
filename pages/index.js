import { FlipWords } from "../components/flip-words";

export default function Home() {
  const titles = ["Software Engineer", "Product Manager", "Ui/Ux Designer", "Web Developer/ Designer", "Artiste", "Music Producer", "Chocolate Cake lover"];

  return (
    <>
      <main>
        <div className="flex flex-col justify-around h-[80vh] w-full">
          <div className="flex-wrap">
            <h1 className="font-syne text-center sm:text-left text-4xl lg:text-6xl md:text-5xl font-medium ">Hi there👋,</h1>
            <h1 className="font-syne text-center sm:text-left text-5xl lg:text-6xl md:text-5xl font-bold drop-shadow-xl ">{`I'm KCMicheal`}</h1>
            <h1 className='font-syne text-center sm:text-left  text-2xl md:text-3xl lg:text-4xl leading-tight font-medium '>
            <FlipWords words={titles} duration={1500} /> 
            </h1>
          </div>
          <div className="inline-flex justify-between lg:w-1/2 md:w-full w-full lg:h-20 h-16 gap-4">
            <div className="h-full w-20 ">
              <a href="https://github.com/KCMicheal" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className=" size-15 md:size-20">
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" />
                    <path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z" />
                  </g>
                </svg>
              </a>
            </div>
            <div className=" h-full w-20">
              <a href="https://www.gitlab.com/kcmicheal" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-15 md:size-20">
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
            <div className=" h-full w-20">
              <a href="https://www.linkedin.com/in/kenechukwu-egwunwoke" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className=" size-15 md:size-20">
                  <g fill="none">
                    <rect width="256" height="256" fill="#fff" rx="60" />
                    <rect width="256" height="256" fill="#0a66c2" rx="60" />
                    <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
                  </g>
                </svg>
              </a>
            </div>
            <div className=" h-full w-20">
              <a href="https://www.linktr.ee/kcmicheal" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" size-15 md:size-20 hover:">
                  <path fill="green" d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
