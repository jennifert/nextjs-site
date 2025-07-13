import Link from 'next/link'
import { useRouter } from 'next/router'
import { SITE_TITLE } from '../lib/constants'

export default function Nav() {
    const router = useRouter();
    return (
        <nav aria-label="Site menu">
            <div className="container">
                <p className="site-title">{SITE_TITLE}</p>
                <ul>
                    <li>
                        <Link
                            href="/"
                            className={router.pathname === "/" ? "current-page" : "other-page"}
                            aria-current={router.pathname === "/" ? "page" : undefined}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className={router.pathname === "/blog" ? "current-page" : "other-page"}
                            aria-current={router.pathname === "/blog" ? "page" : undefined}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/gallery"
                            className={router.pathname === "/gallery" ? "current-page" : "other-page"}
                            aria-current={router.pathname === "/gallery" ? "page" : undefined}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/portfolio"
                            className={router.pathname === "/portfolio" ? "current-page" : "other-page"}
                            aria-current={router.pathname === "/portfolio" ? "page" : undefined}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/search"
                            className={router.pathname === "/search" ? "current-page" : "other-page"}
                            aria-current={router.pathname === "/search" ? "page" : undefined}
                        >
                            Search
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
