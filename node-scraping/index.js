// 🐈 from: https://qoob.cc/web-scraping/

import {loadMessiGoals} from './fetch'
import {parseData} from './parsing'
import {prepareData} from './processing'
import {saveStats} from './saving'

loadMessiGoals().then(parseData).then(prepareData).then(saveStats)
