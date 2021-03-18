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
                <ul className="flex justify-center my-5">
                        <li>
                        <a className="p-2 m-2" href="https://github.com/jennifert?tab=repositories" rel="nofollow noreferrer" aria-label="Github Repositories">
                            <Image
                                loader={socialLoader}
                                src="/github-square_nmpyub.svg"
                                    alt="Github"
                                    width={30}
                                height={30}
                                />
                            </a>
                        </li>
                        <li>
                        <a className="p-2 m-2" href="https://twitter.com/jenntes" rel="nofollow noreferrer" aria-label="Twitter Feed">
                            <Image
                                loader={socialLoader}
                                src="/twitter-square_zgyods.svg"
                                    alt="Twitter"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li>
                        <a className="p-2 m-2" href="/feed.xml" rel="nofollow noreferrer" aria-label="Site Feed">
                            <Image
                                loader={socialLoader}
                                src="/rss-square_hsohh9.svg"
                                    alt="RSS"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li>
                        <a className="p-2 m-2" href="http://ca.linkedin.com/pub/jennifer-tesolin/2b/5bb/3a6" rel="nofollow noreferrer" aria-label="LinkedIn Profile">
                            <Image
                                loader={socialLoader}
                                src="/linkedin_t8xmbz.svg"
                                    alt="LinkedIn"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                    </ul>
            </nav>
            <div className="flex justify-center">
                <p>{parse(COPYRIGHT)}</p>
            </div>
        </footer>
    )
}