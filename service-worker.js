"use strict";var precacheConfig=[["/index.html","f0fc52ea9121c939b1bf877db171f5b7"],["/static/css/main.de7059c4.css","684748dcf4184ac8446e3919af296c3c"],["/static/media/001-search.05c14bba.svg","05c14bba53cb2b5c0459505220d2be24"],["/static/media/002-shopping-cart.deb82563.svg","deb82563b1570a4a59f393f8ca0f3a1a"],["/static/media/003-chat.5229aa77.svg","5229aa77e40996a53e1c68d827b16ca7"],["/static/media/1.d254c7a0.jpg","d254c7a06b6b587cdf165e7b2efe0dad"],["/static/media/10.6c557c48.jpg","6c557c4880d92be31bf9128da3567fbb"],["/static/media/11.875d9dfa.jpg","875d9dfa2a3cd5c3480007ba12486b05"],["/static/media/12.3dd8602d.jpg","3dd8602d4d38f658c4ea8dc1ceb20b26"],["/static/media/13.5047783b.jpg","5047783becf7cab05dcc9a1a4d6b42e5"],["/static/media/14.5ddf86bd.jpg","5ddf86bdb07a60bf555b841e22761100"],["/static/media/15.f8199684.jpg","f819968435da9b483ff4197e7f65e07f"],["/static/media/16.9e29bfde.jpg","9e29bfde90502641275618c8b930153c"],["/static/media/17.6b524f09.jpg","6b524f093287c3c7ff5235b738d5b218"],["/static/media/18.8e74677f.jpg","8e74677fde443917e66607b045c973f9"],["/static/media/19.9b7e11f1.jpg","9b7e11f1888b376cd0003eec2dcf2684"],["/static/media/2.abfd0f5e.jpg","abfd0f5e7d4f538116fc92e50e2a61ea"],["/static/media/20.e1c3c7ac.jpg","e1c3c7ac73541f04de7faab8450c9e5b"],["/static/media/22.0e2a95b1.jpg","0e2a95b1d3895edf3c8281148f09f0c9"],["/static/media/3.f06ff0c1.jpg","f06ff0c13601cfafb5235914a7f15bde"],["/static/media/5.b66793e3.jpg","b66793e3be25cbabbf8b24cf25e233ad"],["/static/media/6.7e2c2da3.jpg","7e2c2da3ad4b23b50fd06cd5e9b8b1fc"],["/static/media/7.09ffe486.jpg","09ffe486647a04793f8dd875e1ec2d0f"],["/static/media/8.3b23b171.jpg","3b23b17193d9b3dd5ceba7b4561e5d6b"],["/static/media/9.bf6d56bf.jpg","bf6d56bf8e95ee89103eb2f8d242629f"],["/static/media/error.d6174862.svg","d6174862dc2ba9b57e131a5fa1b43db5"],["/static/media/list.28afff3a.svg","28afff3a981b0a50bb76de4ebe419435"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});