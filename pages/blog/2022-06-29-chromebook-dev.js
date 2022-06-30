/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

const code = `
sudo apt-get update
sudo apt-get upgrade
`.trim();

const code2 = `
sudo apt-get update && sudo apt-get dist-upgrade
`.trim();

const code3 = `
sudo apt-get install nodejs -y
`.trim();

const code4 = `
apt install gnome-software-plugin-flatpak
`.trim();

const code5 = `
flatpak install flathub com.visualstudio.code
flatpak run com.visualstudio.code
`.trim();

export default function ChromebookDev() {
    const POST_TITLE = 'Getting Started on Web Development Using a Chromebook';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {BLOG_TITLE} - {SITE_TITLE}</title>
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>A set-up on a budget chromebook for web development including IDE, browsers, and more.</p>

                <p>Note: this post mostly described using web development programs. A budget machine specs does not have (a good) capability of playing intensive games (such as from steam). Some applications like video editors (on Linux) may be a bit slow. Lastly, its recommended to have command line experience.</p>

                <h2>Background</h2>

                <p>Basically, started out looking for a tablet (under $300) but was not a fan of the development apps, keyboard, screen size and more. When I saw a sale on Amazon ($199 CAN during last Boxing Day) that had Linux capability, I figured I would give it a go. Figure if it could support an IDE and browser for travel (as well as some streaming services that can save on SD cards), it still be worth it.</p>

                <p>At the time of writing, there are RAW recordings in the Linux section. These will be replaced with a final video at some point.</p>

                <h2>The Machine</h2>

                <p>The device I went with was an <strong>Acer Chromebook 311</strong> with:</p>

                <ul className="list-disc list-inside m-2">
                    <li>Display: 11.6in.</li>
                    <li>Processor: Intel Celeron N4000</li>
                    <li>RAM: 4GB</li>
                    <li>Storage: 32GB eMMC Storage</li>
                    <li>OS: Chrome OS, Linux Dev Environment</li>
                    <li>Updates supported until:  2026</li>
                    <li>Year first manufactured: 2022</li>
                    <li>Amazon price (without sale): $270 <a className="underline focus:ring-2" href="https://www.amazon.ca/gp/product/B0886W3LTR/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" rel="nofollow noreferrer">Listing of Chromebook being used</a> (note the screen is also updated to 15in.</li>
                </ul>

                <p>Note, this machine does not have an HDMI port, though a USB (or USB-C) hub or dock could work for you in this area. the <a className="underline focus:ring-2" href="https://www.amazon.ca/gp/product/B08733BK1W/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" rel="nofollow noreferrer">USB C Hub by QGeeM</a> worked well . If you have another one used for another device, give it a try.</p>

                <h2>Recommended Specs/Upgrades</h2>

                <p>For development (especially when basically having 2 separate OS), the below specs would provide a better experience than just the basics:</p>
                <ul className="list-disc list-inside m-2">
                    <li>Storage: 64GB or higher (Unless you add your Linux Partition to an SD card)</li>
                    <li>If your gaming or doing a lot of video editing, would also suggest a RAM and/or Processor upgrade.</li>
                </ul>

                <p>Here is the Amazon.ca Listing for most of the same specs, but with <a className="underline focus:ring-2" href="https://www.amazon.ca/gp/product/B08YP7N7GC/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1" rel="nofollow noreferrer">64GB of storage</a> instead of 32. It comes to $380</p>

                <h2>Initial Set-Up</h2>

                <p>When you first get the machine (especially for a first time Chrome OS user), here are some steps to start with (after your google account is connected)</p>

                <ol className="list-decimal list-inside m-2">
                    <li>Make sure to go through all Chrome OS and all Play Store updates. You may need to reboot a few times.</li>
                    <li>Optional: <a className="underline focus:ring-2" href="https://support.google.com/chromebook/answer/10364515?hl=en" rel="nofollow noreferrer">Set-up a PIN</a> instead of using to use your login/pass all the time (though this is less secure).</li>
                    <li>If your using external storage, <a className="underline focus:ring-2" href="https://www.howtogeek.com/316056/how-to-get-android-apps-to-see-external-storage-on-chromebooks/">How to Get Android Apps to See External Storage on Chromebooks</a> by How To Geek has an excellent tutorial to get you set up.</li>
                    <li><a className="underline focus:ring-2" href="https://chrome.google.com/webstore/category/collection/chrome-dev-tools-extensions?hl=en">Google Chrome Dev Tool Extensions:</a></li>
                </ol>

                <h2>Enabling Linux Development Environment</h2>
                <p>For this section, you need Administrator access, so you may not be able to use with a school or work machine without permission.</p>

                <p>First, Google's guide (section Turn on Linux) to <a className="underline focus:ring-2" href="https://www.howtogeek.com/316056/how-to-get-android-apps-to-see-external-storage-on-chromebooks/">Set up Linux on your Chromebook</a></p>

                <iframe src="https://player.vimeo.com/video/725837207?h=e4d9819af7" allow="fullscreen" allowFullScreen title="Video demo: Turning on your linux environment"></iframe>

                <p>Once its successfully installed, make a <a className="underline focus:ring-2" href="https://support.google.com/chromebook/answer/9592813?hl=en&ref_topic=3415446">back-up of your environment</a> (this way if something goes wrong, you can restore).</p>

                <iframe src="https://player.vimeo.com/video/725837231?h=4c2c805c44" allow="fullscreen" allowFullScreen title="Backing Up your linux environment to Google Drive"></iframe>

                <p>Check out the <a className="underline focus:ring-2" href="https://support.google.com/chromebook/answer/10057656?hl=en&ref_topic=3415446">Port-Forwarding</a> guide if you want to see on other devices.</p>

                <h3>Managing linux &amp; command line instals</h3>
                <p>Now, open your apps launchpad, and in the Linux folder, click "Terminal", then run the below commands to update the files in the Linux Environment.</p>
                
                <PrismCode
                    code={code}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Once everything is finished, right click on the terminal icon in the shelf, and click "Shut down Linux".</p>

                <p>If you want to upgrade your Linux container (to the next version), or to try to fix some install issues, use the following command:</p>

                <PrismCode
                    code={code2}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>The version of linux being used is called Debian, so if your familiar with those apps, and have specific programs or program managers, follow the debian guide/practices to install a program, such as the below command to install NodeJS:</p>
                <PrismCode
                    code={code3}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Here is a video demo of installing VS code using the official debian file.</p>
                <iframe src="https://player.vimeo.com/video/725837231?h=4c2c805c44" allow="fullscreen" allowFullScreen title="Video demo: Installing VS Code on Chromebook"></iframe>
                <h3>Installing a Package Manager</h3>
                <p>A popular package manager is called "FlatPak", they have extra programs you can install, including a GUI/Graphic app to search for and install programs.</p>
                <p>Here are the steps to install Flatpak:</p>
                <ol className="list-decimal list-inside m-2">
                    <li>Follow the official documentation (starting at step 2): <a className="underline focus:ring-2" href="https://flatpak.org/setup/Chrome%20OS">Chrome OS Quick Setup</a>
                        <iframe src="https://player.vimeo.com/video/725837334?h=0289253177" allow="fullscreen" allowFullScreen title="Video demo: Installing Flatpak and GUI"></iframe>
                    </li>
                    <li>If you want to use a GUI to install apps, run this command:
                        <PrismCode
                            code={code4}
                            language="shell-session"
                            plugins={["line-numbers"]}
                        />

                        <p>Using the package manager to find software:</p>
                        <iframe src="https://player.vimeo.com/video/725837422?h=4b76fd2030" allow="fullscreen" allowFullScreen title="Video demo: Using the package manager"></iframe>
                    </li>
                    <li>Alternatively, you can search <a className="underline focus:ring-2" href="https://flathub.org/">flathub.org</a>, and install via the command line. The first command below installs Visual Studio Code, while the second one runs the program.
                        <PrismCode
                            code={code5}
                            language="shell-session"
                            plugins={["line-numbers"]}
                        />
                    </li>
                </ol>

                <h3>Removing Linux</h3>
                <p>Check out the section <a className="underline focus:ring-2" href="https://support.google.com/chromebook/answer/9145439?hl=en" rel="nofollow noreferrer">"Turn Off Linux"</a> for details to completely remove linux and its files.</p>
                <iframe src="https://player.vimeo.com/video/725837496?h=07168ac02d" allow="fullscreen" allowFullScreen title="Video demo: Turn Off Linux"></iframe>

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://chromeos.dev/en/linux/setup" rel="nofollow noreferrer">Linux Set-Up</a></li>
                    <li><a className="underline focus:ring-2" href="https://code.visualstudio.com/blogs/2020/12/03/chromebook-get-started#_enable-linux-on-your-chromebook " rel="nofollow noreferrer">Official Linux install guide from Microsoft</a></li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/com.visualstudio.code" rel="nofollow noreferrer">Flatpak: Visual Studio Code</a></li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/com.github.alecaddd.sequeler" rel="nofollow noreferrer">Flatpak: Sequeler</a> (sql client)</li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/org.kde.kdenlive" rel="nofollow noreferrer">Flatpak: Kdenlive</a> (video Editor)</li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/fr.handbrake.ghb" rel="nofollow noreferrer">Flatpak: HandBrake</a></li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/com.google.AndroidStudio" rel="nofollow noreferrer">Flatpak: Android Studio</a></li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/com.boxy_svg.BoxySVG" rel="nofollow noreferrer">Flatpak: Boxy SVG</a> (Scalable Vector Graphics editor)</li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/io.github.shiftey.Desktop" rel="nofollow noreferrer">Flatpak: GitHub Desktop</a></li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/com.github.gijsgoudzwaard.image-optimizer" rel="nofollow noreferrer">Flatpak: Image Optimizer</a></li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/com.jetbrains.IntelliJ-IDEA-Community" rel="nofollow noreferrer">Flatpak: IntelliJ IDEA Community</a> (Java IDE)</li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/com.jetbrains.PyCharm-Community" rel="nofollow noreferrer">Flatpak: PyCharm-Community</a> (Python IDE)</li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/org.apache.netbeans" rel="nofollow noreferrer">Flatpak: NetBeans</a></li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/net.poedit.Poedit" rel="nofollow noreferrer">Flatpak: POEdit</a> (Translation Editor)</li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/org.mozilla.firefox" rel="nofollow noreferrer">Flatpak: FireFox</a></li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/details/com.brave.Browser" rel="nofollow noreferrer">Flatpak: Brave</a> (browser)</li>
                    <li><a className="underline focus:ring-2" href="https://flathub.org/apps/category/Development" rel="nofollow noreferrer">Flatpak: Entire Dev Tool Catalog</a></li>
                </ul>
            </section>
        </Layout>
    )
}
