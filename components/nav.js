import Link from 'next/link'
import Form from '../components/form'
import { SITE_TITLE } from '../lib/constants'

export default function Nav({ children, href }) {

    return (
        <nav aria-label="Site menu" className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <p className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white focus:ring-2 focus:ring-white">
                        {SITE_TITLE}
                    </p>
                </div>
                <div className="lg:flex flex-grow items-center" id="menu-items">

                    <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/blog"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Blog</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/gallery"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Gallery</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/portfolio"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Portfolio</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sitemap"><a className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75 no-underline hover:underline focus:ring-2 focus:ring-white">Sitemap</a></Link>
                        </li>
                    </ul>

                    {/* <Form /> */}
                </div>

            </div>
        </nav>
    )
}