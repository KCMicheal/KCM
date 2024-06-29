import { motion } from "framer-motion";
import Link from "next/link";
import { Meteors } from "./meteors";

export default function Layout({ children }) {
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
        <div className="z-0 bg-white bg-opacity-60 dark:text-white dark:bg-secondary dark:bg-opacity-70 min-h-[90vh] max-h-[90vh] md:w-[65vw] lg:w-[70vw] xl:w-[75vw] mt-9 md:ml-8 p-6 md:p-10 rounded-2xl shadow-xl overflow-auto border-2 border-gray-800 dark:border-gray-200">
            <header>
                {/* Header content goes here */}
            </header>
                <main>
                    <Meteors number={30} className="max-md:hidden" />
                    <div className=" fixed -mt-6 hover:-translate-y-2 active:translate-y-0 transition-all duration-300 ease-in-out ">
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
                    {children}
                </main>
            <footer>
                {/* Footer content goes here */}
            </footer>
        </div>
        </motion.div>
    );
};