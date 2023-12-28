const parseTextLine = textLine => {
  const [, numbersStr] = textLine.split(':')
  const [winningNumbersStr, numbersYouHaveStr] = numbersStr.split('|')
  const winningNumbers = winningNumbersStr
    .match(/[0-9]+/g)
    .map(numberStr => parseInt(numberStr))
  const numbersYouHave = numbersYouHaveStr
    .match(/[0-9]+/g)
    .map(numberStr => parseInt(numberStr))
  return {
    winningNumbers,
    numbersYouHave
  }
}

const computeScratchcardWin = scratchcard => {
  const { winningNumbers, numbersYouHave } = scratchcard
  let win = 0
  numbersYouHave.forEach(n => {
    if (winningNumbers.includes(n)) {
      win = win === 0 ? 1 : win * 2
    }     
  })
  return win
}

const solve = (multilineText) => {
  return multilineText
    .split('\n')
    .map(parseTextLine)
    .map(computeScratchcardWin)
    .reduce((acc, curr) => acc += curr, 0)
}

module.exports = {
  parseTextLine,
  computeScratchcardWin,
  solve
}