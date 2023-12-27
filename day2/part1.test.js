const tap = require('tap')
const { computeNumberOfPossibleGames, solve } = require('./part1')

tap.test('should return the number of possible games', mainTest => {
  mainTest.test('possible game', t => {
    const input = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    const actual = computeNumberOfPossibleGames(input)
    const expected = 1
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('possible game', t => {
    const input = 'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
    const actual = computeNumberOfPossibleGames(input)
    const expected = 2
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('impossible game', t => {
    const input = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
    const actual = computeNumberOfPossibleGames(input)
    const expected = 0
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.end()
})

tap.test('should return the sum of the extracted number of each line', mainTest => {
  const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
  const actual = solve(input)
  const expected = 8
  mainTest.strictSame(actual, expected)
  mainTest.end()
})