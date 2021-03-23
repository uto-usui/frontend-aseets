import yahooFinance from 'yahoo-finance'
import { promises as fs } from 'fs'

const SYMBOL = 'AAPL'

const get = async (symbol: string) => {
  const quotes = await yahooFinance.historical({
    symbol: symbol,
    from: '2020-01-01',
    to: '2021-03-23',
    period: 'd',
  })

  if (quotes[0]) {
    console.log(
      quotes,
    )
    fs.writeFile(`./${symbol}.json`, JSON.stringify(quotes))
  } else {
    console.log('N/A')
  }
}

get(SYMBOL)
