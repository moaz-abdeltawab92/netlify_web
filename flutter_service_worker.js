'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "08c911ea3311151fac4fef223e86cb16",
".git/config": "1efb0135eec5071e04e338ab6b58651c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cacfebd7f2a3c6463a0804babd8df5cc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ea93c1174c07171ed26d110c3a439ecf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e3e22723a0616525291a90a6d9490602",
".git/logs/refs/heads/master": "e3e22723a0616525291a90a6d9490602",
".git/logs/refs/remotes/origin/master": "571e5fd61467cd3233b874be8ec95f03",
".git/objects/2b/03258acb15dcb4fccec436d438181715a91db0": "3a8751ba539472c55070f5ee5a7f7b76",
".git/objects/2f/fe0a97946dd6e9cf87a6987334add2998d4d10": "471dcad2e8651434a819cfad2a4897e6",
".git/objects/3a/d111cbe33a4a850ee72ea922b5c5eeadf021ca": "5e57113d239dd727af915358d33d407d",
".git/objects/66/e258dd23aa6d47d58b1f9018a69802c95e8cfc": "2add2a88ef26b4e4da393cfe460d36c8",
".git/objects/78/36401e9cd7bb606f1ce6a2cba8cc8ab91d2696": "c14b6866af75d664e5110760c8efec1e",
".git/objects/78/93cd9b8d1bc6e01a1dda381edaf0121885d879": "1422689e51d39f09ee4c3d75de9284c0",
".git/objects/82/1b9190e3a805a83ca51a155eb89557d0947549": "dcdc2fde9de6063dde29d899afc50c77",
".git/objects/8f/67a3b492bf3c66dc403f8cb58f4250a253aed3": "9530fac5a385f809e527316bab532cc9",
".git/objects/98/0078c8c1239c20aaf0ea77e20462997f230087": "f5c5493c4f118a5b2f52edf718b74fa5",
".git/objects/cb/146c90c89b0eb2dc9c5f3962c9d9840c2b536e": "80ed90bb31d93f3a57bede1d741cf8f9",
".git/objects/db/84cfbe9e31237e3f9727e9d9ecf51c28c241c9": "a883e6ff367841679ffc0ebcadecd66a",
".git/objects/dc/d964a9786528183127f5bfcd7d036dbc74ddb3": "216126fb48db695b78eaf49476dce56e",
".git/objects/dd/f30e2d4816c347dc056ee961cd4687bca9aa2d": "0ddaaeda6df2b5428a8d34b753923063",
".git/objects/ef/f8182e2639de1e9d033b3cd716a3b301d401ac": "36fb9871a8bea364e12643f0c4f8639d",
".git/ORIG_HEAD": "18484d300e7f68b511480b7e7227968f",
".git/refs/heads/master": "18484d300e7f68b511480b7e7227968f",
".git/refs/remotes/origin/master": "18484d300e7f68b511480b7e7227968f",
"assets/AssetManifest.bin": "23136a06e98b80f8aa5eaea3b5aeab16",
"assets/AssetManifest.bin.json": "3445e06dba186e07ae2433841163c8c1",
"assets/AssetManifest.json": "1e03d7ade3ca893aac614693c197bf87",
"assets/assets/fonts/BAUHS93.ttf": "191734283bbd6d5733e73020039923d4",
"assets/assets/fonts/Sigmar-Regular.ttf": "ebffdd8704d0138fcc4f9982d698bdc1",
"assets/assets/images/app_logo.jpg": "de403cce8b98fed40e9f8e4d0cf694dc",
"assets/assets/images/firstApp/ad3ya.jpg": "0be77de6d24817ade603be53e5cc44f0",
"assets/assets/images/firstApp/azkar.jpg": "33cc4ad5036c7f79a5e0346120eae3de",
"assets/assets/images/firstApp/dark.jpg": "2e2b0cde0b64078ad1d553b5b4ae74a2",
"assets/assets/images/firstApp/hadith.jpg": "1b6946bbabceb8341d757ef505547d4d",
"assets/assets/images/firstApp/home.jpg": "4b35428755f2c7d2db1f0a3daa78195a",
"assets/assets/images/firstApp/light.jpg": "7ff90989f6264d992c53003fce899ab9",
"assets/assets/images/firstApp/prayers.jpg": "85ea3d6bd26699deed22317121de622f",
"assets/assets/images/firstApp/sabha.jpg": "aecf10ebb1592fe4f195a9b7129fe09b",
"assets/assets/images/frontlogo.jpg": "41cb6c3a6847afa9351d91b10d9b2028",
"assets/assets/images/upload.png": "ac9b44410c116e49c9809862dd360e1b",
"assets/FontManifest.json": "aa2b478987c1e2e4038449771d806d92",
"assets/fonts/MaterialIcons-Regular.otf": "77d9fd53a3a93253598c30e9ed2c1896",
"assets/NOTICES": "24e9f577246f78f2c60f017cbc26ebb2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f403608d5c1d44b2cbf91b72fe3b06eb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2102133d32ee99df6528804f81ff081c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "eca5f1d62e06201ca3a6b6a1e0da721a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6ae8e198900fc81d73751a59dc5f5c98",
"icons/android-chrome-192x192.png": "a884bcc627feedf6d760bc6373be0010",
"icons/android-chrome-512x512.png": "2acc7e2cc868d4c0c369827f020971af",
"icons/apple-touch-icon.png": "303d753f6b05c951c479a07debaac1ab",
"icons/favicon-16x16.png": "4cfe6ac4630cd1481c889a393a7e6382",
"icons/favicon-32x32.png": "72c4e3d1a01c91d958c915c4caabb32b",
"index.html": "da818db3e82536c5742ddd362d79e0da",
"/": "da818db3e82536c5742ddd362d79e0da",
"main.dart.js": "b5b961493584268b83aff1fcd8aa42d6",
"manifest.json": "49f974ce8312bba630786557617c6570",
"version.json": "8a83505fdbc3330a8aae5319b9ecc00e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
