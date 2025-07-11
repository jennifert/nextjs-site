import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
www.jenntesolin.com
`.trim();

const code2 = `
[config]
project = _site
`.trim();
const code3 = `
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`.trim();

const code4 = `
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`.trim();

export default function ConfigJekyllAzureGithubPages() {
    const POST_TITLE = 'Configure Jekyll on Microsoft Azure or Github pages';
    const POST_DESCRIPTION = 'This post described how to configure Github pages and Microsoft Azure.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p className="alert-warning">
                    <small>
                        Under review: This post covers using Jekyll with GitHub Pages and Microsoft Azure. Some platform processes or limitations (like domain support on Azure&lsquo;s free tier) may have changed since writing and are currently being reviewed for accuracy.
                    </small>
                </p>

                <p>Sometimes hosting can be expensive, and some reputable hosts have free but limited hosting. This post described how to configure Github pages and Microsoft Azure.</p>
                <p>Just a note before getting started, personally I use plugins with Jekyll, so I have 2 repositories: 1) For development (which I connect to Azure), and 2) For the live site (Github pages). This is because when using the built in Jekyll server my custom JSON/jQuery search does not work there. Also, azure does not allow domain names to be configured for free.</p>

                <h2>GitHub Pages</h2>
                <p>If your using a custom/personal domain with Github pages, you will need a &quot;CNAME&quot; file. It should have your domain written like the below example.</p>
                <PrismCode
                    code={code}
                    language="textile"
                    plugins={["line-numbers"]}
                />
                <p>The Github pages are the best to follow for setting up, so please for the rest of <a className="underline focus:ring-2" href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll" rel="nofollow noreferrer">Github Pages guide</a>.</p>
                <p>This walks you through with prompts and changes with your Github set-up.</p>

                <h2>Azure</h2>
                <p>First, make sure you have a &quot;.deployment&quot; file pointing to your final complied website. If your using the basic Jekyll set-up, it would be:</p>
                <PrismCode
                    code={code2}
                    language="textile"
                    plugins={["line-numbers"]}
                />
                <p>Also, I have a <a className="underline focus:ring-2" href="https://gist.github.com/jennifert/27e1c3e587e64fb75149f1bb3b1b340c" rel="nofollow noreferrer">web.config</a> file set up to read JSON, media and font file media types. Alternatively, you can check out this list of <a className="underline focus:ring-2" href="https://web.archive.org/web/20170917212327/http://www.serverintellect.com/support/iis/mime-types/" rel="nofollow noreferrer">common MIME types</a>.</p>

                <p>To set-up your host, head on over to the <a className="underline focus:ring-2" href="https://azure.microsoft.com/en-us/free/" rel="nofollow noreferrer">Azure site</a> and click &quot;Start now&quot;. This will bring you to a sign in page which will require you to sign up with your Microsoft Account (Outlook, Hotmail, etc.).</p>

                <p>Next, follow the prompts to set up your free offer. Unfortunately, at the time of writing mine had already expired so I just clicked on the &quot;Portal button&quot;.</p>

                <p>From the left hand menu click &quot;App services&quot; to get to the screen to &quot;Add&quot;. Now, enter in your web site name, and choose a server close to you. Once your information is entered, click &quot;Create&quot;.</p>

                <p>You will need to wait a bit for your host to be created, so maybe grab a coffee and come back. The new site will be on the dashboard. to see your server information click on the website name you created.</p>

                <p>In this example, I am connecting to my Github account that I use for development. If you wish, you can always just configure FTP (and other things like programming versions of languages like .Net, PHP, etc.) by accessing it in your <a className="underline focus:ring-2" href="https://docs.microsoft.com/en-us/azure/app-service/configure-common" rel="nofollow noreferrer">control panel</a>.</p>

                <p>Click on &quot;Publishing&quot; under &quot;Continuous deployment&quot; to set up your web application and it will being up various providers. Pick Github then follow the prompts to authorize Microsoft to access your Github account.</p>

                <p>Next, select which repository you would like to connect to and click &quot;OK&quot;.</p>

                <p>Grab another coffee or give your email a quick check, as the two services will need a bit of time to connect and serve from the branch you connected to (for example &quot;Master&quot;).</p>

            </section>
        </Layout>
    )
}
