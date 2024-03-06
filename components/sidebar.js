import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ currentPage }) {
    const [isOpen, setIsOpen] = useState(false);

    const getButtonBackgroundClass = (page) => {
        return currentPage === page ? 'bg-primary text-tertiary font-ubuntu font-medium' : 'bg-tertiary text-secondary font-ubuntu font-normal flex-grow';
    };

    return (
        <div className={`fixed top-0 right-0 lg:w-64 h-full bg-secondary overflow-hidden transition-transform md:w-52
   duration-200 ease-in-out ${isOpen ? '' : 'translate-x-full'} md:translate-x-0 flex p-9 justify-center items-center`}>
            <button type='button' onClick={() => setIsOpen(!isOpen)} className="md:hidden p-4">
                {isOpen ? 'Close Menu' : 'Open Menu'}
            </button>
            <div className="border border-red-50 flex-col text-center">
                <Link href="/about">
                    <button className={`${getButtonBackgroundClass('/about')} p-2 rounded-md px-9 m-2`}>
                        about
                    </button>
                </Link>
                <Link href="/blog">
                    <button className={`${getButtonBackgroundClass('/blog')} p-2 rounded-md px-9 m-2`}>
                        blog
                    </button>
                </Link>
                <Link href="/portfolio">
                    <button className={`${getButtonBackgroundClass('/portfolio')} p-2 rounded-md px-9 m-2`}>
                        portfolio
                    </button>
                </Link>
                <Link href="/homer">
                    <button className={`${getButtonBackgroundClass('/homer')} p-2 rounded-md px-9 m-2`}>
                        contact
                    </button>
                </Link>
            </div>
        </div>
    );
}