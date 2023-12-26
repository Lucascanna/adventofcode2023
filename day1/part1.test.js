const tap = require('tap')
const { extractTwoDigitsNumber, solve } = require('./part1')

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
  mainTest.end()
})

tap.test('should return the sum of the extracted number of each line', mainTest => {
  const input = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`
  const actual = solve(input)
  const expected = 142
  mainTest.strictSame(actual, expected)
  mainTest.end()
})