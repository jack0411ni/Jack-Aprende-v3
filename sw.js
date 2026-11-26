const CACHE='jack-aprende-3-preview-21';const FILES=['./','./index.html','./style-v19.css','./data.js?v=21','./app-v21.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./legacy-2.1.html'];self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('jack-aprende-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===location.origin)e.respondWith(fetch(e.request).then(response=>{if(response.ok){let copy=response.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,copy)))}return response}).catch(()=>caches.match(e.request).then(r=>r||caches.match(new URL(e.request.url).pathname))))});





