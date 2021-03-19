import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
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
            </section>
        </Layout>
    )
}
