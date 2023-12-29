const parseTextLine = textLine => {
  const [cardDescription, numbersStr] = textLine.split(':')
  const [cardNumber] = cardDescription
    .match(/[0-9]+/g)
    .map(numberStr => parseInt(numberStr)) 
  const [winningNumbersStr, numbersYouHaveStr] = numbersStr.split('|')
  const winningNumbers = winningNumbersStr
    .match(/[0-9]+/g)
    .map(numberStr => parseInt(numberStr))
  const numbersYouHave = numbersYouHaveStr
    .match(/[0-9]+/g)
    .map(numberStr => parseInt(numberStr))
  return {
    cardNumber,
    winningNumbers,
    numbersYouHave
  }
}

const computeMatchingNumbers = scratchcard => {
  const { winningNumbers, numbersYouHave } = scratchcard
  let win = 0
  numbersYouHave.forEach(n => {
    if (winningNumbers.includes(n)) {
      win += 1
    }     
  })
  return win
}

const solve = (multilineText) => {
  const originalScratchcards = multilineText
    .split('\n')
    .map(parseTextLine)
    .map(scratchcard => ({
      cardNumber: scratchcard.cardNumber,
      matchingNumbers: computeMatchingNumbers(scratchcard),
      total: 1
    }))
  let sum = 0
  for (let idx = 0; idx < originalScratchcards.length; idx++) {
    const currentCard = originalScratchcards[idx]
    sum += currentCard.total
    const cardInstancesToProcess = currentCard.total
    const cardToProduce = currentCard.matchingNumbers
    for (let i = currentCard.cardNumber; i < currentCard.cardNumber + cardToProduce; i++) {
      const cardToAdd = originalScratchcards[i]
      cardToAdd.total += cardInstancesToProcess
    }
  }

  return sum
}

module.exports = {
  parseTextLine,
  computeMatchingNumbers,
  solve
}