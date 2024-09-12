'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "98afe4bef16063a7562060644781a0c2",
"version.json": "bdc05c910347f566dfa920565c816020",
"index.html": "69b6f2d4c148fae5d0e3a6d7b673d862",
"/": "69b6f2d4c148fae5d0e3a6d7b673d862",
"main.dart.js": "7a7bdc92e8b9e473bb17f25790d1aa5d",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f45cdbfe42325026a0487a13fb36b063",
".git/config": "6b4b539ce7f1b03a12019fd25fb27568",
".git/objects/50/be5dd5c2692dbb9726026ef72e7fce60efa909": "265d0e20cecd5bc2e04ea0ced88b3835",
".git/objects/50/deb37c5c4264adafc1e97895fac9260b57d0b2": "e67ad3eda64bafab3639d9ce703fcd2d",
".git/objects/57/5e6edec9e45d697884da195288376c089e6fd8": "3644bdd4a639d9ed0b7a58dc9e14c726",
".git/objects/6f/393482e91e715fbde922eba680c00ca71ffa8f": "88a750dc3a48bbe7e813bbf76d13bdee",
".git/objects/03/a46b0351f5349c220366be0e7db05652f5c2ba": "490ee5bb95c4ba573aa691b2fb7e285f",
".git/objects/6a/547b977bdc8c3d7fdc86250f035fa4b57da0b8": "4dc3652b2d2de47889bf070de39193e6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/b0b5b5d3effcf6eccbbef1dcfd8b12b2e0acd8": "41610f11258a576894708dadd184ebc6",
".git/objects/3c/0395743ad1efdf2660aafd0e837aa9b3d6ed54": "3408454d60735a6d0494d143ecb5704a",
".git/objects/56/9c5beddf1926cb171380da27f222facf09df8f": "a2e5f58ce4b7a9723494be5f3d498526",
".git/objects/51/b7434f2c2d81cba5f0231262c8c24eddb2a65c": "5e825a13738e4e1c07b5ed664f71bf12",
".git/objects/94/6926a376f20b47bf8262e460acfba48c2c9358": "7e053638efd15e54613daacfd0ccbe6c",
".git/objects/60/153a48d6c7c0250415e6a1c2d92dcd6b92c4e5": "1c52535b8ccad77d556363f6d0002a32",
".git/objects/9c/a9be1969a02bbf0eb52cb00d4b54429ebfa76a": "585c0849a0afbd566ef62b3bfdc45d7d",
".git/objects/bb/620e469d0732694361dd532bda317b5a605556": "a9f95cd6ffaf63e453bf2f159311ce3d",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/bd/778fa43aaa69f2d261f99d5e02e6a195ac122d": "ca8f12c0fbe39b15fbd593345d538d83",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/0da8cafd23f1265417e315a6e499b22f947223": "df6190d07a2f9b66431623ae752aeefc",
".git/objects/d8/dce8811c1f672bba5158e0774301359b6887a7": "c6168037fee2fa865eb1d6fa5f6e3756",
".git/objects/d8/adfe89263a18d95d3d0009cccba309c264f559": "97cb709821bd59b1e842142dace006fd",
".git/objects/ab/dcae3f8c8e191a92c4fb1d90a07008ec8611fe": "6881587e177640aceaa8442ee6352d55",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/2274506a0d00f2d6e694fc90bf39e2829a310f": "4cc220f366537f88fc52f30140432e73",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/00013f78db06cfe7a915db234d291918ca200d": "624ce3088e32d9ebdf8d79ca5d37e785",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/c8/694f658e3e1856d3078ff52ccc78a2dfc40a26": "8344eec906993cf997cc990addfabd13",
".git/objects/fb/39da4458175e0e529ad9540d16d5a7473db7b4": "2f1a975fbaf99c7e2ebcd7747fcc8184",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7c/5f280de2db13a5c76ee51f1d22e4494cbca471": "3b409048b45a6b2dbc1fc6605262d7d3",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/89/c1bcf5e9676d9e6ad29800ababf9eaf7be66a9": "91a650ada72604a55b2dec047a26acbd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/73c1739c3aa19efdb37f3f4dc8df26bde02d81": "60e59e3e38af1ed6c19428ed1f39a571",
".git/objects/17/6329978f23f6004e564d290a69ac9a6d1f2626": "ff5dd0db3c19620f9de1b48d21b2a153",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/e25ecc22dda475b56345145e291e0786295253": "5cf0447b89ffb1ad2d04e1394b6fe402",
".git/objects/4d/d854d5150bce0e7e469dae0be6fd2707b53304": "40ced9759fc81ba2eb756277c56f6c24",
".git/objects/86/bf29e7c590241fcd4c501a602732c99ca8fcf4": "d448ef9dd98695c50879759c1553507f",
".git/objects/88/74ae256578888283c472a43bcc6dfcee0407b1": "7bf24c314dc83f58a88b4e0406195894",
".git/objects/88/e6e6baf48d5037ad4e389ad18d0db3c75a0f7c": "7668dd67b5e936c9507c4dee053a2d9d",
".git/objects/88/218afed208210789289000988509e6c5bb221d": "43181ff91de8c03754bcecbf65f3a2f8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/bb728e11ba6871163e10363a87dab2c7e4c03b": "e310754ed04c7ef162283f4e59689e1e",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/31/7ec53e07711d0e259ff7fa5780c446a4b8df5f": "429fdf76ee39af8b2cf82cac9d10dcd7",
".git/objects/62/64487377c133ce74690b364c12637bcd6568ec": "8a273c37959b736094aac35b3c07e81c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/c892d6ae179da46201be9696d1d15d04ea681c": "732754ae6f9cd9bc56090342148c5816",
".git/objects/52/c978cc179e6500ef1ed4961e87a586e8bfa9f8": "900ac10789e24288c47f717218fd4304",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/e2cc1c6f0c0ff38729305ee6c8c9694037685c": "96c2b514584424214d69beaf5b401037",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/0e7ce7c84b9fab5101f1ad8d0791a8315cd0b9": "e6b776f2f127a3427e1823e4565c517b",
".git/objects/b6/3aa82ee65d0807607444fad13f1a4a8f3eff3d": "49bd2832a744ab458c5ef102262b5eb1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/03f6af4ae64be99a7136c19aacd31d90285cc3": "dfa87fcabff3bb81e359628330ea2d96",
".git/objects/cd/77e45956b9793bf7166a5028749ee3190a5499": "d7dac82e13057eb21f6d3ddad39669ec",
".git/objects/f6/64f2b3012accea556471fc29b884df62955d99": "3ac9386966ceda0537a8bb845b994de9",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/ab9610c5f86b4384a5530f49c653cb0ae4169a": "1b21e258532ae8e6a4fbc3739beb480e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/ce7442898cba598d01c18693d8679d759b5a43": "91f9adcf3802670ae608f33fe16d775b",
".git/objects/23/a86170efe825147e14c6dd8f618e6fce5b727f": "a37e5669e74a173aad100acf9f478c0e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/95fcee3eb8ded4aed0e0826ac3cd6eca6fa653": "b8106468dc6bfa4b3eb4e8a2bdb1b86e",
".git/objects/2e/6c0329bcba21e14d82599958c5a1ac46a0ad06": "52d009152fabfcc5ca0265fa030fbe75",
".git/objects/78/8a59f0518838b9242fdc796abe83d4b2217f41": "e4eb0e069d7320d9b09cadb75e7a631e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "11afcbba8d8adfb57ce1e00291a8dfac",
".git/logs/refs/heads/main": "0ab207d2a936a3a8404746dffc0b2f22",
".git/logs/refs/remotes/origin/main": "571682b9470697603c8cfb8f06bdbb4d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0f0642a2726dd2857e3a7b952374d029",
".git/refs/remotes/origin/main": "0f0642a2726dd2857e3a7b952374d029",
".git/index": "d92544df951428f799cdba389ced4838",
".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
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
