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
                stiffness: 260,
                damping: 20,
            }}
        >
        <div className="container lg:w-2/3 lg:p-12 md:w-2/3 md:m-9 md:p-10 sm:p-6 sm:mt-10 border border-green-600">
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