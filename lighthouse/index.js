// npm i -g lighthouse
// lighthouse https://google.com --output json --quiet | node index.js
// or
// npm i -g pwmetrics
// pwmetrics https://google.com
//
// without this script
//   -> lighthouse https://google.com --quiet --throttling.cpuSlowdownMultiplier=1 --throttling-method=provided
// with basic auth
// bash -c 'base64 <(echo -n '<username>:<password>')'
// lighthouse https://google.com --extra-headers "{\"Authorization\":\"Basic xxxx\"}" --quiet --throttling.cpuSlowdownMultiplier=1 --throttling-method=provided

const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()

const stats = JSON.parse(input)
const scoreMap = Object.entries(stats.audits).reduce((acc, [key, a]) => {
  if (typeof a.score === 'number') {
    return Object.assign({}, acc, {[key]: a.score })
  }
  return acc
}, {})
console.log(scoreMap)
