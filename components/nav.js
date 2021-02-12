import Link from 'next/link'
import { useRouter } from 'next/router'
import Form from '../components/form'

export default function Nav({ children, href }) {
    const router = useRouter()

    return (
        <nav aria-label="Site menu">

            <ul className="flex justify-between items-center p-8">
                <li> 
                    {router.pathname === "/" ? <Link href="/"><a className="px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold sm:text-base" aria-current="page">Home</a></Link>
                        : <Link href="/"><a className="text-blue-700">Home</a></Link>}
                </li>
                <li>
                    {router.pathname === "/about" ? <Link href="/about"><a className="px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold sm:text-base" aria-current="page">About</a></Link>
                        : <Link href="/about"><a className="text-blue-700">About</a></Link>}
                </li>
                <li>
                    {router.pathname === "/blog" ? <Link href="/blog"><a className="px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold sm:text-base" aria-current="page">Blog</a></Link>
                        : <Link href="/blog"><a className="text-blue-700">Blog</a></Link>}
                </li>
                <li>
                    {router.pathname === "/portfolio" ? <Link href="/portfolio"><a className="px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold sm:text-base" aria-current="page">Portfolio</a></Link>
                        : <Link href="/portfolio"><a className="text-blue-700">Portfolios</a></Link>}
                </li>
            </ul>

            <Form />
        </nav>
    )
}
// TODO: Fix link colour, and current actie styles, poor contrast