import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
// code by: Torstein Hønsi: //jsfiddle.net/G9h8z/1/embed/
$(function () {
    $('#container').highcharts({
        chart: {
            events:{
                load: function() {
                    this.credits.element.onclick = function() {
                        window.open(
                          'http://www.example.com',
                          '_blank' // <- This is what makes it open in a new window.
                        );
                     }
                }
            }
        },

        credits: {
            text: 'Example.com'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
});
`.trim();

// Metadata for the post
export const POST_TITLE = 'Quick Tip: Highcharts credit in a new window';
export const POST_DESCRIPTION = 'Here is a great fiddle by Torstein Hønsi, that shows how to have highcharts credits open in a new window/tab.';
export const POST_TAGS = ['javascript', 'tips']

export default function HighchartsNewWindow() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2017-05-27'

    return (
        <Layout>
            <Head>
                <title>{`${POST_TITLE} - ${BLOG_TITLE} - ${SITE_TITLE}`}</title>
                <meta name="description" content={POST_DESCRIPTION} />
                <PostJsonLd
                    title={POST_TITLE}
                    description={POST_DESCRIPTION}
                    date={POST_DATE}
                    tags={POST_TAGS}
                    pathname={router?.pathname || '/blog/2017-05-27-highcharts-new-window'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Here is a great fiddle by Torstein Hønsi, that shows how to have highcharts credits open in a new window/tab.</p>

                <p><b>Note:</b> if you are using for free, you MUST re-add the text highcharts.com (in place of your domain). If their domain is not seen, you will be against the license.</p>

                <PrismCode
                    code={code}
                    language="javascript"
                    plugins={["line-numbers"]}
                />

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://www.highcharts.com/docs/getting-started/your-first-chart" rel="nofollow noreferrer">Highcharts.com - First chart</a></li>
                    <li><a className="underline focus:ring-2" href="https://jsfiddle.net/G9h8z/1/" rel="nofollow noreferrer">JS Fiddle for right click by Torstein Hønsi</a></li>
                </ul>
            </section>
        </Layout>
    )
}
