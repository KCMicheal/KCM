import Link from 'next/link'
import Image from 'next/image';
import favicon from '../public/favicon.ico'


export default function Home() {
  return (
    <>
      <main>
        <div className="flex flex-col justify-around h-[100vh] md:h-[80vh] w-full">
          <div className="flex-wrap">
            <h1 className="font-syne text-center sm:text-left text-4xl lg:text-6xl md:text-5xl font-medium dark:text-black">Hi there👋,</h1>
            <h1 className="font-syne text-center sm:text-left text-5xl lg:text-6xl md:text-5xl font-bold drop-shadow-xl dark:text-black">{`I'm KCMicheal`}</h1>
            <h1 className='font-syne text-center sm:text-left  text-4xl leading-tight font-medium dark:text-black'>A Software Engineer and a lover of music🎧 & chocolate 🍰</h1>
          </div>
          <div className="socials inline-flex justify-between lg:w-1/2 md:w-full w-full lg:h-20 h-16">
            <div className="github h-full w-20 bg-[url('../public/favicon.ico')] bg-contain bg-no-repeat bg-center"></div>
            <div className="github h-full w-20 bg-[url('../public/favicon.ico')] bg-contain bg-no-repeat bg-center"></div>
            <div className="github h-full w-20 bg-[url('../public/favicon.ico')] bg-contain bg-no-repeat bg-center"></div>
            <div className="github h-full w-20 bg-[url('../public/favicon.ico')] bg-contain bg-no-repeat bg-center"></div>
          </div>
        </div>
      </main>
    </>
  )
}
