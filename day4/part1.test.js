const tap = require('tap')
const { solve, parseTextLine, computeScratchcardWin } = require('./part1.js')

tap.test('parse text line', t => {
  const textline = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'
  const actual = parseTextLine(textline)
  const expected = {
    winningNumbers: [41, 48, 83, 86, 17],
    numbersYouHave: [83, 86, 6, 31, 17, 9, 48, 53]
  }
  t.strictSame(actual, expected)
  t.end()
})

tap.test('compute win of a scratchcard', maintest => {
  maintest.test('0 numbersYouHave contained in winningNumbers, return 0', t => {
    const scratchCard = {
      winningNumbers: [41, 48, 83, 86, 17],
      numbersYouHave: [80, 81, 6, 31, 10, 9, 40, 53]
    }
    const actual = computeScratchcardWin(scratchCard)
    t.strictSame(actual, 0)
    t.end()
  })
  maintest.test('1 numbersYouHave contained in winningNumbers, return 1', t => {
    const scratchCard = {
      winningNumbers: [41, 48, 83, 86, 17],
      numbersYouHave: [80, 81, 6, 31, 10, 9, 48, 53]
    }
    const actual = computeScratchcardWin(scratchCard)
    t.strictSame(actual, 1)
    t.end()
  })
  maintest.test('2 numbersYouHave contained in winningNumbers, return 2', t => {
    const scratchCard = {
      winningNumbers: [41, 48, 83, 86, 17],
      numbersYouHave: [80, 86, 6, 31, 10, 9, 48, 53]
    }
    const actual = computeScratchcardWin(scratchCard)
    t.strictSame(actual, 2)
    t.end()
  })
  maintest.test('3 numbersYouHave contained in winningNumbers, return 4', t => {
    const scratchCard = {
      winningNumbers: [41, 48, 83, 86, 17],
      numbersYouHave: [80, 86, 6, 31, 17, 9, 48, 53]
    }
    const actual = computeScratchcardWin(scratchCard)
    t.strictSame(actual, 4)
    t.end()
  })
  maintest.test('4 numbersYouHave contained in winningNumbers, return 8', t => {
    const scratchCard = {
      winningNumbers: [41, 48, 83, 86, 17],
      numbersYouHave: [83, 86, 6, 31, 17, 9, 48, 53]
    }
    const actual = computeScratchcardWin(scratchCard)
    t.strictSame(actual, 8)
    t.end()
  })
  maintest.end()
})

tap.test('solve example', t => {
  const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`
  const actual = solve(input)
  t.strictSame(actual, 13)
  t.end()
})