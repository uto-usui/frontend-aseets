// update page with my-cache
const updatesChannel = new BroadcastChannel('my-cache')
updatesChannel.addEventListener('message', (event) => {
  window.location.reload()
})
