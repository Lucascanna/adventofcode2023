const numMap = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
}

const extractTwoDigitsNumber = (textLine) => {
  const foundDigits = textLine
    .match(/[1-9]/g)
    ?.map(digit => numMap[digit] )

  if (!foundDigits) {
    console.log('not found')
    return 0
  }
  return foundDigits[0] * 10 + foundDigits.findLast(() => true)
}

const solve = (multilineText) => {
  return multilineText
    .split('\n')
    .map(extractTwoDigitsNumber)
    .reduce((acc, curr) => acc += curr, 0)
}

module.exports = { extractTwoDigitsNumber, solve }