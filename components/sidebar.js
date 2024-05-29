import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ currentPage }) {
    const [isOpen, setIsOpen] = useState(false);

    const getButtonBackgroundClass = (page) => {
        return currentPage === page ? 'bg-primary text-tertiary font-ubuntu font-medium shadow-lg hover:bg-secondary' : 'bg-tertiary text-secondary font-ubuntu font-normal hover:bg-primary hover:font-medium hover:text-white';
    };

    return (
        <div className={`fixed top-0 right-0 lg:w-64 h-full md:w-52 bg-secondary overflow-hidden transition-transform 
   duration-200 ease-in-out ${isOpen ? 'block -m-11' : 'translate-x-full'} md:translate-x-0 flex p-9 pt-20 pb-20 justify-center`}>
            <button type='button' onClick={() => setIsOpen(!isOpen)} className="md:hidden w-20 p-4">
                {isOpen ? 'Close Menu' : 'Open Menu'}
            </button>
            <div className='border-4 border-t-white border-r-primary border-b-primary overflow-visible flex z-0'>
                <div className='z-10 p-2 h-[60vh] self-end -ml-4 -mb-2 bg-secondary'></div>
                <div className="text-center self-center p-2 z-20">
                    <Link href="/about">
                        <button className={`${getButtonBackgroundClass('/about')} p-3 rounded-md mb-2 mt-2 px-9 w-full`}>
                            about
                        </button>
                    </Link>
                    <Link href="/blog">
                        <button className={`${getButtonBackgroundClass('/blog')} p-3 rounded-md mb-2 px-9 w-full`}>
                            blog
                        </button>
                    </Link>
                    <Link href="/portfolio">
                        <button className={`${getButtonBackgroundClass('/portfolio')} p-3 rounded-md mb-2 px-9 w-full`}>
                            portfolio
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className={`${getButtonBackgroundClass('/homer')} p-3 rounded-md mb-2 px-9 w-full`}>
                            contact
                        </button>
                    </Link>
                </div>
                <div className='z-10 p-2 h-[60vh] -mr-4 -mt-2 bg-secondary'></div>
            </div>
            
        </div>
    );
}