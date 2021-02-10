import Image from 'next/image'

const socialLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/social${src}?w=${width}&q=${quality || 75}`
}

export default function Footer(props) {
    return (
        <footer>
                <nav aria-label="Social Media">
                <ul className="flex justify-center my-5">
                        <li>
                        <a className="p-2 m-2" href="https://github.com/jennifert?tab=repositories" target="_blank" rel="nofollow noreferrer" aria-label="Github Repositories">
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
                        <a className="p-2 m-2" href="https://twitter.com/jenntes" target="_blank" rel="nofollow noreferrer" aria-label="Twitter Feed">
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
                        <a className="p-2 m-2" href="http://ca.linkedin.com/pub/jennifer-tesolin/2b/5bb/3a6" target="_blank" rel="nofollow noreferrer" aria-label="LinkedIn Profile">
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
                <p>&copy; {(new Date().getFullYear())} Jennifer Tesolin.</p>
                {/* <p>Header Image By: <a href="https://unsplash.com/@scottwebb" target="_blank" rel="nofollow">Scott
                Webb</a></p> */}
            <p>Icons by Font Awesome Pro 5</p>
            </footer>
    )
}