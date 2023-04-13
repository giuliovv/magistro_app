'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"index.html": "d6b47c890144e2952e9679b5a07d5f22",
"/": "d6b47c890144e2952e9679b5a07d5f22",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"app.html": "2b456f24f578dfd2fcb552a9b7c01408",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.css": "74a4f4dc9c2987b8a4559084ebbe78a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/COMMIT_EDITMSG": "042d32856a5010062da595454fd1b8d0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/config": "d1d951ac9a08aafb0bf9b4abba60eed3",
".git/objects/9b/27534445ef303bd6f2058b5e627c52e3456e30": "07d38b293dcec26b6d87aa57010a91a8",
".git/objects/24/dc7fa4d3e61a950d014b160cf62b18ef7013f6": "141ab433709e4f1902d441653e13352e",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/a1/fe901dca7c4be1d42414e58f8e7013f850b667": "ba435c5c7a85acfdd37b7db5645563d1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/c7/a143b63cf893f4a5859b7c83d104ef9a116fe8": "439dc538b8094231c483043ec9e05e42",
".git/objects/9c/750f202659b430f890eaf6048e59b4d4712fe5": "df0d4037c4e261d006ac0c858b69b00c",
".git/objects/2a/76d427c768f181b2b51cd6149819c66cfb6bd0": "c2b27039b6e976b41d7f295531a8b26d",
".git/objects/18/7a1a1575e540de8dc2f4feee8d96a3175f573b": "ca6c82a6f79c1731f7201e2a2e2a2a0f",
".git/objects/e8/6679da37cb001fa474e6c3aefe298d4eda7a48": "b3de0679e06eeff900544cad420a4d21",
".git/objects/ea/bbbc24b2ce91e00e19109dfb37dc9374ee4d02": "16f6b96fa94544404a13812a6cdf771a",
".git/objects/ea/c0396c2a7165e8351ca031f3573ca40be9719e": "1763a58c4df7e7a496fe16ca7e2d26e2",
".git/objects/c3/3a8b5eee9eecda4a38e2679286bba19581f89d": "b62778cd46b618c0fedfcb916b835a3e",
".git/objects/cd/bb3019aeb1045bfcacced51f8cee4b455db5f0": "c91e4ba620bd2c883c052095e2a5755a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/21/17c158492660de426bcc431a6ce056f12978f2": "54c267453862b935fa67bbd5f8e8f5e7",
".git/objects/d3/5c7f6b4258214ba60908ff12396f50fdc9aaa6": "808f348813ccce6d84a9071f071844ab",
".git/objects/d0/61c8de9ecda8f8ddffe9a03735d13b5f39d809": "50ce7ab022cf86c90084cb1462665991",
".git/objects/47/1d8e5a4462aac578e3489f9a843a9391dd0505": "89c25d5264cb915d9b45f51a69458861",
".git/objects/47/2bca0b642d0f9dee348bd800c0b9ff72328c9d": "eac012642fffe10dd9f71e28f2a83327",
".git/objects/88/eaf314904ec2f63a90b2ca948e994bccf0d0d1": "f9dac3277a324d08052d166917d2b4f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c1/b1461f0c1e505cb23e66963976121f0284af25": "35f80b736a3ba1003d6130c7784db1c2",
".git/objects/70/51da423def09214a4a7c2f5fe753c3f25083fd": "db8db1d22e9e57fdac2af70e8ea69036",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/be/121cc7c416729817b180a93cfe38470e3844ca": "434c8103bad75fd6299eb4239d7fb665",
".git/objects/6d/542039fcddeaf90d5aeb4a5a701f9431a10721": "0ac015cef034b04b3a4c8f6fbea94466",
".git/objects/7c/f165bb193ac882908c931a3fdc7b91f0cdf138": "6be43a3bf61300bef9c58238cd0b0f7e",
".git/objects/72/2da365ee294f1fad967c9a5e8ce1f6294a68a2": "cca7fe713d7ce8b84c294aa0392c1467",
".git/objects/e1/ad14a073d8d580cb2e246287f71364d1bf5033": "3de1540bef5512495b3b106e5453f5b9",
".git/objects/ed/685e4798607d60da48f5a8bf1a2f8458c86b33": "f69d02b65fb506c38934be003fb4a48a",
".git/objects/16/8596910288eb0e46e1d8d6dd0dca4b592c9375": "fbbc05f9e83f50fa2e24b90ce12aa1d8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ed4d869e1d00a0b45817b4bd08040c55d10753": "dc76abc1874280983d1cbc37a8d14a60",
".git/objects/b9/ac9ddb0e7f1d542c533f4390a0a279352e7007": "62e0f88b2ac80c94426ff6bbb0d3e4a2",
".git/objects/bc/26d4264e56fefb950a0a0ea19b02c23b6a19f4": "e5945cf32afabd51bc2fde38d3285530",
".git/objects/9d/5bfb277d518f56e19ff3e668aca380aed3ff3b": "dde70059e8ac7c107c578c8a61ae608c",
".git/objects/84/168a89f04de21dc4adbadd14db47390a6079e4": "24572caf3bd258f8eefff74dd56325ed",
".git/objects/1a/8fd3da589c4836a84f0b7019a24196604147b1": "58f47983bc295f7bed8d784fa77bd62b",
".git/objects/b0/53fcf4e286130d3b2489812b7104ad4b8bf6bb": "d8f1084caee221f55f8e4ab5256ab3a9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/a6/8b6d3e823fee9e400dd28ce2a0f4838267a87a": "328107b3bd7aa0ab318a89cd43389f68",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/85/26cd6873cae032f78a03de3af355ae44d25952": "46469e1809608412898a85e055e0c0f5",
".git/objects/ce/2f5dcd12bc7112800799eb6a06cfdf05ff964f": "9b736263b865c469831c13f83ee43eeb",
".git/objects/79/6f30e400bbac29bcb71aee86f100ffbe291521": "924cb98a88eeabc7205687bb7a44c014",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/58/2a67a0ba9a9cb80e6e643a2f545664222a741a": "f201b0b6ad54a5f0853c9be7df4f8243",
".git/objects/58/ede68754a31f9d9646c638bd53b2bfc3b70646": "f241ae7f4a3fe74044c281943f5da493",
".git/objects/3b/e19a9d751cd58458ce46fe8b5923e7977d6828": "2ece4044308f094eae31013342ebd745",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/2a86a425ddd8e4754d24169d307de8dec744b4": "dbfbf54d9a16208e4ccc79fe6ea6cb50",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/54/3af32e560f471732882e8bd577ca795bd0567c": "31db301ce656977867a009529e42f499",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/cf/e0dc018655beef868d4e877f3fc3dbefb43d71": "f64a0d8a825efbde7089340e0d2b61a1",
".git/objects/64/65630d1c3abaa32069a172ffda3bda24097a94": "02fe0d58a333b3b1646c8209d4a57e99",
".git/objects/64/54e2e358e23fa12af9c54d0047d330cd57705a": "b90b0d7ceba5f2c220689c3228a85f0b",
".git/objects/ec/2e7c22f61d7aac2265932c63d2bd2fa439f6db": "5f6d1d05ab59b0cfcc1ea92e9cbc4fda",
".git/objects/28/198e1c3ed39ab5fd7a89d4ab8d13b0e6d584df": "94f0be693b4f0ed3cd15e9b3d12a0e71",
".git/objects/28/4d8dcb3b6d9f6359366a98bf6f24f91c10a4c6": "c8aa524445d76d9e51a95ffa0461312c",
".git/objects/35/d8b8ee5613841a642a6dbabad811218564da3d": "d4ff6e6eb2440f8cb6c0328a05de07b8",
".git/objects/98/b95a7b55d2e42dd0dd2bdc5b494d5e7de8a196": "0064632b1889964aa3ac1a25af32c144",
".git/objects/e6/1e42ddbc2f7e92c6f7f9b1c2c69a7a015a16fa": "2c2171be73e2be026e9178136fbbd749",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/c0/bca99acda2d00018f1091c360587f608e4a24f": "5a50eca0d65713263d849409b575a105",
".git/objects/14/c30a2da574e5e0ec533a5539a1b217ac7b69e5": "cddaf78235f5d8b68413126dd006b2e6",
".git/objects/57/5b051b642f93f3c2c55d1d768af584e2cefb4f": "03492663d00fa4de56abd7f838dbaf2c",
".git/objects/5c/614a6f3c6e217d8c9b8a55c55f5bfae02b20bb": "1015a943c00f26c66cee36ab72b7ac58",
".git/objects/a4/39a75d2c5f581f15da79140d014c01d64d5269": "a1771411136abe12408a13543be2971a",
".git/objects/23/be54d312129dc9f03b5ebeebd983b9bae31210": "933134779c8c8af155b8decee5803e41",
".git/objects/82/89a68418d63c0acfe5e3f380169f6b89263906": "821f5c40ec759510c4ceb270ea289524",
".git/objects/00/855256583f69b5b8013646ddcf4e83042f86f2": "d7ecc6d50b99bbc657034399d84963a9",
".git/objects/32/39f608a16e26654e9a7d2e3b8b11c1750aaf75": "c26f51a8cbc6896742c026df9bb92fbb",
".git/objects/66/853f0d81862481a20dcad298a226122edf02d4": "84fe0c96dd09b34cf37461b375943208",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/1b/d810815ed1a9e74351cdac4411bc19e005d10f": "b489a644f17594eec551a43bdf41429b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/7f/8ea42b6250b351da4b68a41fdc0ed66abc3766": "7549c546dfcc391fa1a0d7db459c154e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/b37da53880a3a3924afe1c852b31221058d1f0": "4230b5c18f6af30479a92139cb3c4181",
".git/objects/2c/0ebfe052cc86f315afc2944f5584786ee8bc5c": "bf07a24a1725fe2afc553d4b27e8e218",
".git/refs/heads/master": "fc2a935ce5f7ac6d05fc5612e28749e3",
".git/refs/remotes/origin/master": "fc2a935ce5f7ac6d05fc5612e28749e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "46f36103bc361a672877ab13617ce359",
".git/logs/refs/heads/master": "46f36103bc361a672877ab13617ce359",
".git/logs/refs/remotes/origin/master": "f0e383f751b2eaf097702c003fe19dd3",
".git/index": "da2a942b8cf70d576e48384f3255b5df",
"version.json": "c5ec7f96bcae2727091d84e3e9d5ee84",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"assets/NOTICES": "259068529bed6e57beac74e9760f7147",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/background_portrait.xcf": "0fab47e2eb724fcd9d5c364657c46f6c",
"assets/background_portrait.webp": "d58fd1e820c0d535a70210d4a86dd550",
"assets/background_portrait.png": "2ad993b8559691f9ae54c38db3db4cf5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/background.webp": "16931655723775203b28757524070cc0",
"assets/portrait_template.png": "3fc4a7f3955082b41813aad4dd89387b",
"assets/template.png": "6c8271dd55e629bb0c0c3910912f8985",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/background.png": "78bec78130cd9d9d83e3b9db8b7b4e42",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"main.dart.js": "d434993cc2db3303afdacbf68e17cf74",
"manifest.json": "d89c47cbdaea48190eaa31c233523559"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
