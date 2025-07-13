import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
<form class="navbar-search pull-left">
    <input type="text" class="search-query" placeholder="Search">
</form>
<div class="nav-collapse collapse">
    <ul class="nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
        <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li class="nav-header">Nav header</li>
            <li><a href="#">Separated link</a></li>
            <li><a href="#">One more separated link</a></li>
        </ul>
        </li>
    </ul>
</div>
`.trim();

const code2 = `
<span class="navbar-search pull-left">
    <input type="text" placeholder="Search">
</span>
<asp:Menu ID="NavigationMenu" runat="server" EnableViewState="false"
    IncludeStyleBlock="false" Orientation="Horizontal"
    CssClass="nav-collapse collapse"
    StaticMenuStyle-CssClass="nav"
    StaticSelectedStyle-CssClass="active"
    DynamicMenuStyle-CssClass="dropdown-menu">
    <Items>
        <asp:MenuItem Text="Home" ToolTip="Home" />
        <asp:MenuItem Text="Demos" ToolTip="Demos">
            <asp:MenuItem Text="Contact" ToolTip="Contact" />
            <asp:MenuItem Text="Google Map" ToolTip="Google Map" />
        </asp:MenuItem>
        <asp:MenuItem Text="Movies" ToolTip="Movies">
            <asp:MenuItem Text="Action" ToolTip="Action" />
            <asp:MenuItem Text="Drama" ToolTip="Drama" />
            <asp:MenuItem Text="Musical" ToolTip="Musical" />
        </asp:MenuItem>
    </Items>
</asp:Menu>
`.trim();

// Metadata for the post
export const POST_TITLE = 'Asp.net Menu Control - Styling with Bootstrap 2';
export const POST_DESCRIPTION = 'Thanks to an interesting post, was able to update the Bootstrap with master pages example with asp.net menu controls instead of being hard coded.';
export const POST_TAGS = ['asp', 'css', 'bootstrap']

export default function AspNetBootstrapNav() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2013-11-07'

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
                    pathname={router?.pathname || '/blog/2013-11-07-asp-net-menu-control-styling-with-bootstrap-nav'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Thanks to an interesting post titled &quot;<a className="underline focus:ring-2" href="https://techbrij.com/responsive-menu-twitter-bootstrap-asp-net" rel="nofollow noreferrer">Responsive ASP.NET Menu Control With Twitter Bootstrap</a>&quot;, I was able to update the Bootstrap with master pages example with asp.net menu controls instead of being hard coded.</p>
                <p>For the menu control, you basically add the below code in lace of the div with &quot;nav-collapse collapse&quot;. The menu in this code is based off the Bootstrap Example &quot;<a className="underline focus:ring-2" href="https://getbootstrap.com/2.3.2/examples/hero.html">Basic marketing site</a>&quot;.</p>
                <p>The one downside to the menu control is that the control will inject inline styles. &nbsp;Also, to display the search form in the menu bar, use the code from the <a className="underline focus:ring-2" href="https://getbootstrap.com/2.3.2/components.html#navbar" rel="nofollow noreferrer">bootstrap documentation</a>, then change the &lt;form&gt; to a &lt;span&gt;.</p>

                <h2>Before:</h2>
                <PrismCode
                    code={code}
                    language="html"
                    plugins={["line-numbers"]}
                />
                <h2>After:</h2>
                <PrismCode
                    code={code2}
                    language="html"
                    plugins={["line-numbers"]}
                />

                <p>Here is a link to the <a className="underline focus:ring-2" href="https://github.com/jennifert/Boostrap-ASP_Net-MasterPages/blob/master/BootstrapASP.Master" rel="nofollow noreferrer">entire master file in Github</a>.</p>

            </section>
        </Layout>
    )
}
