import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
import Image from 'next/image'

// const galleryLoader = ({ src, width, quality }) => {
//     return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612978441/jenntesolin.com/gallery${src}?&q=${quality || 75}`
//      return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612978441/jenntesolin.com/gallery${src}?w=${width}&q=${quality || 75}`
// }

export default function Gallery() {
    const POST_TITLE = 'Gallery';
    const POST_DESCRIPTION = 'A gallery of photos that Jennifer Tesolin has taken';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            
            {/* TODO: move Gammery items into json and component. move classes to stylesheet */}
            <section aria-labelledby="main-content">
                <h1 id="main-content">Gallery</h1>
                <p>
                    This page has a few photos selected from my old Flickr account.
                </p>
                <div className="flex flex-wrap justify-center flex-1">
                    <div className="pr-5">
                        <div className="caption text-grey-darkest">
                            <h2>Mayan Ruins</h2>
                            <p>A structure at the Mayan ruins in Cozumel, Mexico.</p>
                        </div>
                        <div className="thumbnail w-96 h-96 relative">
                            <Image
                                //loader={galleryLoader}
                                src="/mayan_ruins_oibwvu.jpg"
                                alt=""
                                className="rounded w-full"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    <div className="pr-5">
                        <div className="caption text-grey-darkest">
                            <h2>Tall Ship</h2>
                            <p>A sail at dusk with Toronto in the horizon.</p>
                        </div>
                        <div className="thumbnail w-96 h-96 relative">
                            <Image
                                //loader={galleryLoader}
                                src="/tall_ship_ppbewf.jpg"
                                alt=""
                                className="rounded w-full"
                                layout="fill"
                                objectFit="none"
                            />
                        </div>
                    </div>

                    <div className="pr-5">
                        <div className="caption text-grey-darkest">
                            <h2>Peace Arch</h2>
                            <p>The Peace Arch at the Hiroshima Memorial Peace Park.</p>
                        </div>
                        <div className="thumbnail w-96 h-96 relative">
                            <Image
                                //loader={galleryLoader}
                                src="/peace_arc_vqd9tj.jpg"
                                alt=""
                                className="rounded w-full"
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
