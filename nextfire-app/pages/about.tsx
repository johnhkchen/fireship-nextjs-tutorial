import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      <p>
        I am John!<br />
        <Link href='/'>
          <a>Go Back</a>
        </Link>
      </p>
    </div>
  )
}