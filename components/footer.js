
import Image from 'next/image'
export default function Footer() {
    return (
        <footer>
                <nav aria-label="Social Media">
                <ul className="flex justify-center my-5">
                        <li>
                            <a className="p-2 m-2" href="https://github.com/jennifert?tab=repositories" target="_blank" rel="nofollow">
                                <Image
                                    src="/imgs/social-041-round_github.png"
                                    alt="Github"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="p-2 m-2" href="https://twitter.com/jenntes" target="_blank" rel="nofollow">
                                <Image
                                    src="/imgs/social-005-round_twitter.png"
                                    alt="Twitter"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="p-2 m-2" href="/feed.xml" rel="nofollow">
                                <Image
                                src="/imgs/social-020-round_rss.png"
                                    alt="RSS"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="p-2 m-2" href="http://ca.linkedin.com/pub/jennifer-tesolin/2b/5bb/3a6" target="_blank" rel="nofollow">
                                <Image
                                src="/imgs/social-011-round_linkedin.png"
                                    alt="LinkedIn"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
                <p>&copy; {(new Date().getFullYear())} Jennifer Tesolin.</p>
                {/* <p>Header Image By: <a href="https://unsplash.com/@scottwebb" target="_blank" rel="nofollow">Scott
                Webb</a></p> */}
            </footer>
    )
}