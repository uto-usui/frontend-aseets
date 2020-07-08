import { BroadcastChannel as BC } from 'broadcast-channel'

// update page with my-cache
const updatesChannel = window.BroadcastChannel
  ? new BroadcastChannel('my-cache')
  : new BC('my-cache')

updatesChannel &&
  updatesChannel.addEventListener('message', (_event) => {
    window.location.reload()
  })
