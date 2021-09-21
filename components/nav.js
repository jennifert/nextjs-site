import Link from 'next/link'
import { useRouter } from 'next/router'
// import Form from '../components/form'
import { SITE_TITLE } from '../lib/constants'

export default function Nav({ children, href }) {
    const router = useRouter();
    return (
        <nav aria-label="Site menu" className="navbar-expand-lg bg-indigo-500 mb-3">
            <div className="container px-4 flex-none md:flex md:flex-wrap justify-left flex-1">
                <p className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white focus:ring-2 focus:ring-white">
                    {SITE_TITLE}
                </p>
                <ul className="nav-ul list-none flex-none md:flex items-center">
                    {/* <ul class="ml-auto flex items-center"> */}
                    <li className="nav-item">
                        {router.pathname === "/" ? <Link href="/"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 underline" aria-current="page">Home</a></Link>
                            : <Link href="/"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Home</a></Link>}
                    </li>

                    <li className="nav-item">
                        {router.pathname === "/blog" ? <Link href="/"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 underline" aria-current="page">Blog</a></Link>
                            : <Link href="/blog"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Blog</a></Link>}
                    </li>
                    <li className="nav-item">
                        {router.pathname === "/gallery" ? <Link href="/"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 underline" aria-current="page">Gallery</a></Link>
                            : <Link href="/gallery"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Gallery</a></Link>}
                    </li>

                    <li className="nav-item">
                        {router.pathname === "/portfolio" ? <Link href="/"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 underline" aria-current="page">Portfolio</a></Link>
                            : <Link href="/portfolio"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Portfolio</a></Link>}
                    </li>

                    {/* <li className="nav-item">
                            {router.pathname === "/sitemap" ? <Link href="/"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 underline" aria-current="page">Sitemap</a></Link>
                                : <Link href="/sitemap"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Sitemap</a></Link>}
                        </li> */}
                </ul>

                {/* <Form /> */}

            </div>
        </nav>
    )
}