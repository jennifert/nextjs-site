import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();
    return (
        <header className="site-header">
            <span className="site-name">
                <Link
                    href="/"
                    className={router.pathname === "/" ? "current-page" : undefined}
                    aria-current={router.pathname === "/" ? "page" : undefined}
                >
                    <strong>Jenn Tesolin</strong>
                </Link>
            </span>
            <nav aria-label="Site menu">
                <ul>
                    <li>
                        <Link
                            href="/projects"
                            className={router.pathname === "/projects" ? "current-page" : undefined}
                            aria-current={router.pathname === "/projects" ? "page" : undefined}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/photography"
                            className={router.pathname === "/photography" ? "current-page" : undefined}
                            aria-current={router.pathname === "/photography" ? "page" : undefined}
                        >
                            Photography
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/notes"
                            className={router.pathname === "/notes" ? "current-page" : undefined}
                            aria-current={router.pathname === "/notes" ? "page" : undefined}
                        >
                            Notes
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={router.pathname === "/about" ? "current-page" : undefined}
                            aria-current={router.pathname === "/about" ? "page" : undefined}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
