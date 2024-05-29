// components/Layout.js
import { motion } from "framer-motion"; // Import framer-motion

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
        <div className="bg-white dark:text-white dark:bg-secondary min-h-[90vh] md:w-[65vw] lg:w-[70vw] xl:w-[75vw] mt-9 md:ml-9 md:p-10 p-6 rounded-2xl shadow-xl">
            <header>
                {/* Header content goes here */}
            </header>
            <main>{children}</main>
            <footer>
                {/* Footer content goes here */}
            </footer>
        </div>
        </motion.div>
    );
};