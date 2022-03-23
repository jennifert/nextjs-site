import Link from 'next/link'
import { useRouter } from 'next/router'
// import Form from '../components/form'
import { SITE_TITLE } from '../lib/constants'

export default function Nav({ children, href }) {
    const router = useRouter();
    return (
        <nav aria-label="Site menu">
            <div className="container">
                <p className="site-title">
                    {SITE_TITLE}
                </p>
                <ul>
                    <li>
                        {router.pathname === "/" ? <Link href="/"><a className="current-page" aria-current="page">Home</a></Link>
                            : <Link href="/"><a className="other-page">Home</a></Link>}
                    </li>

                    <li>
                        {router.pathname === "/blog" ? <Link href="/"><a className="current-page" aria-current="page">Blog</a></Link>
                            : <Link href="/blog"><a className="other-page">Blog</a></Link>}
                    </li>
                    <li>
                        {router.pathname === "/gallery" ? <Link href="/"><a className="current-page" aria-current="page">Gallery</a></Link>
                            : <Link href="/gallery"><a className="other-page">Gallery</a></Link>}
                    </li>

                    <li>
                        {router.pathname === "/portfolio" ? <Link href="/"><a className="current-page" aria-current="page">Portfolio</a></Link>
                            : <Link href="/portfolio"><a className="other-page">Portfolio</a></Link>}
                    </li>

                    {/* <li>
                            {router.pathname === "/sitemap" ? <Link href="/"><a className="current-page" aria-current="page">Sitemap</a></Link>
                                : <Link href="/sitemap"><a className="other-page">Sitemap</a></Link>}
                        </li> */}
                </ul>

                {/* <Form /> */}

            </div>
        </nav>
    )
}