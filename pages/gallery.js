// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE } from '../lib/constants'
import Layout from '../components/layout'
// import Image from 'next/image'
import { galleryItems } from '../components/data/galleryData'
import GalleryItem from '../components/GalleryItem'
import PostJsonLd from '../components/PostJsonLd'

export const POST_TITLE = 'Gallery';
export const POST_DESCRIPTION = 'A gallery of photos that Jennifer Tesolin has taken';
export const POST_DATE = '2025-01-01'; // Placeholder
export const POST_TAGS = ['gallery', 'photos'];


export default function Gallery() {

    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} | ${SITE_TITLE}`}</title>
                <meta name="description" content={POST_DESCRIPTION} />
                <PostJsonLd
                    title={POST_TITLE}
                    description={POST_DESCRIPTION}
                    date={POST_DATE}
                    tags={POST_TAGS}
                    pathname="/gallery"
                />
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content">Gallery</h1>
                <p>
                    This page has a few photos selected from my old Flickr account.
                </p>
                <div className="flex flex-wrap justify-center flex-1">
                    {galleryItems.map((item, index) => (
                        <GalleryItem
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            src={item.src}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}
