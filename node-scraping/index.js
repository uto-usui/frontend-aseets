// 🐈 from: https://qoob.cc/web-scraping/

const {loadMessiGoals} = require('./fetch')
const {parseData} = require('./parsing')
const {prepareData} = require('./processing')
const {saveStats} = require('./saving')

loadMessiGoals().then(parseData).then(prepareData).then(saveStats)
