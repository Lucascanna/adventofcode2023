const tap = require('tap')
const { computePartsSum } = require('./part1.js')

tap.test('should return the parts sum', mainTest => {
  mainTest.test('schematic example', t => {
    const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`
    const actual = computePartsSum(input)
    const expected = 4361
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.end()
})