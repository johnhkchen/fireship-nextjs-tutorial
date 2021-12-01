import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href='/'>
                        <a><button>GO</button></a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}