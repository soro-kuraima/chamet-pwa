if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    i[s] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const o =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (i[o]) return;
    let c = {};
    const d = (e) => s(e, o),
      t = { module: { uri: o }, exports: c, require: d };
    i[o] = Promise.all(n.map((e) => t[e] || d(e))).then((e) => (r(...e), c));
  };
}
define(['./workbox-3e911b1d'], function (e) {
  'use strict';
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'assets/index-2-BOz75A.js', revision: null },
        { url: 'assets/index-XY9cwy4N.css', revision: null },
        { url: 'index.html', revision: 'c640327f25245704d5ad2d5a84b74591' },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        {
          url: 'app-icons/android/mipmap-xxxhdpi/ic_launcher.png',
          revision: '46be68b83bfa49253da37bc4d1279b41',
        },
        {
          url: 'app-icons/playstore.png',
          revision: '5a125e083ec2872bdc50a14300419fd2',
        },
        {
          url: 'app-icons/appstore.png',
          revision: '74dfc7ca1451807beeb4d3ee457ebc83',
        },
        {
          url: 'app-icons/maskable/maskable-xxxhdpi.png',
          revision: '5a125e083ec2872bdc50a14300419fd2',
        },
        {
          url: 'manifest.webmanifest',
          revision: 'b870c8a2e0dcb854b666913e42e510f9',
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL('index.html'))
    );
});
