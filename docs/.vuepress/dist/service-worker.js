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
    "revision": "651dfac0c2649941eac4ffc9e36f73c0"
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
    "url": "assets/js/10.ab6cef77.js",
    "revision": "b3097061539b3135862e67b824ef8b98"
  },
  {
    "url": "assets/js/11.f0cceb02.js",
    "revision": "70f14e11e97735d1bceabebffc5d659c"
  },
  {
    "url": "assets/js/12.a7b2eb9b.js",
    "revision": "4c567c94f21f701b3ace0e4f66612a16"
  },
  {
    "url": "assets/js/13.bf048894.js",
    "revision": "8b97faad765d1672d730f12da54f1b7f"
  },
  {
    "url": "assets/js/2.cb3337ac.js",
    "revision": "48330e6cd43f4ab19848edbf2bc9e538"
  },
  {
    "url": "assets/js/3.37aa9e79.js",
    "revision": "e3e727e3c07db2088586c76d7ee18aa2"
  },
  {
    "url": "assets/js/4.10ee5166.js",
    "revision": "fcbc9e35486be08685834577dda2d2cd"
  },
  {
    "url": "assets/js/5.69a32a72.js",
    "revision": "67ffb8ffe9b2cf3811be0a87954b035f"
  },
  {
    "url": "assets/js/6.764e47c3.js",
    "revision": "b5a1f84ad43aa6a2318661ece81b03a0"
  },
  {
    "url": "assets/js/7.a4900be9.js",
    "revision": "40dfdce98b889ca2cf4af8df1adc5c1a"
  },
  {
    "url": "assets/js/8.3bc3d187.js",
    "revision": "8ef68f01242c42e96966d22aeb2ffb9d"
  },
  {
    "url": "assets/js/9.a5af096f.js",
    "revision": "916cfb8e3395f182cda89bfe7863ebfd"
  },
  {
    "url": "assets/js/app.2cf54051.js",
    "revision": "d5ab61efaa299c4b9cacbbac00fb10ee"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "guide/advanced-concepts/application-structure.html",
    "revision": "51ed30ed0f184b2b697f36b72f483eeb"
  },
  {
    "url": "guide/advanced-concepts/security.html",
    "revision": "9c46955a532b2f28e1167b2445b1ae87"
  },
  {
    "url": "guide/advanced-concepts/style-guide.html",
    "revision": "88fda56ee80e2d40cdfec0edf32d305e"
  },
  {
    "url": "guide/core-concepts/components.html",
    "revision": "47be90276d8b986947fef048e57c5bff"
  },
  {
    "url": "guide/core-concepts/overview.html",
    "revision": "fb887271729b3d2468d6285bb250d64f"
  },
  {
    "url": "guide/core-concepts/stores.html",
    "revision": "4a2bd0813b13e3c911ca15f45a15e6bd"
  },
  {
    "url": "guide/core-concepts/strategies.html",
    "revision": "78ebc699e841238933b37dcd1d29a014"
  },
  {
    "url": "guide/core-concepts/the-core.html",
    "revision": "aeb8f441dd5b5823ca73c44876f2d503"
  },
  {
    "url": "guide/index.html",
    "revision": "026916fc46c09b8fcdfd8b2da58de0ac"
  },
  {
    "url": "index.html",
    "revision": "75f8cb5105621d4e443b4cd3d389b708"
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
