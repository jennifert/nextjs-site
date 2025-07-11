import Image from 'next/image'
import parse from 'html-react-parser';
import Link from 'next/link'
import { COPYRIGHT, ARTICLE_LICENSE_LINK, ARTICLE_LICENSE_TEXT } from '../lib/constants'

export default function Footer(props) {
    return (
        <footer>
            <nav aria-label="Social Media">
                <ul className="social-logos">
                    <li>
                        <a href="https://github.com/jennifert?tab=repositories" rel="nofollow noreferrer" aria-label="Github Repositories">
                            Github
                            <Image
                                src="/icons/github.png"
                                alt="Github Repositories"
                                width={30}
                                height={30}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/feed.xml" rel="nofollow noreferrer" aria-label="Site Feed">
                            RSS
                            <Image
                                src="/icons/rssfeed.png"
                                alt="Site Feed"
                                width={30}
                                height={30}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="http://ca.linkedin.com/pub/jennifer-tesolin/2b/5bb/3a6" rel="nofollow noreferrer" aria-label="LinkedIn Profile">
                            LinkedIn
                            <Image
                                src="/icons/linkedin.png"
                                alt="LinkedIn Profile"
                                width={30}
                                height={30}
                            />
                        </a>
                    </li>

                    <li>
                        <Link href="/sitemap" className="underline focus:ring-2">
                            Sitemap
                            <Image
                                src="/icons/sitemap.png"
                                alt="Sitemap"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="/humans.txt" rel="author" className="underline focus:ring-2">
                            Humans.txt
                            <Image
                                src="/icons/humanstxt.png"
                                alt="Humans.txt"
                                width={30}
                                height={30}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="copyright">
                <p>{parse(COPYRIGHT)}</p>
            </div>
            <div className="license">
                <p>
                    Content licensed under{' '}
                    <a
                        href={ARTICLE_LICENSE_LINK}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="underline focus:ring-2"
                    >
                        {ARTICLE_LICENSE_TEXT}
                    </a>
                </p>
                <p>🚧 Some images and screenshots are being restored — full gallery and post content coming soon!</p>
            </div>
        </footer>
    )
}