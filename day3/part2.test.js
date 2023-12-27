const tap = require('tap')
const { solve, computeIndexesOfCandidateGears, computeGearRatio } = require('./part2.js')

tap.test('compute the indexes of candidate gears within a textline', mainTest => {
  mainTest.test('line without candidate gears, should return empty array', t => {
    const textline = '123.....#.#09..&'
    const actual = computeIndexesOfCandidateGears(textline)
    t.strictSame(actual, [])
    t.end()
  })
  mainTest.test('line with one candidate gear, should return array with one element', t => {
    const textline = '123..*..#.#09..&'
    const actual = computeIndexesOfCandidateGears(textline)
    t.strictSame(actual, [5])
    t.end()
  })
  mainTest.test('line with one candidate gear at beginning of line, should return array with one element', t => {
    const textline = '*123.....#.#09..&'
    const actual = computeIndexesOfCandidateGears(textline)
    t.strictSame(actual, [0])
    t.end()
  })
  mainTest.test('line with one candidate gear at end of line, should return array with one element', t => {
    const textline = '123.....#.#09..&*'
    const actual = computeIndexesOfCandidateGears(textline)
    t.strictSame(actual, [16])
    t.end()
  })
  mainTest.test('line with two candidates gear, should return array with two element', t => {
    const textline = '123.*...#.#09..&*'
    const actual = computeIndexesOfCandidateGears(textline)
    t.strictSame(actual, [4, 16])
    t.end()
  })
  mainTest.end()
})

tap.test('compute gear ratio of a gear candidate, return 0 if candidate is not a gear', mainTest => {
  mainTest.test('candidate has 0 adjacent numbers, return 0', t => {
    const threeLines = [
      '.*7....55.',
      '.25$.*....',
      '..64...8..',
    ]
    const gearIndex = 5
    const actual = computeGearRatio(threeLines, gearIndex)
    t.strictSame(actual, 0)
    t.end()
  })
  mainTest.test('candidate has 1 adjacent number, return 0', t => {
    const threeLines = [
      '.*7....55.',
      '.25$.*46..',
      '..64...8..',
    ]
    const gearIndex = 5
    const actual = computeGearRatio(threeLines, gearIndex)
    t.strictSame(actual, 0)
    t.end()
  })
  mainTest.test('candidate has 2 adjacent numbers, return gear ratio', t => {
    const threeLines = [
      '.*.15..55.',
      '.25$.*46..',
      '..64...8..',
    ]
    const gearIndex = 5
    const actual = computeGearRatio(threeLines, gearIndex)
    t.strictSame(actual, 15*46)
    t.end()
  })
  mainTest.test('candidate has 2 adjacent numbers, return gear ratio', t => {
    const threeLines = [
      '...149..55',
      '.22..*....',
      '..6.518.77',
    ]
    const gearIndex = 5
    const actual = computeGearRatio(threeLines, gearIndex)
    t.strictSame(actual, 149*518)
    t.end()
  })
  mainTest.test('candidate has 2 adjacent numbers, return gear ratio', t => {
    const threeLines = [
      '.*...15.55.',
      '.25$.*46..',
      '..64...8..',
    ]
    const gearIndex = 5
    const actual = computeGearRatio(threeLines, gearIndex)
    t.strictSame(actual, 15*46)
    t.end()
  })
  mainTest.test('candidate has 2 adjacent numbers, return gear ratio', t => {
    const threeLines = [
      '.*....15.5',
      '.25$.*46..',
      '..64...8..',
    ]
    const gearIndex = 5
    const actual = computeGearRatio(threeLines, gearIndex)
    t.strictSame(actual, 15*46)
    t.end()
  })
  mainTest.test('candidate has 2 adjacent numbers, return gear ratio', t => {
    const threeLines = [
      '.*.....5.5',
      '.2.15*46..',
      '..64...8..',
    ]
    const gearIndex = 5
    const actual = computeGearRatio(threeLines, gearIndex)
    t.strictSame(actual, 15*46)
    t.end()
  })
  mainTest.test('candidate has 3 adjacent numbers, return 0', t => {
    const threeLines = [
      '.*....15.5',
      '.2.15*46..',
      '..64...8..',
    ]
    const gearIndex = 5
    const actual = computeGearRatio(threeLines, gearIndex)
    t.strictSame(actual, 0)
    t.end()
  })
  mainTest.end()
})



tap.test('should return the parts sum of all gear ratios', mainTest => {

  mainTest.test('only 2 out of 4 * are gears, other 2 are not beacuse they are adjacent to less or more than 2 numbers', t => {
    const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
.*7...755.
.25$.*....
.664.598..`
    const actual = solve(input)
    const expected = 467835
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('piece of real input', t => {
    const input = `..*....149........409....$................................................868.378......144..149............356.....872..............871.533.
....22...*..........$........7.......149....979......................826.&.....................@........-.....*275.....................*....
........518.773*.........10..$..........*........805..812.972......................123......*............98.........=........./609.682......`
    const actual = solve(input)
    const expected = 149*518+356*275+871*533
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('piece of real input', t => {
    const input = `.......................654.....850.405......................395.....-.......467....477...........973............../........191........398...
.925...793...423*.........@..........................................................=.659..........*.....817.....230...........653..-......
.......*.........52...........764$....273...................@........430....................................*...........669.....-.......71..`
    const actual = solve(input)
    const expected = 423*52
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('piece of real input', t => {
    const input = `.......12.......935............184.720...243........589.652..........435..........483.............6...........................904...........
......*.....968*.....$............*........=..348...*..........986....*...................459....*........422................#......%482....
....291............612....290..........903........699......218*.......376............890....*.838...81......*.....138.../194................
..............156......$..*...891.&731....%..89...................523..........699....+...227......*.......225....=...........388....*......
................*...189..591.*................*.......783.....107..-...54.287..$................533.../..............909........&.603.424...`
    const actual = solve(input)
    const expected = 12*291+935*968+184*720+589*699+435*376+6*838+218*986+459*227+422*225+290*591+81*533+603*424
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.end()
})