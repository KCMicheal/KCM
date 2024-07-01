import { motion } from "framer-motion";
import Link from "next/link";
import { Meteors } from "./meteors";
import { useTheme } from "next-themes";

export default function Layout({ children }) {
    const { theme, setTheme } = useTheme();
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 2600,
                damping: 20,
            }}
        >
        <div className="z-0 bg-white bg-opacity-60 dark:text-white dark:bg-secondary dark:bg-opacity-70 min-h-[95vh]  md:w-[65vw] lg:w-[70vw] xl:w-[75vw] mt-4 md:mt-8 md:ml-8 p-6 md:p-10 rounded-2xl shadow-xl overflow-auto border-2 border-gray-800 dark:border-gray-200">
            <header>
                {/* Header content goes here */}
            </header>
                <main>
                    <Meteors number={50} className="max-md:hidden" />
                    <div className=" flex flex-row justify-between">
                        <div className=" hover:-translate-y-2 active:translate-y-0 transition-all duration-300 ease-in-out ">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" size-10 lg:size-15" viewBox="0 0 24 24">
                                <path fill="#fe4500" fill-opacity="0" d="M5 8.5L12 3L19 8.5V21H15V13L14 12H10L9 13V21H5V8.5Z">
                                    <animate fill="freeze" attributeName="fill-opacity" begin="1.8s" dur="0.3s" values="0;0.6" />
                                </path>
                                <g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke-dasharray="15" stroke-dashoffset="15" d="M4.5 21.5h15">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="15;0" />
                                    </path>
                                    <path stroke-dasharray="15" stroke-dashoffset="15" d="M4.5 21.5V8M19.5 21.5V8">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="15;0" />
                                    </path>
                                    <path stroke-dasharray="24" stroke-dashoffset="24" d="M9.5 21.5V12.5H14.5V21.5">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.8s" values="24;0" />
                                    </path>
                                    <path stroke-dasharray="30" stroke-dashoffset="30" stroke-width="2.8" d="M2 10L12 2L22 10">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.8s" values="30;0" />
                                    </path>
                                </g>
                            </svg>
                        </Link>
                        </div>
                        <div className=" hover:-translate-y-2 active:translate-y-0 transition-all duration-300 ease-in-out ">
                            <div className="text-white font-bold cursor-pointer " onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? (
                            <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" size-10 lg:size-15" viewBox="0 0 512 512">
                                        <defs>
                                            <linearGradient id="meteoconsClearDayFill0" x1="150" x2="234" y1="119.2" y2="264.8" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#fbbf24" />
                                                <stop offset=".5" stop-color="#fbbf24" />
                                                <stop offset="1" stop-color="#f59e0b" />
                                            </linearGradient>
                                            <symbol id="meteoconsClearDayFill1" viewBox="0 0 384 384">
                                                <circle cx="192" cy="192" r="84" fill="url(#meteoconsClearDayFill0)" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6" />
                                                <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7">
                                                    <animateTransform additive="sum" attributeName="transform" dur="4.5s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192" />
                                                </path>
                                            </symbol>
                                        </defs>
                                        <use width="384" height="384" href="#meteoconsClearDayFill1" transform="translate(64 64)" />
                                    </svg>
                            </>): (
                            <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 lg:size-15" viewBox="0 0 512 512">
                                            <defs>
                                                <linearGradient id="meteoconsClearNightFill0" x1="54.3" x2="187.2" y1="29" y2="259.1" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0" stop-color="#86c3db" />
                                                    <stop offset=".5" stop-color="#86c3db" />
                                                    <stop offset="1" stop-color="#5eafcf" />
                                                </linearGradient>
                                                <symbol id="meteoconsClearNightFill1" viewBox="0 0 270 270">
                                                    <path fill="url(#meteoconsClearNightFill0)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2A130.5 130.5 0 0 1 122.5 3A133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z">
                                                        <animateTransform additive="sum" attributeName="transform" dur="4.5s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135" />
                                                    </path>
                                                </symbol>
                                            </defs>
                                            <use width="270" height="270" href="#meteoconsClearNightFill1" transform="translate(121 121)" />
                                        </svg>
                            </>)}</div> 
                        </div>

                    </div>
                              
                    {children}
                </main>
            <footer>
                {/* Footer content goes here */}
            </footer>
        </div>
        </motion.div>
    );
};