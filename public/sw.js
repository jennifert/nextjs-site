if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,t,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/BingSiteAuth.xml",revision:"48510fe94841e0f189eab42be34272b4"},{url:"/Japan_Trip_2011.pdf",revision:"162335a55b62f9e20b099cae6615c67b"},{url:"/_next/static/Vi98xwjSjCBOKsJb8cz1l/_buildManifest.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/Vi98xwjSjCBOKsJb8cz1l/_ssgManifest.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/97760c4cbb76a32fa66096a1e5646dd074dcfeff.a70de27f0dfcabf33cb7.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/a15f695699936020d0b57ed2e34849a0b5661f0e.20e80e3e21951c1b1215.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/commons.074f7794364aa80317a3.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/main-de3a2b791e862b1cfab4.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/404-31630403c900faecebba.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/500-4eb38fe25e26b1abd0ed.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/_app-f85dfe1c70cdf2912c0a.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/_error-95fe16bb024fbb014d19.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/blog-0171f69827c8e84e7517.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/blog/2012-11-08-japan-trip-2011-be822f196f82c150178c.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/blog/2013-04-10-bootstrap-and-asp-net-4-0-master-pages-a51a39cf266b721e0a42.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/blog/2013-05-23-jquery-time-picker-issues-and-net-e3d26d72d03732d1e5bf.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/blog/template-aea6d6f78633b434bb73.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/gallery-ed6c90349057cee5c42e.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/index-c9b17702ffaa8dbeed5a.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/pages/portfolio-d744af8fd9ffc1e11175.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/polyfills-e893e522365b6e0e5fa4.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/css/8b621005781bc9929a9b.css",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/_next/static/css/b182eed4f5479d6e529d.css",revision:"Vi98xwjSjCBOKsJb8cz1l"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/feed.xml",revision:"48d562fa4d3224fdf1d569e66ffc5a47"},{url:"/google720ae23eb610f397.html",revision:"b656528f4b8ad1c3a40974b2bd449ef3"},{url:"/humans.txt",revision:"d45e9ddf94f2f2653c4af319bb95ea50"},{url:"/manifest.json",revision:"319085021f7000d71b795d54d1b0398f"},{url:"/robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"/sitemap.xml",revision:"6c5b5f8002b87f664b301b42c9a13fc2"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
