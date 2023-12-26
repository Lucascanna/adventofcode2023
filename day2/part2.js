const possibleColorsMap = {
  red: 12,
  green: 13,
  blue: 14
}

const computeNumberOfPossibleGames = (textLine) => {
  const [gameStr, gameResultsStr] = textLine.split(':')
  const [, gameId] = gameStr.split(' ')
  const gameResultsStringsArray = gameResultsStr.split(';')
  for (const gameResultStr of gameResultsStringsArray) {
    const colorsOfResultStrArray = gameResultStr.split(',')
    for (const colorsOfResultStr of colorsOfResultStrArray) {
      const [, num, color] = colorsOfResultStr.split(' ')
      if (num > possibleColorsMap[color]) {
        return 0
      }
    }
  }
  return parseInt(gameId)
}

const computeFewestNumberOfCubes = (textLine) => {
  const [gameStr, gameResultsStr] = textLine.split(':')
  const [, gameId] = gameStr.split(' ')
  const gameResultsStringsArray = gameResultsStr.split(';')
  const fewestCubesMap = {
    red: 0,
    green: 0,
    blue: 0
  }
  for (const gameResultStr of gameResultsStringsArray) {
    const colorsOfResultStrArray = gameResultStr.split(',')
    for (const colorsOfResultStr of colorsOfResultStrArray) {
      const [, num, color] = colorsOfResultStr.split(' ')
      if (num > fewestCubesMap[color]) {
        fewestCubesMap[color] = parseInt(num)
      }
    }
  }
  return fewestCubesMap
}

const computePower = (textLine) => {
  const fewestCubesMap = computeFewestNumberOfCubes(textLine)
  return fewestCubesMap.red * fewestCubesMap.green * fewestCubesMap.blue
}

const solve = (multilineText) => {
  return multilineText
    .split('\n')
    .map(computePower)
    .reduce((acc, curr) => acc += curr, 0)
}

module.exports = {
  computeNumberOfPossibleGames,
  computeFewestNumberOfCubes,
  solve,
}