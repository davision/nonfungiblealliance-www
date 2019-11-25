importScripts('/_nuxt/workbox.6041bd81.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01e8a47ffce44a634d5d.js",
    "revision": "4b727847948b95d7850869fd05fcf29e"
  },
  {
    "url": "/_nuxt/1ab7a1cd8e99fb943937.js",
    "revision": "fa4e826be8069e45061b4c7609c14daa"
  },
  {
    "url": "/_nuxt/2fc0aac5198ac3927d80.js",
    "revision": "720865cc662076fa48da15336d07a57d"
  },
  {
    "url": "/_nuxt/3911011ead54c9aa0a61.js",
    "revision": "4858f4db05a777c9db0ea699baddccca"
  },
  {
    "url": "/_nuxt/7d1b5c00ccd238db172e.js",
    "revision": "f410de96d74ee947d6065d0d7ae034c1"
  },
  {
    "url": "/_nuxt/98735c997a73b91a243c.js",
    "revision": "6ef22dfb435fea707132d94b166482a7"
  },
  {
    "url": "/_nuxt/9e037e98eda55c2f72d1.js",
    "revision": "a3fdceed406448a513125b3a99246a0e"
  },
  {
    "url": "/_nuxt/c140edb704ac1f81a29a.js",
    "revision": "183788b502ab828eef46397e5a66281e"
  },
  {
    "url": "/_nuxt/dfb8da384aa091fc9faa.js",
    "revision": "2470031ba035a67414c8c864b55eb35d"
  },
  {
    "url": "/_nuxt/e01611ca97ae8cec892a.js",
    "revision": "7701ffd8078e59b8513feb1a7510e719"
  },
  {
    "url": "/_nuxt/e3c38fdbee70cd9fc904.js",
    "revision": "9fc687201a7df7c5085b27eda590d5be"
  },
  {
    "url": "/_nuxt/e51259ae790262bbd93d.js",
    "revision": "7cc37082c0bdcaf3ab8394a2ffc963ac"
  },
  {
    "url": "/_nuxt/ed6cfd8eab52216f463a.js",
    "revision": "f97bc17c22b8fcd3e8b52387231c1157"
  }
], {
  "cacheId": "nf-alliance-www",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')
