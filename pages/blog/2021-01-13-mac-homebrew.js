import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'
import { PrismCode } from '../../components/prism'

const code = `
xcode-select --install
sudo xcodebuild -license
`.trim();

const code2 = `
ruby -v
`.trim();

const code3 = `
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
`.trim();

const code4 = `
brew doctor
`.trim();

const code5 = `
brew update
brew upgrade
`.trim();

const code6 = `
brew cleanup
`.trim();

const code7 = `
brew install wget
`.trim();

const code8 = `
brew install wget node python@3
`.trim();

const code9 = `
brew tap homebrew-ffmpeg/ffmpeg
brew install homebrew-ffmpeg/ffmpeg/ffmpeg
`.trim();

const code10 = `
brew tap mongodb/brew
brew install mongodb-community
`.trim();

const code11 = `
brew services start mongodb/brew/mongodb-community
`.trim();

const code12 = `
mongod --config /usr/local/etc/mongod.conf
`.trim();

const code13 = `
brew tap homebrew/cask-versions
`.trim();

const code14 = `
brew install --cask firefox
`.trim();

const code15 = `
brew install ruby
`.trim();

const code16 = `
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
exec zsh
`.trim();

const code17 = `
gem update --system
gem update
`.trim();

// const blogLoader = ({ src, width, quality }) => {
//     return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/blog${src}?w=${width}&q=${quality || 75}`
// }

export default function MacHomebrew() {
    const POST_TITLE = 'Installing Homebrew and Fixing Ruby on your Mac';
    const POST_DESCRIPTION = 'This post describes how to install homebrew, as as well as casks (software applications).';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This post describes how to install homebrew, as as well as casks (software applications).</p>
                <p><small className="alert-warning">This post is an updated version from: <a className="underline focus:ring-2" href="https://web.archive.org/web/20210318175731/https://jenntesolin.com/blog/2019/12/10/mac-ruby/">Dec. 10, 2019</a>.</small></p>
                <h2>Getting ready</h2>

                <h3>Step 1: Open Your Terminal program</h3>
                <p>Search in launchpad or spotlight for &quot;Terminal.app&quot;</p>

                <h3>Step 2: Accept the license agreements</h3>
                <p>Copy and paste the below commands in your terminal. Be sure to read and accept the agreements.</p>
                <PrismCode
                    code={code}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h3>Step 3: Check if Ruby is installed</h3>
                <p>Make sure that you can run ruby from command line by typing:</p>
                <PrismCode
                    code={code2}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h2>Install homebrew</h2>
                <p>Homebrew is basically a package manager for the Mac, and in this being used to fix the default Ruby version that comes with the Mac. It will also be used further into the tutorial to install other development items.</p>
                <Image
                    //loader={blogLoader}
                    src="/homebrew-site_mknkil.png"
                    alt="Screenshot "
                    width={700}
                    height={1139}
                />
                <h3>Copy Install Script</h3>
                <p>Go to the homebrew site (<a className="underline focus:ring-2" href="https://brew.sh/" rel="nofollow noreferrer noopener">brew.sh</a>) and check out the latest download code and run in in the terminal. It should look something like this:</p>
                <PrismCode
                    code={code3}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />
                <p>Once the install has completed, its best to run the below commands to make sure your installation is okay and has the latest files.</p>
                <PrismCode
                    code={code4}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h3>Updating Homebrew packages</h3>
                <p>To update packages, you will need to run an update, and upgrade like below:</p>
                <PrismCode
                    code={code5}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Once in awhile you may want to also clean up unneeded files by this command:</p>
                <PrismCode
                    code={code6}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h3>Install some brew packages</h3>
                <p>You can install a package (called Formulae) either in bulk or one at a time.</p>
                <p>One at a time:</p>
                <PrismCode
                    code={code7}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Or many at once:</p>
                <PrismCode
                    code={code8}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h4>ffmpeg</h4>
                <p>ffmpeg: is a great library for converting videos, and more. To install the with the default settings:</p>
                <PrismCode
                    code={code9}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />
                <p>Check out the homebrew github repo to see the options: <a className="underline focus:ring-2" href="https://github.com/homebrew-ffmpeg/homebrew-ffmpeg/" rel="nofollow noreferrer">ffmpeg Github repository</a></p>

                <h4>Mongo</h4>
                <p>Installing the Mongo Database is similar to ffmpeg. Run the following steps:</p>
                <PrismCode
                    code={code10}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>To run as background service:</p>
                <PrismCode
                    code={code11}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Run on demand (in terminal):</p>
                <PrismCode
                    code={code12}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h3>Enable and Install Casks</h3>
                <p>Casks is basically software that you can install directly from homebrew, instead of going to a site and downloading a file. I prefer casks, as it will also run a sha check (if available), and will output errors to your screen (if issues).</p>
                <PrismCode
                    code={code13}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Unfortunately, I could not find a way to bulk install casks anymore, so you will need to run them one at a time (replacing &quot;firefox&quot; with the formulae name).</p>
                <PrismCode
                    code={code14}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>A list of great casks are below. To find more, the homebrew site has a huge database of ones available: <a className="underline focus:ring-2" href="https://formulae.brew.sh/" rel="nofollow noreferrer">Homebrew formulae</a></p>

                <p>For some installations, if they fail, retry after you enable it in: System Preferences → Security &amp; Privacy → General.</p>
                <ul className="list-disc list-inside m-2">
                    <li>visual-studio</li>
                    <li>figma</li>
                    <li>valentina-studio</li>
                    <li>virtualbox</li>
                    <li>virtualbox-extension-pack</li>
                    <li>github</li>
                    <li>vlc</li>
                    <li>handbrake</li>
                    <li>iterm2</li>
                    <li>spotify</li>
                    <li>sequel-pro</li>
                    <li>firefox</li>
                    <li>keepassxc</li>
                    <li>visual-studio-code</li>
                    <li>calibre</li>
                    <li>appcleaner</li>
                    <li>tor-browser</li>
                    <li>jetbrains-toolbox</li>
                    <li>xampp</li>
                    <li>google-chrome</li>
                    <li>dash</li>
                    <li>netbeans</li>
                    <li>adoptopenjdk</li>
                    <li>postman</li>
                </ul>

                <p>If you want to run multiple Java Versions, check out this guide: <a className="underline focus:ring-2" href="https://dev.to/gabethere/installing-java-on-a-mac-using-homebrew-and-jevn-12m8" rel="nofollow noreferrer">Installing Java on a Mac using Homebrew and jevn-12m8</a></p>
                <h3>Update Ruby and installed gems.</h3>
                <p>Run the command:</p>
                <PrismCode
                    code={code15}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Next, make sure you add Ruby to your shell configuration. Below is the shell for the default in Big Sur:</p>
                <PrismCode
                    code={code16}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p><p><kbd>exec zsh</kbd>: will restart your terminal so the path kicks in. If you do not ant to run this, simple type <kbd>exit</kbd>, then quit your terminal application and reopen it.</p>
                    <p>Next, update your ruby gems:</p></p>
                <PrismCode
                    code={code17}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Or if you want to have multiple versions, follow this great digital ocean guide: <a className="underline focus:ring-2" href="https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-macos" rel="nofollow noreferrer">https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-macos</a></p>

                <h2>Resources:</h2>
                <ul className="list-disc list-inside m-2">
                    <li><a className="underline focus:ring-2" href="https://stackoverflow.com/a/58316584" rel="nofollow noreferrer">Stack Overflow post: fixing Ruby</a></li>
                </ul>
            </section>
        </Layout>
    )
}
