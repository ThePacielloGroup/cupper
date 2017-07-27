/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["categories/index.xml","0ac1d02cfbcad2fcc8c13b2c54715338"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/fonts/pt_sans-web-bold.woff","f83c22b548d2d684e24e315d81f7d22b"],["css/fonts/pt_sans-web-bold.woff2","84520c22e6ebf1b30b6f17251d65fff7"],["css/fonts/pt_sans-web-italic.woff","31f09f09a1d3fbe6c8de19644ef0e614"],["css/fonts/pt_sans-web-italic.woff2","df128e1d5a449fc0506fc1b48aac0184"],["css/fonts/pt_sans-web-regular.woff","32100f6ebf01af64d4a71416561c072d"],["css/fonts/pt_sans-web-regular.woff2","b6d4ede9a3a5dbe4d5ac242ae4b0ecc2"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","004029c8c70ed2bbaa5d9debcf14f8c7"],["css/styles.css","41c3a6aa7741edd93faa28e5dda385da"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-114x114.png","72e127d6f01dfcd2ba2340141babc536"],["images/apple-icon-120x120.png","bc7cd9e36869e66aaca78412207bf723"],["images/apple-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/apple-icon-152x152.png","567c64205576865b5e5d06c849613ca2"],["images/apple-icon-180x180.png","6b8734c446bf02ab50be598b4c01ec9c"],["images/apple-icon-57x57.png","f8c586086752c78870820b6190d6b42b"],["images/apple-icon-60x60.png","6e88df111e506bcd5501bed4ff10542e"],["images/apple-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/apple-icon-76x76.png","d8666e0ac256f39f8c5c628486bd71fb"],["images/apple-icon-precomposed.png","725f6cec25256abb1db10385e0724400"],["images/apple-icon.png","725f6cec25256abb1db10385e0724400"],["images/browser-Chrome-Android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-Chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-Edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-Firefox-Android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-Firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-IE.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-Opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-Safari-iOS.svg","f729e629ec998ec40d313495d7257741"],["images/browser-Safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/logo.png","0134d77c2c6b01eabb425990bab7ce9a"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["images/steve_faulkner.jpg","b90382f2b505ce6f6b1e08657637395e"],["index.html","e5608fc8380e087946d70b4ce8eeefca"],["index.xml","a6758a3168c631045d60ceac192cd9c2"],["js/dom-scripts.js","767a2870b95c7b7d1129445e04add354"],["js/prism.js","0c1fb8d3a69ee7c91dbf0f361ded7763"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["js/webcomponents.js","c5f6fe397db634cde89f66c2f1bc2f62"],["manifest.json","4e77b7f1253442852a2f185822f1b4d8"],["patterns/coding/code-blocks/index.html","a1d9f4054f7c5ba9fe34237414853515"],["patterns/coding/color-palettes/index.html","ea47c569476feb5dff5f9f5edc2a41c0"],["patterns/coding/command-line/index.html","13ec614b95c71887930504bc8818762a"],["patterns/coding/demo-embedding/index.html","9c17687a08f08488917a1b5b8ec77c22"],["patterns/coding/file-trees/index.html","1058da8003bcd5f5e951ffbf64cebb08"],["patterns/coding/index.html","df8f94bc14d73917704c93df7784b5f3"],["patterns/coding/index.xml","c8141d2e5b185b41c7c2297cbe9761a9"],["patterns/coding/tested/index.html","fa93224a1f9c629affdb61da960debb4"],["patterns/coding/writing-inline-demos/index.html","f901f53267867755f7ba2d180f335901"],["patterns/index.html","8e38d3ecc23c5a7f55c894640f922692"],["patterns/index.xml","bc8a085b70e56267a63fbab56f42f000"],["patterns/installation/index.html","bfc7b88ad048aced008e844692ac0b49"],["patterns/library-setup/index.html","61f1aa5a998e1b37418cff6c08c098de"],["patterns/media/including-images/index.html","63d5ee84dbd5e0aea04591f3afd897bd"],["patterns/media/including-videos/index.html","6a5a4995795565891652e880b55343f6"],["patterns/media/index.html","a89badd70c807faed416e6a21e987ad9"],["patterns/media/index.xml","91130ea74bd16f6d51c959a00c3c6284"],["patterns/serving/index.html","f7d476b0110b52a543820d87e431a971"],["patterns/writing/expandable-sections/index.html","36e0cc6e8c307bf6687250efcbf8c69e"],["patterns/writing/index.html","c29f281fcd2a22dc07060e930c8fd099"],["patterns/writing/index.xml","a68bf9da0d9106898c1e05942614e90c"],["patterns/writing/library-structure/index.html","631611467e8d1faa1992647fb478416c"],["patterns/writing/markdown-and-metadata/index.html","ba187f2c3cecb64728397f1e826d3a2e"],["patterns/writing/notes-and-warnings/index.html","0dcfc4390670236d30f9b7e901888598"],["patterns/writing/references/index.html","f66bf215777e060f428f699c5ed0cb1b"],["patterns/writing/tables-of-contents/index.html","0fed0554c0eeeefe217fac19a2fd32d8"],["sitemap.xml","42a06aafa5566ee7db4adb4fd5e2cf39"],["tags/index.xml","05aca37c2ea9dc2534847f246ba6301b"],["tags/library/index.html","3818570d8224257998fafe00a2ed5fa4"],["tags/library/index.xml","b6a44a1a0a10135485e4f39d12fd322a"],["tags/markdown/index.html","b780eb964676878ffbbcba071e455d13"],["tags/markdown/index.xml","757d307cdf85883859ac95ea20527f4a"],["tags/metadata/index.html","6c7c8624967cb259631ac5bc4fd52b4a"],["tags/metadata/index.xml","b6989e44540f4745072a2063369de173"],["tags/structure/index.html","0bd1963f101de59a7c06a794ec176320"],["tags/structure/index.xml","69b02d1c1393249cac54fc2734c9ef63"],["tags/stuff/index.html","25d4e9b9391a045d8fdf93f4998c9837"],["tags/stuff/index.xml","c3ade9b0a2f01caee9de105ded22695f"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







