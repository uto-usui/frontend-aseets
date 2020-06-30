// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

// -- Start of cachingExtensions --
workbox.routing.registerRoute(
  /.*\.(mp4|webm)/,
  new workbox.strategies.CacheFirst({
    plugins: [
      new workbox.cacheableResponse.Plugin({statuses: [200]}),
      new workbox.rangeRequests.Plugin(),
    ],
  }),
)
// -- End of cachingExtensions --

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// google fonts
workbox.routing.registerRoute(new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.CacheFirst({
    plugins: [
      new workbox.broadcastUpdate.Plugin({
        channelName: 'google-fonts-cache',
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }), 'GET')


workbox.routing.registerRoute(new RegExp('.*'), new workbox.strategies.StaleWhileRevalidate({
  'cacheName': 'my-cache',
  plugins: [
    new workbox.broadcastUpdate.Plugin({
      channelName: 'my-cache',
    }),
    new workbox.cacheableResponse.Plugin({
      statuses: [0, 200],
    }),
    new workbox.expiration.Plugin({
      maxAgeSeconds: 60 * 60,
    }),
  ],
}), 'GET')
