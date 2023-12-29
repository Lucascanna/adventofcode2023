const splitInputText = (inputText) => {
  return inputText.split('\n\n')
}

const parseInputText = (inputText) => {
  const [seedsLineTxt, ...mapsTxt] = splitInputText(inputText)
  const seeds = seedsLineTxt
    .match(/[0-9]+/g)
    .map(numberStr => parseInt(numberStr))
  const maps = mapsTxt.map(mapTxt => {
    const [, ...rangesTxt] = mapTxt.split('\n')
    return rangesTxt.map(rangeTxt => {
      const [destinationBegin, sourceBegin, rangeLength] = rangeTxt
        .match(/[0-9]+/g)
        .map(numberStr => parseInt(numberStr))
      return {
        sourceBegin,
        sourceEnd: sourceBegin + rangeLength,
        destinationBegin,
        destinationEnd: destinationBegin + rangeLength
      }
    })
  })
  return {
    seeds, 
    maps
  }
}

const computeDestinationNumber = (seed, map) => {
  const foundRange = map.find(range => seed >= range.sourceBegin && seed < range.sourceEnd)
  if (!foundRange) {
    return seed
  }
  const diff = seed - foundRange.sourceBegin
  return foundRange.destinationBegin + diff
}

const solve = (inputText) => {
  const { seeds, maps } = parseInputText(inputText)
  let minLocation
  for (let i = 0; i < seeds.length; i++) {
    let seed = seeds[i]
    for (let j = 0; j < maps.length; j++) {
      const currentMap = maps[j]
      seed = computeDestinationNumber(seed, currentMap)
    }
    if (!minLocation || seed < minLocation) {
      minLocation = seed
    }
  }
  return minLocation
}

module.exports = {
  splitInputText,
  parseInputText,
  computeDestinationNumber,
  solve
}