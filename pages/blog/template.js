import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
// import Image from 'next/image'
import dynamic from 'next/dynamic'
import PostJsonLd from '../../components/PostJsonLd'

const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

// --- Default code samples for scaffolding ---
const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim()

const code2 = `
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`.trim()

// --- Post Metadata Defaults ---
export const POST_TITLE = 'New Blog Post Title'
export const POST_DESCRIPTION = 'Short description of what this post is about.'
export const POST_TAGS = ['draft', 'blog']

// --- Router-based slug + date fallback ---
export default function BlogTemplate() {
    const router = useRouter()

    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2025-01-01'

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
                    pathname={router?.pathname || '/blog/template'}
                />
            </Head>

            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>

                <p className="mb-4">Intro paragraph or context for the post...</p>

                <PrismCode
                    code={code}
                    language="javascript"
                    plugins={["line-numbers"]}
                />

                <PrismCode
                    code={code2}
                    language="java"
                    plugins={["line-numbers"]}
                />

                {/* Example image (uncomment and replace src/alt when needed) */}
                {/* 
                <Image
                    src="/images/example.png"
                    alt="Descriptive alt text"
                    width={600}
                    height={400}
                />
                */}

                {/* Example lists */}
                <h2 className="mt-6">Key Points:</h2>
                <ul className="list-disc list-inside m-2">
                    <li>Item one</li>
                    <li>Item two</li>
                </ul>

                <h2 className="mt-6">Steps:</h2>
                <ol className="list-decimal list-inside m-2">
                    <li>Step one</li>
                    <li>Step two</li>
                </ol>

                <h2 className="mt-6">Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li>
                        <a
                            className="underline focus:ring-2"
                            href="https://web.archive.org/web/20140706151942/http://www.ctheroux.com/2012/08/a-step-by-step-guide-to-setup-a-bluetooth-keyboard-and-mouse-on-the-raspberry-pi/"
                            rel="nofollow noreferrer"
                        >
                            Step-by-step guide for setting up keyboard and mouse on Pi
                        </a>
                    </li>
                    <li>
                        <a
                            className="underline focus:ring-2"
                            href="https://web.archive.org/web/20210127000542/http://www.correlatedcontent.com/blog/bluetooth-keyboard-on-the-raspberry-pi/"
                            rel="nofollow noreferrer"
                        >
                            Bluetooth keyboard on the Pi
                        </a>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}
