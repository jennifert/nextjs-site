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
                        {router.pathname === "/" ? <Link href="/" className="current-page" aria-current="page">Home</Link>
                            : <Link href="/" className="other-page">Home</Link>}
                    </li>

                    <li>
                        {router.pathname === "/blog" ? <Link href="/" className="current-page" aria-current="page">Blog</Link>
                            : <Link href="/blog" className="other-page">Blog</Link>}
                    </li>
                    <li>
                        {router.pathname === "/gallery" ? <Link href="/" className="current-page" aria-current="page">Gallery</Link>
                            : <Link href="/gallery" className="other-page">Gallery</Link>}
                    </li>

                    <li>
                        {router.pathname === "/portfolio" ? <Link href="/" className="current-page" aria-current="page">Portfolio</Link>
                            : <Link href="/portfolio" className="other-page">Portfolio</Link>}
                    </li>

                    {/* <li>
                            {router.pathname === "/sitemap" ? <Link href="/"><a className="current-page" aria-current="page">Sitemap</a></Link>
                                : <Link href="/sitemap"><a className="other-page">Sitemap</a></Link>}
                        </li> */}
                </ul>

                {/* <Form /> */}

            </div>
        </nav>
    );
}