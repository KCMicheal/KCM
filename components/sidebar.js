import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar({ currentPage }) {
    const [isOpen, setIsOpen] = useState(false);

    const getButtonBackgroundClass = (page) => {
        return currentPage === page ? 'bg-primary text-tertiary font-ubuntu font-bold shadow-lg hover:bg-secondary' : 'bg-tertiary text-secondary font-ubuntu font-medium hover:bg-primary hover:font-medium hover:text-white';
    };

    const OpenMenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor'" className="size-8 dark:text-gray-500 transition duration-500 ease-in active:rotate-90">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
    );

    const CloseMenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor'" color='red' className="size-8 transition duration-500 ease-in active:-rotate-90">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>

    );

    return (
        <div className=''>
            <button type='button' onClick={() => setIsOpen(!isOpen)} className={`z-30 ring-4 ring-primary md:hidden fixed transition-transform translate-x-[0vw] translate-y-[77vh]  ${isOpen ? 'transition-transform ease-in translate-x-[1vw] translate-y-[40vh]' : ' '} rounded-full  shadow-2xl  p-6 hover:scale-150 bg-white dark:bg-white dark:border-4 dark:border-primary`}>
                {isOpen ? <CloseMenuIcon /> : <OpenMenuIcon />}
            </button>
            <div className={`z-20 fixed top-0 right-0 lg:w-64 h-full md:w-52 bg-secondary overflow-hidden transition-transform 
   duration-500 ease-in ${isOpen ? 'block w-[75vw]' : 'translate-x-full'} md:translate-x-0 flex p-9 pt-20 pb-20 justify-center`}>
                <div className='border-4 border-t-white border-r-primary border-b-primary overflow-visible flex'>
                    <div className='p-2 h-[60vh] self-end -ml-4 -mb-2 bg-secondary'></div>
                    <div className="text-center self-center p-2 z-20">
                        <Link href="/about">
                            <button className={`${getButtonBackgroundClass('/about')} p-3 rounded-md mb-2 mt-2 px-9 w-full`} onClick={() => setIsOpen(!isOpen)}>
                                about
                            </button>
                        </Link>
                        <Link href="https://kcm.hashnode.dev/" target='_blank'>
                            <button className={`${getButtonBackgroundClass('/blog')} p-3 rounded-md mb-2 px-9 w-full`} onClick={() => setIsOpen(!isOpen)}>
                                blog
                            </button>
                        </Link>
                        <Link href="/portfolio">
                            <button className={`${getButtonBackgroundClass('/portfolio')} p-3 rounded-md mb-2 px-9 w-full`} onClick={() => setIsOpen(!isOpen)}>
                                portfolio
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className={`${getButtonBackgroundClass('/contact')} p-3 rounded-md mb-2 px-9 w-full`} onClick={() => setIsOpen(!isOpen)}>
                                contact
                            </button>
                        </Link>
                    </div>
                    <div className='p-2 h-[60vh] -mr-4 -mt-2 bg-secondary'></div>
                </div>
            </div>
        </div>

    );
}