import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'
import { PrismCode } from '../../components/prism'

const code = `
gem install jekyll bundler
`.trim();

const code2 = `
gem install jekyll-import
`.trim();

const code3 = `
jekyll new my-site-name
cd my-new-site-name
bundle exec jekyll serve
`.trim();

const code4 = `
cd my-site-name
bundle exec jekyll serve
`.trim();

const code5 = `
bundle exec jekyll serve --drafts
`.trim();

const code6 = `
bundle add webrick
`.trim();

const code7 = `
bundle exec jekyll build
`.trim();

const blogLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/blog${src}?w=${width}&q=${quality || 75}`
}

export default function JekyllDev() {
    const POST_TITLE = 'Jekyll: Setting up your development environment';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Jekyll is a static site generator that runs on NodeJS. Its a great alternative to WordPress that eliminates the need for databases.</p>
                <p><em>This post was originally written on March 17, 2015. It has been updated for Mac OS Catalina forward.</em></p>

                <h2>Requirements</h2>
                {/* TODO replace link with proper one */}
                <p>To use Jekyll, you will need to have Ruby installed. Check out  the blog post <Link href="/blog/2016-02-04-jekyll-on-azure-or-github"><a className="underline focus:ring-2">Install homebrew on Big Sur</a></Link> if your on a Mac. Otherwise, check out <a className="underline focus:ring-2" href="https://rubyinstaller.org/" rel="nofollow noreferrer">Ruby Installer for Windows</a></p>

                <h2>Install Jekyll dependencies:</h2>
                <p>To install Jekyll, run the command:</p>
                <PrismCode
                    code={code}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>You can import your current WordPress posts, by first exporting your entire Wordpress blog using the WordPress tool to Export to an XML file.</p>

                <p>Once your  export file is ready, you will need to install the Jekyll Importer by the below command:</p>
                <PrismCode
                    code={code2}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Here is a list of other plugins that may be useful in your blog:</p>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://github.com/JesseHerrick/jekyll-angular" rel="nofollow noreferrer">jekyll-angular</a></li>
                    <li><a className="underline focus:ring-2" href="https://github.com/jekyll/jekyll-feed" rel="nofollow noreferrer">jekyll-feed</a></li>
                    <li><a className="underline focus:ring-2" href="https://jekyllrb.com/docs/pagination/" rel="nofollow noreferrer">jekyll-paginate</a></li>
                </ul>

                <p><p>There is a list over on the <a className="underline focus:ring-2" href="https://jekyllrb.com/docs/plugins/" rel="nofollow noreferrer">jekyll website</a> (separated by category).</p></p>

                <h2>A new Jekyll instance</h2>
                <p><em>Skip to next section to import your WordPress blog.</em></p>
                <p>First, run the the below command, replacing &quot;my-site-name&quot; with the folder name for your site.</p>
                <PrismCode
                    code={code3}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />
                <p>Sample output for running <kbd>jekyll new my-site-name</kbd>.</p>
                <Image
                    loader={blogLoader}
                    src="/jekyll-new-cmd1_t6pjkc"
                    alt="Screenshot"
                    width={700}
                    height={394}
                />
                <p>Jekyll will now generate a site in the folder &quot;my-site-name&quot;.</p>
                
                <p>To override the default jekyll theme, you will need to create two folders as seen in the list below. These are <code>assets</code>, <code>sass</code>, <code>_includes</code> and <code>_layouts</code>. For more information check out <a className="underline focus:ring-2" href="https://jekyllrb.com/docs/themes/#overriding-theme-defaults" rel="nofollow noreferrer">overriding theme defaults</a>.</p>

                <ul className="list-disc list-inside m-2">
                    <li><code>_config.yml</code>: stores the website configuration data such as site name, description and base address. Check out <a className="underline focus:ring-2" href="https://gist.github.com/jennifert/de156dc7b792a3f3a0e4b63aa66e768a" rel="nofollow noreferrer">my sample config file</a>. </li>
                    <li><code>_posts</code>: is where posts for your site are stored in markdown or HTML format. Check out <a className="underline focus:ring-2" href="https://gist.githubusercontent.com/jennifert/896428b15cd586f91fd36872a0bff1d5/raw/acedbfb817fb90e6ce0fb713043edae79c93f448/jekyll-post.markdown" rel="nofollow noreferrer">my sample post formatting</a>.</li>
                    <li><code>_sites</code>: This is where the pages will be built into for your production build.</li>
                    <li><code>about.md</code>: is the about page for your site.</li>
                    <li><code>feed.xml</code>: will have your rss feed. This generates on its own.</li>
                    <li><code>index.md</code>: your site&apos;s main page.</li>
                    <li><code>404.html</code>: your sites &quot;page not found&quot; file.</li>
                    <li><code>gemfile</code>: a list of ruby plugins installed</li>
                    <li><code>assets</code>: where you can store your js and other files</li>
                    <li><code>sass</code>: your sass code</li>
                    <li><code>_includes</code>: is where you store portions of a file such as your menu, header, footer, and analytics code.</li>
                    <li><code>_layouts</code>: puts the pieces of the includes together for a post, page and index file.</li>
                </ul>

                <PrismCode
                    code={code4}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Below is what the directory will look like in the terminal, as well as the output running the <code>serve</code>command to preview your site locally:</p>
                <Image
                    loader={blogLoader}
                    src="/jekyll-new-cmd2_kgpdsb.png"
                    alt="Jekyll serve command terminal output"
                    width={593}
                    height={443}
                />

                <h2>WordPress Import instructions</h2>
                <p>Click one of the links below to check out the awesome docs at Jekyll RB. Choose whether you have both wordpress.com or self hosted.</p>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://import.jekyllrb.com/docs/wordpressdotcom/" rel="nofollow noreferrer">Jekyll Import Docs: Wordpress.com</a></li>
                    <li><a className="underline focus:ring-2" href="https://import.jekyllrb.com/docs/wordpress/" rel="nofollow noreferrer">Jekyll Import Docs: Self Installed Wordpress</a></li>
                </ul>

                <h2>Drafts</h2>
                <p>To work on a post locally (but not moving it live), create a folder at the root called <code>_drafts</code>. Next, add a markdown or html file without the date (for example: template.html instead of 2019-12-11-template.html).</p>
                <Image
                    loader={blogLoader}
                    src="/jekyll-new-cmd2b_elcfqa.png"
                    alt=""
                    width={403}
                    height={70}
                />
                <p>Finally, run the below in your terminal:</p>
                <PrismCode
                    code={code5}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />
                <p>Changes can be made on the fly using this method as well. When ready to publish, move the file to <code>_posts</code> and add a date.</p>

                <h2>Ruby 3.0+ Issues</h2>
                <p>As per the <a className="underline focus:ring-2" href="https://github.com/github/pages-gem/issues/752" rel="nofollow noreferrer">Jekllrb Github Issue</a> you may need to run the command:</p>
                <PrismCode
                    code={code6}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h2>Publishing your new site</h2>
                <p>The last step is in this process is to push your files on-line. First, instead of <code>jekyll serve</code> you will want to run <code>jekyll build</code> like below. This replaces all of your development links with what your production link. <Link href="/blog/2015-08-08-jekyll-config-file"><a className="underline focus:ring-2">Check out how to set your configuration.</a></Link></p>
                <PrismCode
                    code={code7}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Move into the root of <code>_site</code>. These are the production ready files that should be moved to your server.</p>

                <p>The first chunk of files below shows the root of my Jekyll site, while the second shows the production ready files. Note that some files from the root of the Jekyll site are not included. These are excluded in <code>_config.yml</code></p>
                <Image
                    loader={blogLoader}
                    src="/jekyll-new-cmd3_aie8s2.png"
                    alt=""
                    width={700}
                    height={394}
                />
                <p>Note that if you use GitHub pages, you will need to compile the files on your computer first then commit your files to the master branch.</p>

                {/* <ol className="list-decimal list-inside m-2">

                </ol> */}

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><Link href="/blog/2016-02-04-jekyll-on-azure-or-github"><a className="underline focus:ring-2">Configure Jekyll on Microsoft Azure or Github pages</a></Link></li>
                    <li><Link href="/blog/2015-10-28-fix-jekyll-pagination-upgrade-to-3"><a className="underline focus:ring-2">Fix pagination after upgrading to Jekyll 3</a></Link></li>
                    <li><Link href="/blog/2015-08-08-jekyll-config-file"><a className="underline focus:ring-2">Jekyll: The configuration file</a></Link></li>
                    <li><Link href="/blog/2015-05-22-Jekyll-Custom-Easy-Search-jQuery"><a className="underline focus:ring-2">Jekyll: Easy searching with JSON and jQuery</a></Link></li>
                    <li><a className="underline focus:ring-2" href="https://stackoverflow.com/questions/tagged/jekyll" target="_blank" rel="nofollow noreferrer noopener">Jekyll on Stack Overflow</a></li>
                    <li><a className="underline focus:ring-2" href="https://jekyllrb.com/docs/posts/" rel="nofollow noreferrer">Jekyll Docs - Working with drafts</a></li>
                    <li><a className="underline focus:ring-2" href="https://jekyllrb.com/docs/troubleshooting/#installation-problems" rel="nofollow noreferrer">Jekyll Docs - Installation Problems</a></li>
                </ul>
            </section>
        </Layout>
    )
}
