import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <div className="title flex-grow">
          <h1 className="font-syne text-6xl font-bold">Hello, I'm KCMicheal</h1>
        </div>
        <h1 className="font-syne font-black">Welcome to my app!</h1>
        <Link href="/homer" className="font-ubuntu text-6xl">Link to Homer</Link>
      </main>
    </>
  )
}
