import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <p>
        I am John!<br />
        <Link href='/'>
          <a>Go Back</a>
        </Link>
      </p>
    </div>
  )
}