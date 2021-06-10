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
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
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

                <h2>Resources:</h2>
                <p><a className="underline focus:ring-2" href="https://getbootstrap.com/docs/3.4/css/#forms" rel="nofollow noreferrer">Bootstrap 3: forms</a><br />
                    <a className="underline focus:ring-2" href="https://fontawesome.com/v4.7/examples/" rel="nofollow noreferrer">Font-Awesome 4: Examples</a></p>
            </section>
        </Layout>
    )
}
