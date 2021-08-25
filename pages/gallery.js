import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
import Image from 'next/image'

const galleryLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612978441/jenntesolin.com/gallery${src}?&q=${quality || 75}`
    // return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612978441/jenntesolin.com/gallery${src}?w=${width}&q=${quality || 75}`
}

export default function Gallery() {
    return (
        <Layout>
            <Head>
                <title>Gallery - {SITE_TITLE}</title>
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content">Gallery</h1>
                <p>
                    This page has a few photos selected from my old Flickr account.
                </p>
                <div className="grid max-w-4xl p-1"> {/* max-w-4xl: max-width: 56rem; */}
                    <div className="galleryItem rounded h-full text-grey-darkest no-underline shadow-md">
                        <div className="caption">
                            <h2>Mayan Ruins</h2>
                            <p>A structure at the Mayan ruins in Cozumel, Mexico.</p>
                        </div>
                        <div className="thumbnail">
                            <Image
                                loader={galleryLoader}
                                src="/mayan_ruins_oibwvu.jpg"
                                alt=""
                                className="w-full block rounded-b"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    <div className="galleryItem rounded h-full text-grey-darkest no-underline shadow-md">
                        <div className="caption">
                            <h2>Tall Ship</h2>
                            <p>The sail of a Tall Ship with the Toronto cityscape in the background at dusk.</p>
                        </div>
                        <div className="thumbnail">
                            <Image
                                loader={galleryLoader}
                                src="/tall_ship_ppbewf.jpg"
                                alt=""
                                className="w-full block rounded-b"
                                layout="fill"
                                objectFit="none"
                            />
                        </div>
                    </div>

                    <div className="galleryItem rounded h-full text-grey-darkest no-underline shadow-md">
                        <div className="caption">
                            <h2>Peace Arch</h2>
                            <p>The Peace Arch at the Hiroshima Memorial Peace Park.</p>
                        </div>
                        <div className="thumbnail">
                            <Image
                                loader={galleryLoader}
                                src="/peace_arc_vqd9tj.jpg"
                                alt=""
                                className="w-full block rounded-b"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}
