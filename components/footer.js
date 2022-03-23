import Image from 'next/image'
import parse from 'html-react-parser';

import { COPYRIGHT } from '../lib/constants'
const socialLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/social${src}?w=${width}&q=${quality || 75}`
}

export default function Footer(props) {
    return (
        <footer>
                <nav aria-label="Social Media">
                <ul className="social-logos">
                        <li>
                        <a href="https://github.com/jennifert?tab=repositories" rel="nofollow noreferrer" aria-label="Github Repositories">
                            <Image
                                loader={socialLoader}
                                src="/github-square_nmpyub.svg"
                                    alt="Github Repository"
                                    width={30}
                                height={30}
                                />
                            </a>
                        </li>
                        <li>
                        <a href="/feed.xml" rel="nofollow noreferrer" aria-label="Site Feed">
                            <Image
                                loader={socialLoader}
                                src="/rss-square_hsohh9.svg"
                                    alt="Site RSS Feed"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li>
                        <a href="http://ca.linkedin.com/pub/jennifer-tesolin/2b/5bb/3a6" rel="nofollow noreferrer" aria-label="LinkedIn Profile">
                            <Image
                                loader={socialLoader}
                                src="/linkedin_t8xmbz.svg"
                                    alt="LinkedIn Profile"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                    </ul>
            </nav>
            <div className="copyright">
                <p>{parse(COPYRIGHT)}</p>
            </div>
        </footer>
    )
}