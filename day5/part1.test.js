const tap = require('tap')
const { splitInputText, parseInputText, computeDestinationNumber, solve } = require('./part1.js')

tap.test('split input text', mainTest => {
  const inputText = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15`
  const actual = splitInputText(inputText)
  const expected = [
    'seeds: 79 14 55 13',
    `seed-to-soil map:
50 98 2
52 50 48`,
    `soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15`
  ]
  mainTest.strictSame(actual, expected)
  mainTest.end()
})

tap.test('parse input text', mainTest => {
  const inputText = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15`
  const actual = parseInputText(inputText)
  const expected = {
    seeds: [79, 14, 55, 13],
    maps: [
      [
        {
          sourceBegin: 98,
          sourceEnd: 100,
          destinationBegin: 50,
          destinationEnd: 52,
        },
        {
          sourceBegin: 50,
          sourceEnd: 50+48,
          destinationBegin: 52,
          destinationEnd: 52+48,
        },
      ],
      [
        {
          sourceBegin: 15,
          sourceEnd: 15+37,
          destinationBegin: 0,
          destinationEnd: 37,
        },
        {
          sourceBegin: 52,
          sourceEnd: 54,
          destinationBegin: 37,
          destinationEnd: 39,
        },
        {
          sourceBegin: 0,
          sourceEnd: 15,
          destinationBegin: 39,
          destinationEnd: 39+15,        
        },
      ]
    ]
  }
  mainTest.strictSame(actual, expected)
  mainTest.end()
})

tap.test('compute destination number', mainTest => {
  mainTest.test('seed is included in the first range of the map', t => {
    const seed = 51
    const map = [
      {
        sourceBegin: 50,
        sourceEnd: 52,
        destinationBegin: 98,
        destinationEnd: 100,
      },
      {
        sourceBegin: 52,
        sourceEnd: 52+48,
        destinationBegin: 50,
        destinationEnd: 50+48,
      },
    ]
    const actual = computeDestinationNumber(seed, map)
    const expected = 99
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.test('seed is not includede in any range of the map, return seed', t => {
    const seed = 49
    const map = [
      {
        sourceBegin: 50,
        sourceEnd: 52,
        destinationBegin: 98,
        destinationEnd: 100,
      },
      {
        sourceBegin: 52,
        sourceEnd: 52+48,
        destinationBegin: 50,
        destinationEnd: 50+48,
      },
    ]
    const actual = computeDestinationNumber(seed, map)
    const expected = 49
    t.strictSame(actual, expected)
    t.end()
  })
  mainTest.end()
})

tap.test('solve example', mainTest => {
  const inputText = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`
  const actual = solve(inputText)
  const expected = 35
  mainTest.strictSame(actual, expected)
  mainTest.end()
})
