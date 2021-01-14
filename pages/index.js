import Nav from '../components/nav'

function HomePage() {
    return (
        <div>
            <header>
                <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>

                <h1 className="text-center">
                    JennTesolin.com
                </h1>

                <Nav />
            </header>

            <main id="main-content">
                <h2>Welcome!</h2>
                <p>This site is part blog to help beginners to web development, and partially a portfolio. </p>
                <p>My name is Jennifer Tesolin, and I have been a professional web developer since 2006 (and as a
                hobbyist since since 2000). Some web technologies I have worked with include PHP, ASP.net, JavaScript,
                Wordpress, Digital Ocean, MERN stack, and HTML emails. Currently, I am learning Mern Stack, Python, CSS3
            &mp; SASS, as well as HTML5 technologies.</p>
                <p>Some technologies I am currently learning are: the MERN stack, css pre-processors, html 5 + css 3, and
            the latest Php and .Net versions.</p>
                <p>Other hobbies I enjoy are traveling, visiting with family and friends, watching Anime, and tinkering with
            my Raspberry Pi computer.</p>
            </main>

            <section id="latest-portfolio" aria-labelledby="about-portfolio">
                <h2 id="about-portfolio">Latest Portfolio Pieces</h2>
                <div class="portfolio-block">
                    <h3>Archer CMS</h3>
                    <p>My project for the FullStack Master Class at Hacker You. Its a MERN Stack CMS.</p>
                    <p><a href="https://github.com/jennifert/archer-cms" target="_blank" rel="nofollow">View repo</a> | <a
                        href="https://archer-cms.app/" target="_blank" rel="nofollow">View app</a></p>
                </div>
                <div class="portfolio-block">
                    <h3>Beginner Examples</h3>
                    <p>JavaScript demos to get started. Topics include: Google Maps, Bootstrap, Fetch, TypeScript, with more coming soon.</p>
                    <p><a href="https://github.com/jennifert/JavaScript-Demos" target="_blank" rel="nofollow">View repo</a><br/>
                    <a href="#">View demos</a></p>  
                </div>
                <div class="portfolio-block">
                    <h3>Slim API to Search YAML</h3>
                    <p>
                        Description here.
                    </p>
                    <p><a href="#" target="_blank" rel="nofollow">View repo</a></p>
                </div>
                <p>View more <a href="/portfolio">Portfolio</a> pieces</p>
             </section>

            <section id="latest-posts" aria-labelledby="post-header">
                <h2 id="post-header">Latest blog posts</h2>
                <div class="blog-block">
                    <h3>Using iOS and Android devices together.</h3>
                    <div class="post-metadata">
                        <span class="post-date">Sep 26, 2018</span>
                        <span class="post-category">Tutorial</span>
                    </div>
                    <p>Using an android in an Apple environment can be a bit tricky, but here are some tricks and resources to help you out. This post is an update to one titled "Moving from an iOS Device to Android iCloud)".</p>
                    <p><a href="/blog/2018/09/26/using-ios-and-android-together/">Read More</a></p>
                </div>
                <div class="blog-block">
                    <h3>Installing Node JS and Grunt</h3>
                    <div class="post-metadata">
                        <span class="post-date">Apr 18, 2018</span>
                        <span class="post-category">Tutorial</span>
                    </div>
                    <p>This tutorial focuses on installing the platform, and provides resources for using Grunt</p>
                    <p><a href="/blog/2018/04/18/installing-node-js-and-grunt/">Read More</a></p>
                </div>
                <div class="blog-block">
                    <h3>Quick Tip: Highcharts credit in a new window</h3>
                    <div class="post-metadata">
                        <span class="post-date">May 28, 2017</span>
                        <span class="post-category">Tutorial</span>
                    </div>
                    <p>Here is a great fiddle by Torstein Hønsi, that shows how to have highcharts credits open in a new window/tab.</p>
                    <p><a href="/blog/2017/05/28/basic-highcharts-rightclick/">Read More</a></p>
                </div>
            </section>

            <footer>
                <nav aria-label="Social Media">
                    <ul class="social-icons">
                        <li>
                            <a class="url" href="https://github.com/jennifert?tab=repositories" target="_blank" rel="nofollow">
                                <i class="fa fa-github fa-3x"></i>
                            </a>
                        </li>
                        <li>
                            <a class="url" href="https://twitter.com/jenntes" target="_blank" rel="nofollow">
                                <i class="fa fa-twitter fa-3x"></i>
                            </a>
                        </li>
                        <li>
                            <a class="url" href="feed.xml" rel="nofollow">
                                <i class="fa fa-rss fa-3x"></i>
                            </a>
                        </li>
                        <li>
                            <a class="url" href="http://ca.linkedin.com/pub/jennifer-tesolin/2b/5bb/3a6" target="_blank"
                                rel="nofollow">
                                <i class="fa fa-linkedin fa-3x"></i>
                            </a>
                        </li>
                        <li>
                            <a class="u-email url" href="mailto:jtesolin@gmail.com" rel="me">
                                <i class="fa fa-envelope fa-3x"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <p>&copy; <span id="year"></span> Jennifer Tesolin.</p>
                <p><small>Header Image By: <a href="https://unsplash.com/@scottwebb" target="_blank" rel="nofollow">Scott
                Webb</a></small></p>
            </footer>
        </div>
    )
}

export default HomePage
/*
<div className="py-20">
                    <h1 className="text-5xl text-center text-accent-1">
                        JennTesolin.com
                    </h1>
                </div>
*/