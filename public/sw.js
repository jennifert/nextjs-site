if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/BingSiteAuth.xml",revision:"48510fe94841e0f189eab42be34272b4"},{url:"/_next/static/NmojPO-u0ertpbpuYBk-R/_buildManifest.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/NmojPO-u0ertpbpuYBk-R/_ssgManifest.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/5cb1b92f6d6f050d8bd06d3744139c2b7547b252.5d5c69ca0c2ae2e3a42d.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/commons.d483af50518090fca4ef.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/main-562b6ec208d81930ece5.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/pages/404-9a225701f83c5fb6611f.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/pages/_app-bfd3570fd2d753e263eb.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/pages/_error-2ae1575fb90be49005e4.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/pages/blog-d2ab90bc362e4198e8eb.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/pages/gallery-284930ee6654e069730a.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/pages/index-7d89142f94573f77b7bc.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/pages/portfolio-2ce466f3dd8bafebd4b9.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/polyfills-ff94e68042added27a93.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/_next/static/css/bf9e19623cc5a10292ee.css",revision:"NmojPO-u0ertpbpuYBk-R"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/feed.xml",revision:"43e28fd8cb9b3a1ebb9257cd4e23738a"},{url:"/google720ae23eb610f397.html",revision:"b656528f4b8ad1c3a40974b2bd449ef3"},{url:"/humans.txt",revision:"d45e9ddf94f2f2653c4af319bb95ea50"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/manifest.json",revision:"319085021f7000d71b795d54d1b0398f"},{url:"/robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));