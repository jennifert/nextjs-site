import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'
import { PrismCode } from '../../components/prism'

const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim();

const code2 = `
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`.trim();

const blogLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/blog${src}?w=${width}&q=${quality || 75}`
}

export default function Template() {
    const POST_TITLE = 'The post name';
    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} - ${BLOG_TITLE} -  ${SITE_TITLE}`}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Post here</p>
                <PrismCode
                    code={code2}
                    language="java"
                    plugins={["line-numbers"]}
                />

                <Image
                    loader={blogLoader}
                    src="/custom-bootstrap-3_gt447z.png"
                    alt="Screenshot "
                    width={400}
                    height={233}
                />

                {/* <ul className="list-disc list-inside m-2">

                </ul>

                <ol className="list-decimal list-inside m-2">

                </ol> */}

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20140706151942/http://www.ctheroux.com/2012/08/a-step-by-step-guide-to-setup-a-bluetooth-keyboard-and-mouse-on-the-raspberry-pi/" rel="nofollow noreferrer">Step by step guide for setting up keyboard and mouse on Pi</a></li>
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20210127000542/http://www.correlatedcontent.com/blog/bluetooth-keyboard-on-the-raspberry-pi/" rel="nofollow noreferrer">Bluetooth keyboard on the Pi</a></li>
                </ul>
            </section>
        </Layout>
    )
}
