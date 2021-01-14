import Link from 'next/link'
import Form from '../components/form'

export default function Nav() {
    return (
        <nav aria-label="Site menu">
            <ul className="flex justify-between items-center p-8">
                <li>
                    <Link href="/">
                        <a className="text-blue-500 no-underline">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="text-blue-500 no-underline">Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="text-blue-500 no-underline">Portfolio</a>
                    </Link>
                </li>
            </ul>

            <Form />
        </nav>
    )
}
// aria-current="page"<- add to make current page active for screen readers
