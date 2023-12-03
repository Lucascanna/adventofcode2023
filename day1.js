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

const exceptionsMap = {
  'oneight': 'oneeight',
  'twone': 'twoone',
  'threeight': 'threeeight',
  'fiveight': 'fiveeight',
  'sevenine': 'sevennine',
  'eightwo': 'eighttwo',
  'nineight': 'nineeight'
}

const extractTwoDigitsNumber = (textLine) => {
  const exceptions = Object.keys(exceptionsMap)
  let curatedTextLine = textLine
  exceptions.forEach(exc => {
    if (textLine.includes(exc)) {
      curatedTextLine = curatedTextLine.replace(exc, exceptionsMap[exc])
    }
  })
  const foundDigits = curatedTextLine
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