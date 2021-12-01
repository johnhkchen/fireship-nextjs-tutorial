import Link from 'next/link'

import Loader from '../components/Loader'
import Navbar from '../components/Navbar'

export default function IndexPage() {
  return (
    <main>
      <header> 
        <Navbar />
      </header>
        Hello World.{' '}
        <Link href="/about">
          <a>About</a>
        </Link>
        <Loader show/>
    </main>
  )
}