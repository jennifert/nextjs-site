import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

const code = `
# Site settings
title: Jennifer Tesolin
description: "This is Jennifer Tesolin's personal web site. Located on this site are tutorials and tips for web developers."
baseurl: ""
url: "https://jenntesolin.com"
timezone : "America/Toronto"
plugins: [jekyll-paginate]
`.trim();

const code2 = `
# Build Settings
exclude: [Gemfile, Gemfile.lock, README.md, vendor, bin,changelog.md,wordpress.xml,package.json,Gruntfile.js,node_modules, .ruby-version]
markdown: kramdown
markdown_ext:  markdown,mkdown,mkdn,mkd,md
textile_ext:   textile
permalink: /blog/:year/:month/:day/:title/
paginate: 10
paginate_path: "blog/page:num"
gems:
  - jekyll-feed
name: Jennifer Tesolin Website
feed:
  path: atom.xml
`.trim();

const code3 = `
author :
  name : Jennifer Tesolin
  email : me@jenntesolin.com
  location : Toronto (Canada)
  github : jennifert
  twitter : jenntes
`.trim();

const code4 = `
# OS X / Windows Files
.DS_Store
Thumbs.db

# NODE
.node_modules
node_modules
*/node_modules
/node_modules/*
npm-debug.log
package-lock.json
.env

# JEKYLL
.sass-cache/
.jekyll-cache/
.jekyll-metadata
.rvmrc
*.gem
`.trim();

export default function JekyllConfig() {
    const POST_TITLE = 'Jekyll: The configuration file';
    const POST_DESCRIPTION = 'The Jekyll configuration file _config.yml houses important information for your site. This post highlights some items used in one of my sites.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>The Jekyll configuration file (<code>_config.yml</code>) houses important information for your site. This post highlights some items used in my previous homepage that used <a className="underline focus:ring-2" href="https://github.com/jennifert/jekyll-site" rel="nofollow noreferrer">Jekyll Github repository to build as a static site</a>.</p>
                <p>This file has quite a few areas of editing, especially if you want to override some of the <a className="underline focus:ring-2" href="https://jekyllrb.com/docs/configuration/default/" rel="nofollow noreferrer">default Jekyll options</a>.</p>
                <p>My <code>_config.yml</code> contains 3 sections, which are explain in more detail below.</p>

                <h2>Site Settings</h2>
                <p>This section define what and where your site is.</p>
                <ul className="list-disc list-inside m-2">
                    <li>title: This is usually your company name, etc.</li>
                    <li>description: is used to fill in the meta-tag for description.</li>
                    <li>baseurl: As the official docs put it &quot;serves the site from specified URL&quot;. Do NOT include your host name.</li>
                    <li>url: the url of your blog</li>
                    <li>timezone: What time zone your in. Be sure to use a format such as: America/Toronto, or America/New_York.</li>
                    <li>plugins: Any plugins that the site uses.</li>
                </ul>
                <PrismCode
                    code={code}
                    language="yaml"
                    plugins={["line-numbers"]}
                />

                <h2>Build Settings</h2>
                <p>This section will tell Jekyll how to and what files to use to generate your production site.</p>
                <ul className="list-disc list-inside m-2">
                    <li>exclude:  this section tells Jekyll what not to include in your build. Format is: [file1, file2]</li>
                    <li>markdown: Which markdown flavour you will use with your site</li>
                    <li>markdown_ext:  file extensions you may use for markdown files.</li>
                    <li>permalink: what your website links will look like. For example: /blog/:year/:month/:day/:title/</li>
                    <li>paginate: how many articles do you want to see per page (as an integer number)</li>
                    <li>paginate_path: what site link format your paginated results will be. In format: &quot;blog/page:num&quot;</li>
                    <li>gems: Jekyll specific gems included in the build file.</li>
                    <li>names: your site name</li>
                    <li>feed path: location of rss/atom file</li>
                </ul>
                <PrismCode
                    code={code2}
                    language="yaml"
                    plugins={["line-numbers"]}
                />

                <h2>Author information</h2>
                <p>This section is used to display information on the company/site owner using information such as name, email, twitter handle, Github repository, location, etc. The sub information must be 1 tab under &quot;<code>author:</code>&quot;</p>
                <PrismCode
                    code={code3}
                    language="yaml"
                    plugins={["line-numbers"]}
                />

                <h2>Issues encountered</h2>
                <p>Unfortunately, it seems like new elements can not be created and used in other files. For example, when converting this site to Jekyll, I was unable add other social network item I entered under the author section to then use the links in the include/footer.html and humans.txt file.</p>

                <h2>Additional information and elements</h2>
                <p>The <a className="underline focus:ring-2" href="https://jekyllrb.com/docs/configuration/" rel="nofollow noreferrer">Configuration Docs</a> from the Official JekyllRB site is a must read. They include a ton of useful information and other tags that you can use in your file.</p>

                <h2>Bonus: Git ignore for Jekyll</h2>
                <p>Here is a sample of my git ignore file:</p>
                <PrismCode
                    code={code4}
                    language="gitignore"
                    plugins={["line-numbers"]}
                />

            </section>
        </Layout>
    )
}
