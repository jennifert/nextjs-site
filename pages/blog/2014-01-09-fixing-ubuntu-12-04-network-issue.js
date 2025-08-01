import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'

export const POST_TITLE = 'Fixing Ubuntu 12.04 network issue';
export const POST_DESCRIPTION = 'While upgrading an Ubuntu virtual machine from Version 10 LTs to 12.04 LTS, I ran into networking issues with the static IP address and DNS servers.';
export const POST_TAGS = ['servers', 'ubuntu', 'network']

export default function UbuntuTwelveIssues() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2014-01-09'

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
                    pathname={router?.pathname || '/blog/2014-01-09-fixing-ubuntu-12-04-network-issue'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>While upgrading an Ubuntu virtual machine from Version 10 LTs to 12.04 LTS, I ran into networking issues with the static IP address and DNS servers. The web server was accessible on the network, however, the virtual machine was not able to ping Google, or download any updates.</p>
                <p>Errors encountered with this issue:</p>
                <ul className="list-disc list-inside m-2">
                    <li>waiting for 60 more seconds for ...</li>
                    <li>Booting without full network capability</li>
                    <li>Network .... not compatible with this version of Ubuntu.</li>
                </ul>
                <p>To fix this, I first I tried reconfiguring the networking, then adding DNS servers into the network interfaces with no luck. Also, tried editing various files mentioned in other posts.</p>
                <p>Finally I ran across a post from Ask Ubuntu Forums (no longer available). So, here are the steps mentioned to resolve this issue:</p>

                <p>Create a copy of the following file: /etc/network/interfaces:</p>
                <pre><kbd>
                    sudo cp /etc/network/interfaces /etc/network/iBKUp
                </kbd></pre>

                <p>Edit the network interface file as root:</p>
                <pre><kbd>
                    sudo nano /etc/network/interfaces
                </kbd></pre>

                <p>Make sure the file only has the following:</p>
                <pre><kbd>
                    auto lo<br />
                    iface lo inet loopback
                </kbd></pre>

                <p>Reboot the machine</p>
                <p>After these steps, the machine will hopefully boot normally and the networking centre should have resolved itself as well.</p>
                <p>In the Network centre, you re-add the static IP information into your wired connection and lastly reboot again.</p>
                <p>Hope this helps others! </p>
            </section>
        </Layout>
    )
}
