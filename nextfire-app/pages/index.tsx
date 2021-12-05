import Link from 'next/link'
import { Toaster } from 'react-hot-toast'

import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import ToastButton from '../components/ToastButton'

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
      <Loader show />
      <ToastButton />
      <Toaster />
      <Link href="/login">
        <a>Log In</a>
      </Link>
    </main>
  )
}