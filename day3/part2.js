const computeIndexesOfCandidateGears = textLine => {
  const indexes = []
  const gearSymbol = '*'

  let gearIndex
  let searchPosition = 0
  while ((gearIndex = textLine.indexOf(gearSymbol, searchPosition)) !== -1) {
    indexes.push(gearIndex)
    searchPosition = gearIndex + 1
  }
  return indexes
}

const computeGearRatio = (threeLines, gearIndex) => {
  const adjacentNumbers = []
  const adjacentlines = [threeLines[0], threeLines[2]]
  adjacentlines.forEach(textLine => {
    const numbersStrArray = textLine.match(/[0-9]+/g) || []
    let searchPosition = 0
    numbersStrArray.forEach(numberStr => {
      let beginIdx = textLine.indexOf(numberStr, searchPosition)
      const endIdx = beginIdx + numberStr.length - 1
      searchPosition = endIdx + 1
      if (beginIdx === gearIndex || beginIdx === gearIndex - 1 || beginIdx === gearIndex + 1 || 
        endIdx === gearIndex || endIdx === gearIndex - 1 || endIdx === gearIndex + 1) {
          adjacentNumbers.push(parseInt(numberStr))
        }
    })
  })
  const middleLine = threeLines[1]
  const numbersStrArray = middleLine.match(/[0-9]+/g) || []
  let searchPosition = 0
  numbersStrArray.forEach(numberStr => {
    let beginIdx = middleLine.indexOf(numberStr, searchPosition)
    const endIdx = beginIdx + numberStr.length - 1
    searchPosition = endIdx + 1
    if (beginIdx === gearIndex + 1 || endIdx === gearIndex - 1) {
      adjacentNumbers.push(parseInt(numberStr))
    }
  })
  if (adjacentNumbers.length === 2) {
    return adjacentNumbers[0] * adjacentNumbers[1]
  }
  console.log(gearIndex)
  console.log(threeLines)
  console.log(adjacentNumbers)
  return 0
}

const computeGearRatiosSum = (textLines) => {
  const linesArray = textLines.split('\n')
  let sum = 0
  const candidateGears = []
  linesArray.forEach((textLine, lineIdx) => {
    computeIndexesOfCandidateGears(textLine)
      .forEach(columnIdx => candidateGears.push({ columnIdx, lineIdx }))
  })
  candidateGears.forEach(({ columnIdx, lineIdx }) => {
    const padChar = '.'
    const firstLine = lineIdx === 0 ? padChar.repeat(linesArray[0].length) : linesArray[lineIdx - 1]
    const middleLine = linesArray[lineIdx]
    const thirdLine = lineIdx === linesArray.length - 1 ? padChar.repeat(linesArray[linesArray.length - 1].length) : linesArray[lineIdx + 1]
    const threeLines = [firstLine, middleLine, thirdLine]
    const gearRatio = computeGearRatio(threeLines, columnIdx)
    sum += gearRatio
  })
  return sum
}

module.exports = {
  computeIndexesOfCandidateGears,
  computeGearRatio,
  solve: computeGearRatiosSum
}