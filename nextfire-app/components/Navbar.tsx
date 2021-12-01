import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Homepage</a>
                    </Link>
                </li>
                <li>
                    <button>GO</button>
                </li>
            </ul>
        </nav>
    )
}