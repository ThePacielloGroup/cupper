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

var precacheConfig = [["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["categories/index.xml","0ac1d02cfbcad2fcc8c13b2c54715338"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","004029c8c70ed2bbaa5d9debcf14f8c7"],["css/styles.css","a5642b87198a0f10b2ee19301c004693"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-114x114.png","72e127d6f01dfcd2ba2340141babc536"],["images/apple-icon-120x120.png","bc7cd9e36869e66aaca78412207bf723"],["images/apple-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/apple-icon-152x152.png","567c64205576865b5e5d06c849613ca2"],["images/apple-icon-180x180.png","6b8734c446bf02ab50be598b4c01ec9c"],["images/apple-icon-57x57.png","f8c586086752c78870820b6190d6b42b"],["images/apple-icon-60x60.png","6e88df111e506bcd5501bed4ff10542e"],["images/apple-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/apple-icon-76x76.png","d8666e0ac256f39f8c5c628486bd71fb"],["images/apple-icon-precomposed.png","725f6cec25256abb1db10385e0724400"],["images/apple-icon.png","725f6cec25256abb1db10385e0724400"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-Chrome-Android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-Chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-Edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-Firefox-Android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-Firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-IE.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-Opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-Safari-iOS.svg","f729e629ec998ec40d313495d7257741"],["images/browser-Safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/logo.png","0134d77c2c6b01eabb425990bab7ce9a"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["index.html","8feea45d333287eb304a9d0b88e8bd65"],["index.xml","62c43ef554019de6d4808768f5f4cbad"],["js/dom-scripts.js","f7e4e662f3c30e319ac30f9a6c28d0ca"],["js/prism.js","0c1fb8d3a69ee7c91dbf0f361ded7763"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["js/webcomponents.js","c5f6fe397db634cde89f66c2f1bc2f62"],["manifest.json","db7fe2494bfde2c101d77d4aee481437"],["patterns/coding/code-blocks/index.html","bfc6b9446181c627620d49a915035e9b"],["patterns/coding/color-palettes/index.html","303b710af1c8bfb1add6e0c9843e3a6a"],["patterns/coding/command-line/index.html","51adfd19db6e0f699196ec3f6fda3f6e"],["patterns/coding/demo-embedding/index.html","e0b0b5ae47ac3e8fc285eff918bcb1c6"],["patterns/coding/file-trees/index.html","12739e41bfe4415e53cd1463bea5cb89"],["patterns/coding/index.html","04653acec559d3e2695194d6a3f938af"],["patterns/coding/index.xml","c8141d2e5b185b41c7c2297cbe9761a9"],["patterns/coding/tested/index.html","7e48cc0d6328acc0853b089e1e5b1678"],["patterns/coding/writing-inline-demos/index.html","781c132216d126a7594561ca5e5339d0"],["patterns/index.html","2c6ba13743b114c000523688deadc71c"],["patterns/index.xml","fef34844f84d6c8ad7e27732478291a7"],["patterns/installation/index.html","498e0090e718e86200cf3f22cb97b1fd"],["patterns/library-setup/index.html","5676ca139c2d015b6cfe5bcef4f27a44"],["patterns/media/including-images/index.html","232cc857e80fcd66a93a2a791b8448ff"],["patterns/media/including-videos/index.html","fadebe383c4347e59a9c66cdaab5566b"],["patterns/media/index.html","86f11f5a002d4eef6630c0da0831e7c1"],["patterns/media/index.xml","38cdadb4cc97fb22238e2342ed8d4d31"],["patterns/printing/index.html","5a6bf3a2f3851d5b899500729cd5f47f"],["patterns/serving/index.html","3bdc6dee020506a4ba738c72323cf0e1"],["patterns/writing/expandable-sections/index.html","21e08d437cab81a252d0acee44b0fd09"],["patterns/writing/index.html","c45453e9a2ce2ed139e98df247aa35d0"],["patterns/writing/index.xml","7975bc05d66958e02f1433099f033636"],["patterns/writing/library-structure/index.html","57bd25f44e0402472d53f68a0d8ad500"],["patterns/writing/markdown-and-metadata/index.html","e57ecc49a2bc144c743310e1b12bbd50"],["patterns/writing/notes-and-warnings/index.html","c966c0396b878923a58cead1423fdbf1"],["patterns/writing/references/index.html","de275b54d8b2c9c7d5af86d79d5c63cd"],["patterns/writing/tables-of-contents/index.html","39a8e3bc4631e5067ac645fe4d8aa8d3"],["print-version/index.html","13d50e2e3f69c60ec481453e1d2303b9"],["sitemap.xml","001c1e642c492c18a637bccfcfc2fe9d"],["tags/index.xml","5af18d25fdcb072a78c1603adacee4f6"],["tags/markdown/index.html","4290f4662cb9deb5b21c478fb264c81b"],["tags/markdown/index.xml","757d307cdf85883859ac95ea20527f4a"],["tags/metadata/index.html","e0b201d1da0f647b3dce6f83fd04d7f8"],["tags/metadata/index.xml","b6989e44540f4745072a2063369de173"]];
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







