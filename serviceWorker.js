const cacheName = "weightcalc-caches";
const urlsToCache = ["/pwa/", "/pwa/css/style.css", "/pwa/app.js"];

//登録
navigator.serviceWorker.register("/serviceWorker.js");

//インストール
self.addEventListener("install", e => {
  e.waitUntil(caches.open(cacheName).then(c => c.addAll(urlsToCache)));
});

//キャッシュロード
self.addEventListener("fetch", e => {
  e.respondwith(
    caches.match(e.request).then(res => (res ? res : fetch(e.request)))
  );
});
