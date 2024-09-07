'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0b2597fa3dfbda30f235ee3519e950f5",
"version.json": "bdc05c910347f566dfa920565c816020",
"index.html": "69b6f2d4c148fae5d0e3a6d7b673d862",
"/": "69b6f2d4c148fae5d0e3a6d7b673d862",
"main.dart.js": "6f928029a5f820b566e6573903ebb529",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f45cdbfe42325026a0487a13fb36b063",
"assets/AssetManifest.json": "5b491dd8ad7828d110d7d6a9654ed6f3",
"assets/NOTICES": "d309ad5c926f568145bb61c73fe34125",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a6422fd873f0cc497b008b157aa47e34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5584a5ee257b9c323d2a9001694a011e",
"assets/fonts/MaterialIcons-Regular.otf": "f91708ef3f77999db6050de6a64cbaf3",
"assets/assets/images/sign_in.png": "57a03dba0e53857093ed9a161b3973b6",
"assets/assets/images/teacher.png": "afcdd5aec83d1e5bc6af25189994d65c",
"assets/assets/images/go_ahead.png": "1e440b1c4374faca5725efa55a08ca49",
"assets/assets/images/mood_page.png": "c1552bae02f02f815affe5e043742607",
"assets/assets/images/test_cover.png": "35292873b1b24d246a8f913f21174f08",
"assets/assets/images/result_animation.png": "469918f8d6f476bedcba0bc166798ffe",
"assets/assets/images/empty.png": "2db8423bb210f5b5a3b4e90ccf8185b2",
"assets/assets/images/go_ahead2.png": "2d5fce5ed0d6a8cf7ec4371adc15a8e8",
"assets/assets/images/go_ahead3.png": "469918f8d6f476bedcba0bc166798ffe",
"assets/assets/images/second_article.png": "540b42433ef5df84ca0df610b7ca09b0",
"assets/assets/images/onboarding_1.png": "f4c1d20854d7c624cc92a2055c09bc87",
"assets/assets/images/onboarding_3.png": "f6eecbbea59d5a655de52356ed02e7c8",
"assets/assets/images/onboarding_2.png": "c9d172f61e5ee2a2d07081ff9297b862",
"assets/assets/images/first_article.png": "e86225a288f49f7cf967b46a8c48f3bd",
"assets/assets/images/success.png": "6c1983e7bb739212908fde15b70eeb6c",
"assets/assets/images/sent.png": "0d6550c0e674a4e9b0e420f5a8d4a21e",
"assets/assets/images/welcome.png": "910347813abff9624726b1592e619a96",
"assets/assets/icons/editing.png": "750c8bff993e9ed2f359f9be99fca172",
"assets/assets/icons/category.png": "a62c82ee3d96f89a2fb0e6d8b27f0663",
"assets/assets/icons/tick.png": "6c9892fc09f7e98712bb4ff48777cf2b",
"assets/assets/icons/time.png": "9c6ebb196c74723ad99e55611a7b53be",
"assets/assets/icons/profile_icon.png": "daaf997bc97685eeaaa4683a0299af8d",
"assets/assets/icons/resources_icon.png": "f6511fd52230dc14e212f98496946f6f",
"assets/assets/icons/filter.png": "0c09527dae0606b167ae62834ccd9a49",
"assets/assets/icons/history_icon.png": "bcb2125381987b0e57f2ff4259088027",
"assets/assets/icons/tests_icon.png": "4306fef622225eea775341bb6e4651ee",
"assets/assets/icons/chat.png": "78df6b51f1efc8bb4b3d20d07585919b",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
