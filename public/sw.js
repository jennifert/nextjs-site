if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>a(e,n),o={module:{uri:n},exports:i,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/BingSiteAuth.xml",revision:"48510fe94841e0f189eab42be34272b4"},{url:"/Japan_Trip_2011.pdf",revision:"162335a55b62f9e20b099cae6615c67b"},{url:"/_next/static/Rp4RTH9YXLScnWJBNEFrd/_buildManifest.js",revision:"2a3f5749c429c854bb82ee55cc375d09"},{url:"/_next/static/Rp4RTH9YXLScnWJBNEFrd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1245-664ed9d5c6ca8cfd.js",revision:"664ed9d5c6ca8cfd"},{url:"/_next/static/chunks/490.522c06a4229dbae9.js",revision:"522c06a4229dbae9"},{url:"/_next/static/chunks/5168-9946288722251bb0.js",revision:"9946288722251bb0"},{url:"/_next/static/chunks/8537.fb3e9dab87a7b88d.js",revision:"fb3e9dab87a7b88d"},{url:"/_next/static/chunks/framework-840cff9d6bb95703.js",revision:"840cff9d6bb95703"},{url:"/_next/static/chunks/main-c4868712c613a666.js",revision:"c4868712c613a666"},{url:"/_next/static/chunks/pages/404-16d46cd4b54a1dba.js",revision:"16d46cd4b54a1dba"},{url:"/_next/static/chunks/pages/500-c409e723f49290e6.js",revision:"c409e723f49290e6"},{url:"/_next/static/chunks/pages/_app-52ce643734cac4a7.js",revision:"52ce643734cac4a7"},{url:"/_next/static/chunks/pages/_error-dace7ce0691acc17.js",revision:"dace7ce0691acc17"},{url:"/_next/static/chunks/pages/blog-ab435fd701dde99e.js",revision:"ab435fd701dde99e"},{url:"/_next/static/chunks/pages/blog/2012-11-08-japan-trip-2011-9adb93e0dadbe13f.js",revision:"9adb93e0dadbe13f"},{url:"/_next/static/chunks/pages/blog/2013-04-10-bootstrap-and-asp-net-4-0-master-pages-9ab1fe65127894ac.js",revision:"9ab1fe65127894ac"},{url:"/_next/static/chunks/pages/blog/2013-05-23-jquery-time-picker-issues-and-net-377939553320646c.js",revision:"377939553320646c"},{url:"/_next/static/chunks/pages/blog/2013-05-23-wordpress-quicktip-display-x-number-of-posts-outside-your-blog-c64972649b050afa.js",revision:"c64972649b050afa"},{url:"/_next/static/chunks/pages/blog/2013-05-24-ios-7-wishlist-ca45f0fe89055cb8.js",revision:"ca45f0fe89055cb8"},{url:"/_next/static/chunks/pages/blog/2013-05-25-php-and-utf8-encoding-issues-tips-and-tricks-to-resolve-08e6796ebac7d8ba.js",revision:"08e6796ebac7d8ba"},{url:"/_next/static/chunks/pages/blog/2013-07-06-quick-tips-firefox-notepad-0ddbe79cc0d18f2d.js",revision:"0ddbe79cc0d18f2d"},{url:"/_next/static/chunks/pages/blog/2013-08-11-quick-tips-mysql-case-d1e9b5cf1a77949e.js",revision:"d1e9b5cf1a77949e"},{url:"/_next/static/chunks/pages/blog/2013-08-26-quick-tip-mysql-concat-3339c2d5f454b977.js",revision:"3339c2d5f454b977"},{url:"/_next/static/chunks/pages/blog/2013-09-05-a-look-at-raspmbc-video-streaming-faeab2461a5aa798.js",revision:"faeab2461a5aa798"},{url:"/_next/static/chunks/pages/blog/2013-09-05-raspberry-pi-list-of-projects-and-resources-36a42d3aee4acd81.js",revision:"36a42d3aee4acd81"},{url:"/_next/static/chunks/pages/blog/2013-10-23-quick-tip-mysql-replace-1801bb69885a587b.js",revision:"1801bb69885a587b"},{url:"/_next/static/chunks/pages/blog/2013-11-05-bootstrap-3-and-google-maps-36a2e407ec1bc587.js",revision:"36a2e407ec1bc587"},{url:"/_next/static/chunks/pages/blog/2013-11-06-quick-tip-using-font-awesome-with-bootstrap-3-c72aaff2eff9c0b0.js",revision:"c72aaff2eff9c0b0"},{url:"/_next/static/chunks/pages/blog/2013-11-06-using-require-js-with-bootstrap-google-maps-and-more-0075ea87480fb6b4.js",revision:"0075ea87480fb6b4"},{url:"/_next/static/chunks/pages/blog/2013-11-07-asp-net-menu-control-styling-with-bootstrap-nav-fad449b500d8a5f3.js",revision:"fad449b500d8a5f3"},{url:"/_next/static/chunks/pages/blog/2014-01-09-fixing-ubuntu-12-04-network-issue-3215484c4292f95e.js",revision:"3215484c4292f95e"},{url:"/_next/static/chunks/pages/blog/2014-01-20-wordpress-development-tips-09a9cd957e98924c.js",revision:"09a9cd957e98924c"},{url:"/_next/static/chunks/pages/blog/2014-03-17-setting-up-bluetooth-on-the-raspberry-pi-ea11ffe264467e1d.js",revision:"ea11ffe264467e1d"},{url:"/_next/static/chunks/pages/blog/2014-03-28-sticky-footer-with-fixed-navbar-example-with-bootstrap-3-and-emmet-c7016c18fcf20825.js",revision:"c7016c18fcf20825"},{url:"/_next/static/chunks/pages/blog/2014-04-24-rasplex-media-server-2c4f82369efcbd73.js",revision:"2c4f82369efcbd73"},{url:"/_next/static/chunks/pages/blog/2014-09-24-Moving-a-WordPress-Blog-a07e582c8908e94c.js",revision:"a07e582c8908e94c"},{url:"/_next/static/chunks/pages/blog/2015-03-14-IIS7-Development-Environment-04ae89dda96748af.js",revision:"04ae89dda96748af"},{url:"/_next/static/chunks/pages/blog/2015-05-22-Jekyll-Custom-Easy-Search-jQuery-1ad0476c735d66d6.js",revision:"1ad0476c735d66d6"},{url:"/_next/static/chunks/pages/blog/2015-08-08-jekyll-config-file-734cb5c741ce0575.js",revision:"734cb5c741ce0575"},{url:"/_next/static/chunks/pages/blog/2015-10-28-fix-jekyll-pagination-upgrade-to-3-0c09d95947476bde.js",revision:"0c09d95947476bde"},{url:"/_next/static/chunks/pages/blog/2016-02-04-jekyll-on-azure-or-github-4c8abb684e1d293e.js",revision:"4c8abb684e1d293e"},{url:"/_next/static/chunks/pages/blog/2016-06-12-itunes-view-change-a1b3cbec49510744.js",revision:"a1b3cbec49510744"},{url:"/_next/static/chunks/pages/blog/2016-06-14-compare-integars-php-705520f1cdcffc94.js",revision:"705520f1cdcffc94"},{url:"/_next/static/chunks/pages/blog/2016-08-24-5-console-additions-pokemon-go-088914741dfcbb6b.js",revision:"088914741dfcbb6b"},{url:"/_next/static/chunks/pages/blog/2017-01-06-6-library-resources-1262e38c977860e0.js",revision:"1262e38c977860e0"},{url:"/_next/static/chunks/pages/blog/2017-01-07-word-press-and-campaign-monitor-f94780d9976a42ee.js",revision:"f94780d9976a42ee"},{url:"/_next/static/chunks/pages/blog/2017-05-27-highcharts-new-window-69a2078d3e17cc56.js",revision:"69a2078d3e17cc56"},{url:"/_next/static/chunks/pages/blog/2018-04-18-installing-node-js-and-grunt-4bbce0dc5b6afb93.js",revision:"4bbce0dc5b6afb93"},{url:"/_next/static/chunks/pages/blog/2018-09-26-using-ios-and-android-together-86c9e3b84f8a792e.js",revision:"86c9e3b84f8a792e"},{url:"/_next/static/chunks/pages/blog/2019-12-11-Jekyll-Set-Up-Publish-f025912fa8fb6b5b.js",revision:"f025912fa8fb6b5b"},{url:"/_next/static/chunks/pages/blog/2019-12-12-git-github-994252986f52fe2e.js",revision:"994252986f52fe2e"},{url:"/_next/static/chunks/pages/blog/2020-10-14-great-apps-and-programs-for-web-development-0e0f67e3c708d62b.js",revision:"0e0f67e3c708d62b"},{url:"/_next/static/chunks/pages/blog/2021-01-13-mac-homebrew-2ae11e9d7d2a0033.js",revision:"2ae11e9d7d2a0033"},{url:"/_next/static/chunks/pages/blog/2021-03-11-jekyll-on-digital-ocean-b9c8b013f2753dd6.js",revision:"b9c8b013f2753dd6"},{url:"/_next/static/chunks/pages/blog/2021-08-26-website-revamp-60ae1d59f86306b9.js",revision:"60ae1d59f86306b9"},{url:"/_next/static/chunks/pages/blog/2022-06-29-chromebook-dev-d5ddc6397220bd07.js",revision:"d5ddc6397220bd07"},{url:"/_next/static/chunks/pages/blog/template-b9faa3f631b4fbc1.js",revision:"b9faa3f631b4fbc1"},{url:"/_next/static/chunks/pages/gallery-4379509c9701477a.js",revision:"4379509c9701477a"},{url:"/_next/static/chunks/pages/index-3075c2a7b4dc684b.js",revision:"3075c2a7b4dc684b"},{url:"/_next/static/chunks/pages/portfolio-fe9f38341a3b6fef.js",revision:"fe9f38341a3b6fef"},{url:"/_next/static/chunks/pages/series-a20da6e68c519cca.js",revision:"a20da6e68c519cca"},{url:"/_next/static/chunks/pages/sitemap-573c1bc345a07d76.js",revision:"573c1bc345a07d76"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ae7934f193076986.js",revision:"ae7934f193076986"},{url:"/_next/static/css/9ae4a9fd82bd530c.css",revision:"9ae4a9fd82bd530c"},{url:"/_next/static/css/ddda861077f3cdb9.css",revision:"ddda861077f3cdb9"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/feed.xml",revision:"b6be490c3df4956ea85a0cf3b8896eb5"},{url:"/google720ae23eb610f397.html",revision:"b656528f4b8ad1c3a40974b2bd449ef3"},{url:"/humans.txt",revision:"7a0fe7c61ce22dfcbc396ebf8b185bce"},{url:"/manifest.json",revision:"319085021f7000d71b795d54d1b0398f"},{url:"/robots.txt",revision:"2a28505ae541408589cf0e11f873f4d6"},{url:"/sitemap.xml",revision:"677bfe16940af78c774db77c584f2374"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
