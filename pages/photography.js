import Head from 'next/head'
import Layout from '../components/layout'
import PostJsonLd from '../components/PostJsonLd'
import { photoItems } from '../components/data/photoData'
import PhotographyItem from '../components/PhotographyItem'

export const POST_TITLE = 'Photography';
export const POST_DESCRIPTION = 'A gallery of photos that Jennifer Tesolin has taken';
export const POST_DATE = '2025-01-01'; // Placeholder
export const POST_TAGS = ['photos'];

export default function Photography() {
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} | Jenn Tesolin</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>

            <PostJsonLd
                title={POST_TITLE}
                description={POST_DESCRIPTION}
                date={POST_DATE}
                tags={POST_TAGS}
                pathname="/photography"
            />

            <main id="main-content">
                <section>
                    <h1>{POST_TITLE}</h1>
                    <p>
                        A small selection of photos, with full galleries available on{' '}
                        <a
                            href="https://www.flickr.com/photos/203901042@N06/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Flickr
                        </a>.
                    </p>
                    <div className="card-grid">
                        {photoItems.map((item, index) => (
                            <PhotographyItem
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                src={item.src}
                                href={item.href}
                                index={index}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    )
}