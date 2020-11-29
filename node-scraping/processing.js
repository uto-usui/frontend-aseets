const omitRank = (row) =>
  row.length === 15 ? [...row.slice(0, 5), ...row.slice(6)] : row

const getLastMatch = (idx, goals) =>
  goals[idx].length === 14 ? goals[idx] : getLastMatch(idx - 1, goals)

const transformRowToObject = (row, idx, goals) => {
  if (row.length === 1) return null

  const match = getLastMatch(idx, goals)
  const isSameMatch = row.length === 14

  return {
    goalType: row[3 + isSameMatch * 9],
  }
}

const prepareData = (rawData) =>
  rawData.map(omitRank).map(transformRowToObject).filter(Boolean)

module.exports = {prepareData}
