import Image from "next/image"

export default function About() {
    return (
        <div className=" z-10 max-h-[85vh] flex flex-col justify-between space-y-5 overflow-auto">
            <div>
                <h1 className="body-heading1">about</h1>
            </div>
            <div className="z-10 flex flex-row flex-wrap justify-center items-center h-full overflow-auto">
                <div className="lg:w-1/2 h-[40vh] lg:h-full overflow-y-auto text-left md:text-center p-2">
                    <h2 className="text-xl font-ubuntu font-medium">Meet <span className="text-3xl font-syne font-bold">KCM</span></h2>
                    <p className="body-text1 md:text-xl ">Hello! I&apos;m Kenechukwu Micheal Egwunwoke aka KCM, a versatile software engineer based in Nigeria. I specialize in developing robust and scalable web applications using C#, ASP.NET Core, React, and other modern technologies. Currently, I&apos;m a Software Engineer and Lead Integrations Engineer at Xend Finance, where I&apos;ve contributed to products like XendBridge and SwitchWallet. With a background in both backend and frontend development, I have a proven track record of solving complex problems, integrating third-party services, and delivering high-quality software to both clients and companies. My journey in tech has been enriched by diverse experiences in fintech, education, and digital marketing. Connect with me on any of my socials or explore my portfolio to see my work. Looking forward to working with you.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 absolute top-[50%] left-[88%] md:hidden animate-bounce" viewBox="0 0 24 24">
                        <path fill="#fe4500" d="M21.49 17.34L15.5 20l-4.92-1.96l4.18-.88l-4.3-9.7c-.11-.25 0-.55.25-.66c.25-.11.55 0 .66.25l2.5 5.65l1.61-.71l4.65.01z" opacity="0.3" />
                        <path fill="currentColor" d="m20.22 10l-4.15.01a.975.975 0 0 0-.45.08l-.59.26l-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45l-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51m1.27 7.34L15.5 20l-4.92-1.96l4.18-.88l-4.3-9.7c-.11-.25 0-.55.25-.66c.25-.11.55 0 .66.25l2.5 5.65l1.61-.71l4.65.01zM2.06 5.56L1 4.5L4.5 1L8 4.5L6.94 5.56L5.32 3.94a10.457 10.457 0 0 0 1.88 8.99L6.13 14A11.974 11.974 0 0 1 3.5 6.5c0-.92.1-1.82.3-2.68z" />
                    </svg>
                </div>
                <div className="z-10 w-full lg:w-1/2 h-full p-4 flex flex-col justify-center items-center ">
                    <div className="bg-primary border-2 border-secondary h-[15rem] w-[15rem] transition-transform lg:h-[20rem] lg:w-[20rem] rounded-full">
                        <Image alt="ProfilePic" src="/assets/brand/profilepic.png" width={1000} height={1000} loading="lazy" className="w-[100%] h-full lg:h-[110%] lg:-mt-8 rounded-full"></Image>
                    </div>
                </div>
                {/* TODO: Modify Timeline*/}
                <div className="border-4 p-4 hidden">

                    <ol class="items-center sm:flex">
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className= "w-3 h-3 text-white dark:text-black" viewBox="0 0 20 20">
                                        <path fill="currentColor" d="M21 17v-6.9L12 15L1 9l11-6l11 6v8zm-9 4l-7-3.8v-5l7 3.8l7-3.8v5z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-xs md:text-lg font-semibold">Enugu State University Of Science & Technology - Geology & Mining</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct, &apos;13 - Aug, &apos;17</time>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-xs md:text-lg font-semibold">Des & Dev - Web Developer (Intern)</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan, &apos;20 - Jul, &apos;20</time>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-xs md:text-lg font-semibold">Freelance Contractor (KCM) - Web Developer/Designer, Brand Manager</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul, &apos;20 - Present</time>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-xs md:text-lg font-semibold">FrontEnd Developer - Viicsoft Technologies</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Apr, &apos;21 - Jul, &apos;21</time>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-xs md:text-lg font-semibold">Software Developer - Genesys TechHub, Tenecee</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul, &apos;21 - Dec, &apos;21</time>
                            </div>
                        </li>
                        <li class="relative mb-6 sm:mb-0">
                            <div class="flex items-center">
                                <div class="z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <svg class="w-2.5 h-2.5 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div class="mt-3 sm:pe-8">
                                <h3 class="text-xs md:text-lg font-semibold">Software Engineer/Lead Integrations Engineer - Xend Finance, Binary Hills</h3>
                                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov, &apos;21 - Present</time>
                            </div>
                        </li>
                    </ol>


                </div>
            </div>
        </div>
    )
}