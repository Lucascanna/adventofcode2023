const symbolRegex = /[^a-zA-Z0-9\.]/g

const hasSymbolToLeft = (beginIdx, textLine) => beginIdx > 0 && textLine[beginIdx - 1].match(symbolRegex)
const hasSymbolToRight = (endIdx, textLine) => endIdx < textLine.length - 1 && textLine[endIdx + 1].match(symbolRegex)
const isBeginningOfLine = (textLine, numberStr) => textLine.substring(0, numberStr.length) === numberStr
const computePartsSum = (textLines) => {
  const linesArray = textLines.split('\n')
  let sum = 0
  linesArray.forEach((textLine, lineIdx) => {
    const numbersStrArray = textLine.match(/[0-9]+/g) || []
    numbersStrArray.forEach(numberStr => {
      let beginIdx = textLine.search(new RegExp(`([^0-9]|^)${numberStr}([^0-9]|$)`))
      if (!isBeginningOfLine(textLine, numberStr)) {
        beginIdx += 1
      }
      const endIdx = beginIdx + numberStr.length - 1
      if (numberStr == '204') {
        console.log({beginIdx, endIdx})
      }
      if (hasSymbolToLeft(beginIdx, textLine)) {
        sum += parseInt(numberStr)
        console.log({left: numberStr})
        return
      }
      if (hasSymbolToRight(endIdx, textLine)) {
        sum += parseInt(numberStr)
        console.log({right: numberStr})
        return
      }
      if (lineIdx > 0) {
        const adjacentUpperLine = linesArray[lineIdx - 1]
        const beginIdxUpper = beginIdx > 0 ? beginIdx - 1 : 0 
        const endIdxUpper = endIdx < adjacentUpperLine.length - 1 ? endIdx + 1 : endIdx
        const adjacentUpperString = adjacentUpperLine.substring(beginIdxUpper, endIdxUpper + 1)
        if (adjacentUpperString.match(symbolRegex)) {
          sum += parseInt(numberStr)
          console.log({up: numberStr})
          return
        }
      }
      if (lineIdx < linesArray.length - 1) {
        const adjacentDownLine = linesArray[lineIdx + 1]
        const beginIdxDown = beginIdx > 0 ? beginIdx - 1 : 0 
        const endIdxDown = endIdx < adjacentDownLine.length - 1 ? endIdx + 1 : endIdx
        const adjacentDownString = adjacentDownLine.substring(beginIdxDown, endIdxDown + 1)
        if (adjacentDownString.match(symbolRegex)) {
          sum += parseInt(numberStr)
          console.log({down: numberStr})
          return
        }
      }
    })
  })
  return sum
}

module.exports = {
  computePartsSum,
  solve: computePartsSum
}