import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'
import { PrismCode } from '../../components/prism'

const code = `
bundle lock --add-platform x86_64-linux
`.trim();

// const blogLoader = ({ src, width, quality }) => {
//     return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/blog${src}?w=${width}&q=${quality || 75}`
// }

export default function JekyllOnDigitalOcean() {
    const POST_TITLE = 'Jekyll Static Sites on the Digital App Platform';
    const POST_DESCRIPTION = 'This tutorial describes how to host your Jekyll static site (including plugins) on the new Digital Ocean App Platform.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This tutorial describes how to host your Jekyll static site (including plugins) on the new Digital Ocean App Platform.</p>
                <h2>Requirements</h2>
                <ul className="list-disc list-inside m-2">
                    <li>A github or gitlab account</li>
                    <li>A Digital Ocean Account (can be created for free)</li>
                    <li>Your Jekyll site has a successful build on your local machine as well as your Ruby version in your GemFile</li>
                </ul>
                
                <h2>Create your App</h2>
                <p>The first step in creating the app, is to <a className="underline focus:ring-2" href="https://www.digitalocean.com/products/app-platform/" rel="nofollow noreferrer">access the Digital Ocean App Platform</a>. Once your account you are logged into the platform, click on the &quot;Create App&quot; button as seen below.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-click-create-app-min_ooflmj.png"
                    alt="Screenshot "
                    width={800}
                    height={133}
                />

                <h3>Step 1: Select your source</h3>
                <p>The App platform allows sources of Github or Gitlab. Choose one, and then let Digital Ocean have permission to access your repository. Make sure &quot;auto deploy&quot; is selected if you want your site updated whenever your commit code to your repository. Click &quot;next&quot; to move to the next step.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-step-1-min_cbcfzp.png"
                    alt="Screenshot "
                    width={800}
                    height={503}
                />

                <h3>Step 2: Configure Your app</h3>
                <p>In this section there are 3 steps you must ensure to hae a Jekyll site on the static platform:</p>
                <ol className="list-decimal list-inside m-2">
                    <li>Ensure static site is selected (it may default to web service)</li>
                    <li>Ensure your build command matches is correct. If its not, click the &quot;edit&quot; button to make your changes, then &quot;close&quot; to save it.</li>
                    <li>Make sure you update your output directory (where the files will be built).</li>
                </ol>
                <p>Now, click &quot;next&quot; to move to the next step.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-step-2-min_iikqdw.png"
                    alt=""
                    width={652}
                    height={1079}
                />

                <h3>Step 3: Name Your Static Site</h3>
                <p>This is the name you will see on your dashboard, as well as becoming a part of what your live url will be (before a custom domain). Choose one, then click next.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-step-3-min_g5hr0x.png"
                    alt="Screenshot "
                    width={548}
                    height={394}
                />

                <h3>Step 4: Finalize and Launch</h3>
                <p>Starter plan should be selected by default, as its a static site. Make sure to select &quot;Starter plan&quot; if there is a different default selected. Finally click &quot;Launch Starter App&quot;.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-step-4-min_g8jdgk.png"
                    alt="Screenshot "
                    width={800}
                    height={709}
                />
                
                <h2>Initial Deploy</h2>
                <p>The page should now look similar to below that displays the current build status, as well as other information. Click &quot;view logs&quot; in the build status message to see live output of your app being build.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-initial-deploy-min_hod7n3.png"
                    alt="Screenshot "
                    width={800}
                    height={303}
                />

                <h2>Fixing a Build Error</h2>
                <p>If your not building on a Linux machine, you may run into the error message about being on an unsupported platform.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-initial-deploy-fail-log-min_ogiwk6.png"
                    alt="Screenshot "
                    width={800}
                    height={284}
                />

                <p>In the terminal, you will need to add the linux platform to your gemlock file as indicated in the instructions from the server log output. From my output, I needed to run  the below command. The image below shows the terminal output.</p>
                <PrismCode
                    code={code}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-add-do-platform-bundle-min_lx2hrd.png"
                    alt="Screenshot "
                    width={593}
                    height={182}
                />

                <p>Be sure to commit your changes to your remote repository. Your site should automatically start trying to build again. If you have &quot;auto deploy&quot; turned off, yu will need to manual;y deploy from the app platform interface.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-redeploy-min_dnnutu.png"
                    alt="Screenshot "
                    width={800}
                    height={355}
                />

                <p>Click the &quot;view logs&quot; from the build message alert again to see the status. If it fails, (for example missing packages), be sure to add them to your bundle, then recommit your files.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-redeploy-log-min_mi0lii.png"
                    alt="Screenshot "
                    width={800}
                    height={340}
                />

                <p>When you have a successful build, the interface will update with your live link. Click your digital ocean domain to have a look (if will be under your app name). For example, my link is: <a className="underline focus:ring-2" href="https://jekyll-site-cick5.ondigitalocean.app/">https://jekyll-site-cick5.ondigitalocean.app/</a></p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-redeploy-sucess-min_qj4qp9.png"
                    alt="Screenshot "
                    width={800}
                    height={850}
                />

                <h2>Configure your Custom Domain</h2>
                <p>For this step, you will need to click the &quot;settings&quot; tab, then scroll down to the domains section and click the edit button.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-settings-domain-configure-min_f6pwdf.png"
                    alt="Screenshot "
                    width={800}
                    height={590}
                />

                <p>An &quot;add&quot; button will appear under your current site. Click the add button to proceed to the next step.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-click-add-domain-configure-min_qvl2rj.png"
                    alt="Screenshot"
                    width={800}
                    height={355}
                />

                <p>You will be brought to a screen titled &quot;Add Domain&quot;. Fill in your domain name, and select how whether you want digital ocean to manage, or to add a CNAME (in my instance DNS is selected). For more information the differences check out: <a className="underline focus:ring-2" href="https://www.digitalocean.com/docs/app-platform/how-to/manage-domains/" rel="nofollow noreferrer">How to Manage Domains in App Platform</a>.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-create-app-assign-domain-configure-min_dtfoe2.png"
                    alt="Screenshot "
                    width={800}
                    height={703}
                />

                <p>You should first add your DNS or CNAME settings to your domain manager first, then wait 48-72 hours. Once it&apos;s been 72 hours, come back to the Add Domain page then click the button &quot;Add Domain&quot;. Once you click that button, the page will redirect back to your settings in the domain section. You should now see &quot;pending&quot; for your custom domain. It will take about 24 hours for the app platform to configure the rest.</p>
                <p>Once it successfully configures, you will see a success message and log details (if you click view more). </p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-domain-success-primary_nz82gu.png"
                    alt="Screenshot "
                    width={800}
                    height={444}
                />

                <p>Once you see &quot;Active&quot; as your status, repeat the steps to add &quot;www&quot; as a sub-domain (as seen below):</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-add-subdomain_b3eyds.png"
                    alt="Screenshot "
                    width={800}
                    height={680}
                />

                <p>That&apos;s it! You should now just need to wait for the domain to update.</p>
                <Image
                    //loader={blogLoader}
                    src="/jekyll-subdomain-pending_iwwzw5.png"
                    alt="Screenshot "
                    width={800}
                    height={202}
                />

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://github.com/jennifert/jekyll-site" rel="nofollow noreferrer">My personal site&apos;s repo</a></li>
                    <li><a className="underline focus:ring-2" href="https://devcenter.heroku.com/articles/ruby-versions" rel="nofollow noreferrer">Select your Ruby Version</a></li>
                </ul>
            </section>
        </Layout>
    )
}
