const tap = require('tap')
const { extractTwoDigitsNumber, day1 } = require('../day1.js')

tap.test('should return the two-digits number with first and last found digits', mainTest => {
  mainTest.test('digits are first and last char', t => {
    const actual = extractTwoDigitsNumber('1abc2')
    const expected = 12
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('digits are in the middle of the string', t => {
    const actual = extractTwoDigitsNumber('pqr3stu8vwx')
    const expected = 38
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('with more than one digit', t => {
    const actual = extractTwoDigitsNumber('a1b2c3d4e5f')
    const expected = 15
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('with only 1 digit', t => {
    const actual = extractTwoDigitsNumber('treb7uchet')
    const expected = 77
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('no digits', t => {
    const actual = extractTwoDigitsNumber('trebuchet')
    const expected = 0
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('both first and last digits are spelled, second is digit', t => {
    const actual = extractTwoDigitsNumber('two1nine')
    const expected = 29
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('both first, second and last digits are spelled', t => {
    const actual = extractTwoDigitsNumber('eightwothree')
    const expected = 83
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('both first and last digits are spelled with padding', t => {
    const actual = extractTwoDigitsNumber('abcone2threexyz')
    const expected = 13
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('both first and last digits are spelled with initial padding', t => {
    const actual = extractTwoDigitsNumber('xtwone3four')
    const expected = 24
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('both first and last digits are digits wit spelled ones in between', t => {
    const actual = extractTwoDigitsNumber('4nineeightseven2')
    const expected = 42
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('first is spelled, last is digit', t => {
    const actual = extractTwoDigitsNumber('zoneight234')
    const expected = 14
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('first is digit, last is spelled', t => {
    const actual = extractTwoDigitsNumber('gjdvx1fourseven')
    const expected = 17
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('only one spelled digit', t => {
    const actual = extractTwoDigitsNumber('one')
    const expected = 11
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('overlapping spelled digits', t => {
    const actual = extractTwoDigitsNumber('oneight')
    const expected = 18
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.end()
})

tap.test('should return the sum of the extracted number of each line', mainTest => {
  const input = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`
  const actual = day1(input)
  const expected = 142
  mainTest.strictSame(actual, expected)
  mainTest.end()
})