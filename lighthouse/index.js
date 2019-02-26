// npm i -g lighthouse
// lighthouse https://google.com --output json --quiet | node index.js
// or
// npm i -g pwmetrics
// pwmetrics https://google.com

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
