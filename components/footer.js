import Link from 'next/link'
// import { useRouter } from 'next/router'

export default function Footer({ home = false }) {
    // const router = useRouter();
    return (
        <footer>
            <nav aria-label="Footer links" className="footer-links">
                <ul>
                    <li><small><a href="https://github.com/jennifert?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></small></li>
                    <li><small><a href="http://ca.linkedin.com/pub/jennifer-tesolin/2b/5bb/3a6" target="_blank" rel="noopener noreferrer">LinkedIn</a></small></li>
                    <li><small><a href="https://www.flickr.com/photos/203901042@N06/" target="_blank" rel="noopener noreferrer">Flickr</a></small></li>
                    <li><small><a href="/feed.xml">RSS</a></small></li>
                    <li><small><Link href="/search">Search</Link></small></li>
                    <li><small><Link href="/privacy">Privacy</Link></small></li>
                    <li><small><a href="/humans.txt" rel="author">Humans.txt</a></small></li>
                    <li><small><Link href="/sitemap">Sitemap</Link></small></li>
                </ul>
            </nav>

            {!home && (

                <p>

                    <small>A home for projects, photography, and other interests.</small>

                </p>

            )}

            <div className="copyright">
                <p><small>&copy; 2026 Jennifer Tesolin.</small></p>
                <p>
                    <small>
                        Content licensed under{' '}
                        <a
                            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CC BY-NC-SA 4.0
                        </a>.
                        Source code for this site is{' '}
                        <a
                            href="https://github.com/jennifert/nextjs-site/blob/main/LICENSE"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MIT licensed
                        </a>{' '}
                        and available on{' '}
                        <a
                            href="https://github.com/jennifert/nextjs-site"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>.
                    </small>
                </p>
            </div>
        </footer>
    )
}