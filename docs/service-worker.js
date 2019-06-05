importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "angle_horizontal.4f490c42.svg",
    "revision": "65aec74a1aa9e319a9671f07dd56e62d"
  },
  {
    "url": "angle_length.f7eaf060.svg",
    "revision": "ef6c4e641cf204679d7f29e87139e251"
  },
  {
    "url": "angle_th.3990d69a.svg",
    "revision": "c78b8cd646d13ce4826b4a69fa7faa01"
  },
  {
    "url": "angle_tv.8360c424.svg",
    "revision": "058bd4d4e1899db2868176216fb086b1"
  },
  {
    "url": "angle_vertical.e7733712.svg",
    "revision": "b6da8a1c2748748d805d63a1e3b28067"
  },
  {
    "url": "angle.28e345be.svg",
    "revision": "dd785a25c4aa0a02116e4d743292031d"
  },
  {
    "url": "app.92a8afb3.js",
    "revision": "ec77ef06301e55efdf9eacc984ab2fe0"
  },
  {
    "url": "app.94305296.js",
    "revision": "14ba89b768068c0cee801a1b72355e84"
  },
  {
    "url": "app.b823ebc0.css",
    "revision": "f96af4ba09d4cb99d51d883c623a96a4"
  },
  {
    "url": "app.c24c1675.css",
    "revision": "a4087c08cb500cd4362cf39cd7a96bb7"
  },
  {
    "url": "app.dc11ecc4.js",
    "revision": "893d59887cea842a41c429d79a7f701f"
  },
  {
    "url": "app.f3f39bbf.js",
    "revision": "4f61000893468e50e8a0741d731770e8"
  },
  {
    "url": "channel_horizontal.c2148e8d.svg",
    "revision": "4c74fd649eb6613b507ed801dceabf75"
  },
  {
    "url": "channel_length.7a424222.svg",
    "revision": "99e60f8ea2961c2c9b0f9ee34d6d2a47"
  },
  {
    "url": "channel_t1.0d14c2ec.svg",
    "revision": "7ce3f44ce439efc17c7cccb692ccb63b"
  },
  {
    "url": "channel_t2.8a53290a.svg",
    "revision": "e6f9bca3b8f660df1e58eea07bf4653e"
  },
  {
    "url": "channel_vertical.dea0a575.svg",
    "revision": "bbe7fe678364b23c47d1b3552a69c157"
  },
  {
    "url": "channel.efd8a619.svg",
    "revision": "b392027fc08f3dd933a4ef198100ebba"
  },
  {
    "url": "cuboid_heigt.43905db0.svg",
    "revision": "1a3c6f9d7dc9f149189ef10033cc84cb"
  },
  {
    "url": "cuboid_horizontal.52ab8d81.svg",
    "revision": "e3d67c198424f9452bcc013e368ea843"
  },
  {
    "url": "cuboid_vertical.14a2ebb9.svg",
    "revision": "80c43c4b64d9a58dc4a62fc3ff870a4d"
  },
  {
    "url": "cuboid.d3c34fea.svg",
    "revision": "60210733140b58df89ebdc99505b3b50"
  },
  {
    "url": "cylinder_diameter.b5257ca9.svg",
    "revision": "ad9035656eb76d3275eccaebf3cee138"
  },
  {
    "url": "cylinder_height.0bd931ba.svg",
    "revision": "7df78c852e3e6ff4e41a7d2c67e7f821"
  },
  {
    "url": "cylinder.1db72a18.svg",
    "revision": "ad4f2cb36d8fa7654705ba434015c78a"
  },
  {
    "url": "hbeam_horizontal_width.0e5488e3.svg",
    "revision": "cc0bd56eca9079876d503209d63a0ddf"
  },
  {
    "url": "hbeam_horizontal.8f0b83aa.svg",
    "revision": "4bbf0151952c2d9c8f3d09f21047ba29"
  },
  {
    "url": "hbeam_length.9b1ebe30.svg",
    "revision": "611874522926086e4ad1cfbd4d846c7c"
  },
  {
    "url": "hbeam_vertical_width.dee27a5f.svg",
    "revision": "35a9a94640b5ae1970131e6a69c6a50b"
  },
  {
    "url": "hbeam_vertical.a53b2208.svg",
    "revision": "d5208eda61b5f146f19c3171fdcef167"
  },
  {
    "url": "hbeam.1b0b2753.svg",
    "revision": "c60d59fb0dba1a3d95a8991435637bf8"
  },
  {
    "url": "icon-192.4aa9aa5f.png",
    "revision": "8b49f3ae547f6cbffa9ef0eb79f2160c"
  },
  {
    "url": "icon-192.d30cd523.png",
    "revision": "63fc4e0199d7e21bbabb17ba6c6a5513"
  },
  {
    "url": "index.html",
    "revision": "f36395eab30c19239a65b7e06f577dd7"
  },
  {
    "url": "pipe_diameter.2caeddfb.svg",
    "revision": "fa92a98e9f3b286737ab31fbd7cf4589"
  },
  {
    "url": "pipe_heigt.55a04143.svg",
    "revision": "b715a89e230ae3ca236707d8a8dd09ed"
  },
  {
    "url": "pipe_thickness.2d37ae8f.svg",
    "revision": "554a4dfeefd8ff6ad7fc7e958073821e"
  },
  {
    "url": "pipe.2b821920.svg",
    "revision": "6d22e72e6fc7a34306b1cbc7c548bc8f"
  },
  {
    "url": "square_pipe_heigt.91becaa9.svg",
    "revision": "5bac0dbe828ca4d0f7a17e8e4edf206e"
  },
  {
    "url": "square_pipe_horizontal.cb27d934.svg",
    "revision": "1ae69f1d7892249fec53388c58c77cb9"
  },
  {
    "url": "square_pipe_thickness.f3059691.svg",
    "revision": "317e8be8b93d09cbda3525220e4f34c0"
  },
  {
    "url": "square_pipe_vertical.8d835d6a.svg",
    "revision": "94ec7b3f209ed38bd01a6d1c3a670f65"
  },
  {
    "url": "square_pipe.2c531f6b.svg",
    "revision": "abb4e5eb1c3514e3d0977c8cab595caa"
  },
  {
    "url": "/",
    "revision": "7263388fedba6bc84d4cae31ae4dae61"
  }
]);
