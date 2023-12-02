const numMap = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
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
    .match(/[1-9]|one|two|three|four|five|six|seven|eight|nine/g)
    ?.map(digit => numMap[digit] )
  
  if (!foundDigits) {
    console.log('not found')
    return 0
  }
  return foundDigits[0] * 10 + foundDigits.findLast(() => true)
}

const day1 = (multilineText) => {
  return multilineText
    .split('\n')
    .map(extractTwoDigitsNumber)
    .reduce((acc, curr) => acc += curr, 0)
}

module.exports = { extractTwoDigitsNumber, day1 }