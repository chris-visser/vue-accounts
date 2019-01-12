/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "361f316b7cadf114c9f166b549e09056"
  },
  {
    "url": "assets/css/0.styles.2fbf6f8b.css",
    "revision": "e0cf3df08a028ac5a6343d0dcc58705f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.593c2786.js",
    "revision": "1c6b048b81dfea0ce9854bdbb68e1bc2"
  },
  {
    "url": "assets/js/3.38c32ef0.js",
    "revision": "f4d3a67178c5f4cc3ffff42b4c0e5a20"
  },
  {
    "url": "assets/js/4.9410ede4.js",
    "revision": "233b01562a901553108e85008fdffde7"
  },
  {
    "url": "assets/js/5.e16f94fd.js",
    "revision": "7b7a32069e96724f64cb883e0c6eeb98"
  },
  {
    "url": "assets/js/6.8483fabd.js",
    "revision": "580bc2f2169d7fd1d99b0fc29cc7caa1"
  },
  {
    "url": "assets/js/7.1175ad9f.js",
    "revision": "7686007ae14a9a67b278b11e00179db2"
  },
  {
    "url": "assets/js/8.74a5d9b0.js",
    "revision": "55d7d2e82a5f9dca8ebfced5317bae02"
  },
  {
    "url": "assets/js/app.9195f044.js",
    "revision": "8ad03f527371c3cc23afdd71769e3b2c"
  },
  {
    "url": "getting-started.html",
    "revision": "b7150a370583303d68c800dd319ade70"
  },
  {
    "url": "guide/core-concepts/components.html",
    "revision": "0defc96c3679e68fa0e073a5c7b67630"
  },
  {
    "url": "guide/core-concepts/stores.html",
    "revision": "e7b4e28157fe355506eaff4275e9985a"
  },
  {
    "url": "guide/core-concepts/strategies.html",
    "revision": "01e978a78af06654103c4708963caf48"
  },
  {
    "url": "index.html",
    "revision": "1771386426939af492e80d9ac4918b43"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
