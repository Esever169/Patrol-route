const CACHE='patrol-route-v0.17.2-shell';
const SHELL=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(url.hostname.includes('openstreetmap.org')||url.hostname.includes('arcgis.com')||url.hostname.includes('overpass')) return;
  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});