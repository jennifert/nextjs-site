import { useRouter } from 'next/router'
// import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import PostJsonLd from '../../components/PostJsonLd'
import dynamic from 'next/dynamic'
const PrismCode = dynamic(() => import('../../components/prism'), { ssr: false })

const code = `
extension_dir = "C:\PHP5\ext"
log_errors = On<
error_log = "C:\inetpub\temp\php-errors.log"
fastcgi.impersonate = 1
fastcgi.logging = 0
cgi.fix_pathinfo=1
cgi.force_redirect = 0
display_errors = Off
upload_max_filesize = 8M
post_max_size = 8M
`.trim();

const code2 = `
extension=php_mysql.dll
extension=php_mysqli.dll
`.trim();

const code3 = `
define('FS_METHOD','direct');
`.trim();

const code4 = `
<?xml version="1.0"?>
<configuration>
    <system.webServer>
        <staticContent>
          <mimeMap fileExtension=".json" mimeType="application/json" />
          <mimeMap fileExtension=".eot" mimeType="application/vnd.ms-fontobject" />
          <mimeMap fileExtension=".otf" mimeType="font/otf" />
          <mimeMap fileExtension=".ttf" mimeType="application/octet-stream" />
          <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
          <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
          <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />
          <mimeMap fileExtension=".mp4" mimeType="video/mp4" />
          <mimeMap fileExtension=".m4v" mimeType="video/m4v" />
          <mimeMap fileExtension=".ogg" mimeType="video/ogg" />
          <mimeMap fileExtension=".ogv" mimeType="video/ogg" />
          <mimeMap fileExtension=".oga" mimeType="audio/ogg" />
          <mimeMap fileExtension=".spx" mimeType="audio/ogg" />
          <mimeMap fileExtension=".svg" mimeType="images/svg+xml" />
          <mimeMap fileExtension=".svgz" mimeType="images/svg+xml" />
          <mimeMap fileExtension=".appcache" mimeType="text/cache-manifest" />
          <mimeMap fileExtension=".rss" mimeType="application/rss+xml" />
     </staticContent>
    </system.webServer>
</configuration>
`.trim();

// Metadata for the post
export const POST_TITLE = 'Creating a development environment for IIS 7+';
export const POST_DESCRIPTION = 'This post describes how to enable IIS on Windows 7, along with enabling MySql and Php. You will need Administrator Access to complete these steps.';
export const POST_TAGS = ['server', 'iis', 'development']

export default function IisDevEnvironmentSeven() {
    const router = useRouter()

    // Try to extract the date from the filename/route (e.g., 2012-11-08)
    const fileSlug = router?.pathname?.split('/')?.pop() || ''
    const dateMatch = fileSlug.match(/^(\d{4}-\d{2}-\d{2})/)
    const POST_DATE = dateMatch ? dateMatch[1] : '2015-03-14'

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
                    pathname={router?.pathname || '/blog/2015-03-14-IIS7-Development-Environment'}
                />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p className="alert-warning">
                    <small>
                        Under review: This post was originally written on March 14, 2015 and is based on a development environment using IIS 7 on Windows 7. While much of the setup remains relevant, modern versions of Windows (10/11) may use updated tools such as WSL or newer IIS features.
                    </small>
                </p>

                <p>This post describes how to enable IIS on Windows 7, along with enabling MySql and Php. You will need Administrator Access to complete these steps.</p>

                <h2>Enable IIS</h2>
                <p>In order to avoid permission issues when trying to edit a file with your logged in account, create a folder in a directory outside of <code>innetpub</code>, ensuring that the full path has no spaces.</p>
                <p>For example: <code>C:\webroot\</code></p>
                <p>Next, to fix the security settings, right click on the new folder and add permissions for any users with, ISR, IUSER and Networking (full access)</p>
                <p>Now, use the following <a className="underline focus:ring-2" href="https://web.archive.org/web/20160620015739/http://windows.microsoft.com/en-ca/windows7/install-internet-information-services-iis-7-5" rel="nofollow noreferrer">guide</a> to install IIS onto your machine. After first enabling, it will have your web root in the <code>innetpub</code> folder.</p>
                <p>Since our folder is created, lets go ahead and relocate the server to use that!</p>
                <p>Go in to the Default Web site and click: <code>Default Web Site &gt; Manage Web Sites &gt; Advanced Settings &gt; Physical Path</code>. Modify the path to be at the location you created at the top of this step.</p>
                <h2>Install PHP</h2>
                <p>Go back into the &quot;Turn Windows Features on or off&quot; menu, then expand the category &quot;Application Development Features&quot;. Finally, enable the &quot;CGI&quot; check box.</p>
                <p>Download the latest stable version for PHP (Non Thread Safe) and unzip into a directory so that the path is similar to: <code>c:\PHP5</code></p>
                <p>Next, rename &quot;php.ini-production&quot; to &quot;php.ini&quot;. Open the file, and edit to match the items below:</p>
                <PrismCode
                    code={code}
                    language="ini"
                    plugins={["line-numbers"]}
                />
                <p>Now, in the IIS manager, left click once on your server name, and then select &quot;Handler Mappings&quot;</p>
                <p>Click <code>Actions &gt; Add Module Mapping</code> and then enter the following:</p>
                <p>Request path: <kbd>*.php</kbd><br />
                    Module: <kbd>FastCgiModule</kbd><br />
                    Executable: <kbd>c:\PHP5\php-cgi.exe</kbd><br />
                    Name: <kbd>PHP_via_FastCGI</kbd></p>

                <p>In the same Window, Click <code>Request Restrictions &gt; Mapping</code>. Next, check off &quot;invoke handler only if request is mapped to&quot;, then click &quot;File or Folder&quot;. Now, click  &quot;OK&quot; in all dialog boxes to accept changes.</p>

                <p>In the IIS manager, click on your Default website, and then &quot;Default Document&quot;, and then add index.php to the list.</p>

                <p>Finally, restart your Default Web Site, and check out the &quot;Security recommendations&quot; link in the Resource section for more ways to secure this instance.</p>

                <h3>Install MySQL</h3>
                <p>Download the latest stable version (at the time of writing, 5.x), but be sure to just skip to the download (near bottom of page). <b>July 21, 2021 note:</b> if you use PHP version 5.6 or below, MYSQL will not function well with MYSQL 8.</p>
                <p>For most uses the Typical install is fine. Please select all the MySQL defaults, and be sure to set a strong default password for root.</p>
                <p>Note: Never use root on any of your Web applications.</p>
                <p>Next, go into your php.ini file and uncomment:</p>
                <PrismCode
                    code={code2}
                    language="ini"
                    plugins={["line-numbers"]}
                />
                <p>Save, then restart your IIS server.</p>
                <p>Lastly, create a mysql user and database. Be sure to use a strong password here as well.</p>

                <h2>Install the URL rewrite plug-in for IIS</h2>
                <p>Go to the <a className="underline focus:ring-2" href="https://www.iis.net/downloads/microsoft/url-rewrite" rel="nofollow noreferrer">Microsoft Site</a> to download the latest version.</p>
                <p>Once installed successfully, restart the server again.</p>
                <p>This step will allow you to use &quot;Pretty URLs&quot; on your blog.</p>

                <h2>Download and install WordPress</h2>
                <p>From <a className="underline focus:ring-2" href="https://wordpress.org/download/#download-install" rel="nofollow noreferrer">WordPress.org</a> download the latest versions (4.1.1 at the time of writing). Also, check out the  <a className="underline focus:ring-2" href="https://make.wordpress.org/polyglots/teams/" rel="nofollow noreferrer">translations</a> to download WordPress in your language, though some of these ay not be the latest.</p>
                <p>To use WordPress just for something like a blog, unzip into your web root, and change the file name: <code>C:\webroot\blog</code></p>
                <p>To have WordPress at the root, move all the files instead the unzipped &quot;wordpress&quot; folder right into your root: <code>C:\webroot\</code></p>
                <p>Next, edit the file &quot;wp-config.php&quot; (you may need to rename the sample config).  Change the WordPress user name, password, and database to match what was created after installing MySql.</p>
                <p>Open up the <a className="underline focus:ring-2" href="https://api.wordpress.org/secret-key/1.1/salt/" rel="nofollow noreferrer">secret generator</a> to automatically generate your secret keys. Paste this into your wp-config.php file.</p>
                <p>Next, add the below line (to stop WordPress from asking your ftp information) and paste just above the comment that asks you to stop editing:</p>
                <PrismCode
                    code={code3}
                    language="php"
                    plugins={["line-numbers"]}
                />
                <p>Never use this external servers!</p>
                <p>Save all these changes, then run one of the below addresses in your browser.</p>

                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="http://localhost/blog/wp-admin/install.php" rel="nofollow noreferrer">Finish install from a sub folder</a> or</li>
                    <li><a className="underline focus:ring-2" href="http://localhost/wp-admin/install.php" rel="nofollow noreferrer">finish install from the root.</a></li>
                </ul>
                <p>Go through and set up your site name, and admin user as suggested on the page.</p>
                <p>For issues, consult the <a className="underline focus:ring-2" href="https://wordpress.org/support/article/how-to-install-wordpress/" rel="nofollow noreferrer">WordPress Docs</a>.</p>

                <h2>Add Mime Types to IIS</h2>
                <p>If you are not able to see content such as: fonts, JSON, videos, etc., you may need to add the mime type to your &quot;web.config&quot; file as seen below. Instead of adding to your web.config, this can also be done in the <a className="underline focus:ring-2" href="https://sourcedaddy.com/windows-7/defining-new-mime-type.html" rel="nofollow noreferrer">IIS server itself</a>.</p>
                <PrismCode
                    code={code4}
                    language="xml"
                    plugins={["line-numbers"]}
                />
                <p>If they are not above, they may be mentioned at: <a className="underline focus:ring-2" href="https://web.archive.org/web/20170917212327/http://www.serverintellect.com/support/iis/mime-types/" rel="nofollow noreferrer">List of Common MIME types</a>.</p>

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20180303023536/http://www.uipress.com/add-json-handler-support-in-iis-7/" rel="nofollow noreferrer">Add JSON Handler Support</a></li>
                    <li><a className="underline focus:ring-2" href="https://codingstill.com/2013/01/set-mime-types-for-web-fonts-in-iis/" rel="nofollow noreferrer">Add Web Font Handler Support</a></li>
                    <li><a className="underline focus:ring-2" href="https://docs.c1.orckestra.com/Layout/LayoutFAQ?q=Can+I+use+HTML5+and+CSS3+related+files+like+.svg%2C+.woff+and+.ogg%3F" rel="nofollow noreferrer">Common HTML5 and CSS3 Handler Support</a></li>
                    <li><a className="underline focus:ring-2" href="https://www.iandevlin.com/blog/2010/03/net/configuring-rss-with-iis/" rel="nofollow noreferrer">Configuring RSS with IIS</a></li>
                    <li><a className="underline focus:ring-2" href="https://stackoverflow.com/questions/4920576/create-virtual-directory-at-http-localhost/4920620#4920620" rel="nofollow noreferrer">How do I change permissions on wwwroot</a></li>
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20160401063938/http://php.net/manual/en/install.windows.iis7.php" rel="nofollow noreferrer">PHP.net Installation Docs</a></li>
                    <li><a className="underline focus:ring-2" href="https://web.archive.org/web/20220501165321/https://docs.microsoft.com/en-us/iis/application-frameworks/install-and-configure-php-applications-on-iis/using-fastcgi-to-host-php-applications-on-iis" rel="nofollow noreferrer">Security Recommendations</a></li>
                    <li><a className="underline focus:ring-2" href="https://wordpress.org/support/article/editing-wp-config-php/" rel="nofollow noreferrer">WordPress: Editing wp.config.php</a></li>
                    <li><a className="underline focus:ring-2" href="https://docs.microsoft.com/en-us/iis/manage/configuring-security/how-to-set-up-ssl-on-iis" rel="nofollow noreferrer">How to Set Up SSL on IIS 7</a></li>
                    <li><a className="underline focus:ring-2" href="https://deanhume.com/set-up-iis-7-to-run-a-secure-site-locally-https/" rel="nofollow noreferrer">Set up IIS 7 to run a secure site locally - HTTPS</a></li>
                    <li><a className="underline focus:ring-2" href="https://weblogs.asp.net/scottgu/tip-trick-enabling-ssl-on-iis7-using-self-signed-certificates" rel="nofollow noreferrer">Tip/Trick: Enabling SSL on IIS 7.0 Using Self-Signed Certificates</a></li>
                </ul>
            </section>
        </Layout>
    )
}
