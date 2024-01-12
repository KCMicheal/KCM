import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1 className="font-syne font-black">Welcome to my app!</h1>
      <Link href="/homer" className="font-ubuntu text-6xl">Link to Homer</Link>
    </main>
  )
}
