if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const o=e=>a(e,n),r={module:{uri:n},exports:i,require:o};s[n]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(t(...e),i)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/BingSiteAuth.xml",revision:"48510fe94841e0f189eab42be34272b4"},{url:"/Japan_Trip_2011.pdf",revision:"162335a55b62f9e20b099cae6615c67b"},{url:"/_next/static/chunks/1119-09c2c495f9431ce7.js",revision:"09c2c495f9431ce7"},{url:"/_next/static/chunks/5168-3eed8054f844bed7.js",revision:"3eed8054f844bed7"},{url:"/_next/static/chunks/9651.5cf44c20b8a8d4c4.js",revision:"5cf44c20b8a8d4c4"},{url:"/_next/static/chunks/framework-d51ece3d757c7ed2.js",revision:"d51ece3d757c7ed2"},{url:"/_next/static/chunks/main-7b6faf94c757dace.js",revision:"7b6faf94c757dace"},{url:"/_next/static/chunks/pages/404-1a375fe5f0097834.js",revision:"1a375fe5f0097834"},{url:"/_next/static/chunks/pages/500-f25b59bc110a561f.js",revision:"f25b59bc110a561f"},{url:"/_next/static/chunks/pages/_app-5d09eb568cfa71c0.js",revision:"5d09eb568cfa71c0"},{url:"/_next/static/chunks/pages/_error-393a3acb54074d9f.js",revision:"393a3acb54074d9f"},{url:"/_next/static/chunks/pages/blog-96a4676c6f707107.js",revision:"96a4676c6f707107"},{url:"/_next/static/chunks/pages/blog/2012-11-08-japan-trip-2011-710e96c0c21a629c.js",revision:"710e96c0c21a629c"},{url:"/_next/static/chunks/pages/blog/2013-04-10-bootstrap-and-asp-net-4-0-master-pages-cb72a66071e8faea.js",revision:"cb72a66071e8faea"},{url:"/_next/static/chunks/pages/blog/2013-05-23-jquery-time-picker-issues-and-net-e31494caf83b0947.js",revision:"e31494caf83b0947"},{url:"/_next/static/chunks/pages/blog/2013-05-23-wordpress-quicktip-display-x-number-of-posts-outside-your-blog-d85f8839e25211a1.js",revision:"d85f8839e25211a1"},{url:"/_next/static/chunks/pages/blog/2013-05-24-ios-7-wishlist-82543963c9748e11.js",revision:"82543963c9748e11"},{url:"/_next/static/chunks/pages/blog/2013-05-25-php-and-utf8-encoding-issues-tips-and-tricks-to-resolve-88ed3abdf53c4c33.js",revision:"88ed3abdf53c4c33"},{url:"/_next/static/chunks/pages/blog/2013-07-06-quick-tips-firefox-notepad-d56445d452ff88ec.js",revision:"d56445d452ff88ec"},{url:"/_next/static/chunks/pages/blog/2013-08-11-quick-tips-mysql-case-72f64cc40ddda5dd.js",revision:"72f64cc40ddda5dd"},{url:"/_next/static/chunks/pages/blog/2013-08-26-quick-tip-mysql-concat-1d36d3b75d047d46.js",revision:"1d36d3b75d047d46"},{url:"/_next/static/chunks/pages/blog/2013-09-05-a-look-at-raspmbc-video-streaming-1c6267ee04bb4c5d.js",revision:"1c6267ee04bb4c5d"},{url:"/_next/static/chunks/pages/blog/2013-09-05-raspberry-pi-list-of-projects-and-resources-b47f7ab477d69196.js",revision:"b47f7ab477d69196"},{url:"/_next/static/chunks/pages/blog/2013-10-23-quick-tip-mysql-replace-ae3f2c260b0d1f44.js",revision:"ae3f2c260b0d1f44"},{url:"/_next/static/chunks/pages/blog/2013-11-05-bootstrap-3-and-google-maps-1cff5d08259fd5f2.js",revision:"1cff5d08259fd5f2"},{url:"/_next/static/chunks/pages/blog/2013-11-06-quick-tip-using-font-awesome-with-bootstrap-3-a6764f06b6c9e890.js",revision:"a6764f06b6c9e890"},{url:"/_next/static/chunks/pages/blog/2013-11-06-using-require-js-with-bootstrap-google-maps-and-more-7205b7ade1d45d2a.js",revision:"7205b7ade1d45d2a"},{url:"/_next/static/chunks/pages/blog/2013-11-07-asp-net-menu-control-styling-with-bootstrap-nav-c5187f40c29cf773.js",revision:"c5187f40c29cf773"},{url:"/_next/static/chunks/pages/blog/2014-01-09-fixing-ubuntu-12-04-network-issue-fad51aafe5e2fd14.js",revision:"fad51aafe5e2fd14"},{url:"/_next/static/chunks/pages/blog/2014-01-20-wordpress-development-tips-b2bfd38037c97cc3.js",revision:"b2bfd38037c97cc3"},{url:"/_next/static/chunks/pages/blog/2014-03-17-setting-up-bluetooth-on-the-raspberry-pi-2319b96d5e9b2eeb.js",revision:"2319b96d5e9b2eeb"},{url:"/_next/static/chunks/pages/blog/2014-03-28-sticky-footer-with-fixed-navbar-example-with-bootstrap-3-and-emmet-8c189ffa694e5935.js",revision:"8c189ffa694e5935"},{url:"/_next/static/chunks/pages/blog/2014-04-24-rasplex-media-server-53dbbcb9f0551656.js",revision:"53dbbcb9f0551656"},{url:"/_next/static/chunks/pages/blog/2014-09-24-Moving-a-WordPress-Blog-8a65a00d02c8ccbb.js",revision:"8a65a00d02c8ccbb"},{url:"/_next/static/chunks/pages/blog/2015-03-14-IIS7-Development-Environment-160fb7ee52a606e4.js",revision:"160fb7ee52a606e4"},{url:"/_next/static/chunks/pages/blog/2015-05-22-Jekyll-Custom-Easy-Search-jQuery-38c7b4a255a5531c.js",revision:"38c7b4a255a5531c"},{url:"/_next/static/chunks/pages/blog/2015-08-08-jekyll-config-file-31c11525b3436ed5.js",revision:"31c11525b3436ed5"},{url:"/_next/static/chunks/pages/blog/2015-10-28-fix-jekyll-pagination-upgrade-to-3-1722775b61b78c83.js",revision:"1722775b61b78c83"},{url:"/_next/static/chunks/pages/blog/2016-02-04-jekyll-on-azure-or-github-c14f6f6195efb9f5.js",revision:"c14f6f6195efb9f5"},{url:"/_next/static/chunks/pages/blog/2016-06-12-itunes-view-change-e1447266a3443dcd.js",revision:"e1447266a3443dcd"},{url:"/_next/static/chunks/pages/blog/2016-06-14-compare-integars-php-293914ee22368451.js",revision:"293914ee22368451"},{url:"/_next/static/chunks/pages/blog/2016-08-24-5-console-additions-pokemon-go-c9a1447a9cb1a307.js",revision:"c9a1447a9cb1a307"},{url:"/_next/static/chunks/pages/blog/2017-01-06-6-library-resources-fba1c7d5abc9bf58.js",revision:"fba1c7d5abc9bf58"},{url:"/_next/static/chunks/pages/blog/2017-01-07-word-press-and-campaign-monitor-a09f2593e9475e9b.js",revision:"a09f2593e9475e9b"},{url:"/_next/static/chunks/pages/blog/2017-05-27-highcharts-new-window-6910d939587737ca.js",revision:"6910d939587737ca"},{url:"/_next/static/chunks/pages/blog/2018-04-18-installing-node-js-and-grunt-36303f8e43458a53.js",revision:"36303f8e43458a53"},{url:"/_next/static/chunks/pages/blog/2018-09-26-using-ios-and-android-together-bb732d71b8609c46.js",revision:"bb732d71b8609c46"},{url:"/_next/static/chunks/pages/blog/2019-12-11-Jekyll-Set-Up-Publish-8b79ce48e93d43cd.js",revision:"8b79ce48e93d43cd"},{url:"/_next/static/chunks/pages/blog/2019-12-12-git-github-7176745b48236290.js",revision:"7176745b48236290"},{url:"/_next/static/chunks/pages/blog/2020-10-14-great-apps-and-programs-for-web-development-2a7e37e08c93bc4e.js",revision:"2a7e37e08c93bc4e"},{url:"/_next/static/chunks/pages/blog/2021-01-13-mac-homebrew-602b7031536e5168.js",revision:"602b7031536e5168"},{url:"/_next/static/chunks/pages/blog/2021-03-11-jekyll-on-digital-ocean-2a5cfdc52f94420f.js",revision:"2a5cfdc52f94420f"},{url:"/_next/static/chunks/pages/blog/2021-08-26-website-revamp-10852e33f3888608.js",revision:"10852e33f3888608"},{url:"/_next/static/chunks/pages/blog/template-38c0092b9fee9ed9.js",revision:"38c0092b9fee9ed9"},{url:"/_next/static/chunks/pages/gallery-7b0edb781ff57bb6.js",revision:"7b0edb781ff57bb6"},{url:"/_next/static/chunks/pages/index-ffca37e5228aa8eb.js",revision:"ffca37e5228aa8eb"},{url:"/_next/static/chunks/pages/portfolio-1c683fa3ec911c0b.js",revision:"1c683fa3ec911c0b"},{url:"/_next/static/chunks/pages/series-bde867f57e1d2257.js",revision:"bde867f57e1d2257"},{url:"/_next/static/chunks/pages/sitemap-08483a6998751c67.js",revision:"08483a6998751c67"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-20ecf7f70dd4eaad.js",revision:"20ecf7f70dd4eaad"},{url:"/_next/static/css/9ae4a9fd82bd530c.css",revision:"9ae4a9fd82bd530c"},{url:"/_next/static/css/ba34188b280df8ac.css",revision:"ba34188b280df8ac"},{url:"/_next/static/wPg9FsopmtY_hNSccn2RM/_buildManifest.js",revision:"d1b736f82191a1e13cef36bf3e1c773b"},{url:"/_next/static/wPg9FsopmtY_hNSccn2RM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/feed.xml",revision:"ea15df42520032c1d7f8d677540392da"},{url:"/google720ae23eb610f397.html",revision:"b656528f4b8ad1c3a40974b2bd449ef3"},{url:"/humans.txt",revision:"7a0fe7c61ce22dfcbc396ebf8b185bce"},{url:"/manifest.json",revision:"319085021f7000d71b795d54d1b0398f"},{url:"/robots.txt",revision:"2a28505ae541408589cf0e11f873f4d6"},{url:"/sitemap.xml",revision:"93caf1be34445ecd147d219fe3da5ebd"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
