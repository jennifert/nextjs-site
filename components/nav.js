import Link from 'next/link'
import Form from '../components/form'

export default function Nav() {
    return (
        <nav aria-label="Site menu">
            <ul className="flex justify-between items-center p-8">
                <li>
                    <Link href="/">
                        <a className="text-blue-500 hover:underline">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="text-blue-500 hover:underline">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a className="text-blue-500 hover:underline">Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="text-blue-500 hover:underline">Portfolio</a>
                    </Link>
                </li>
            </ul>

            <Form />
        </nav>
    )
}
// aria-current="page"<- add to make current page active for screen readers
