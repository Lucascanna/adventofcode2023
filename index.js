const fs = require('fs')
const { day1 } = require('./day1')

const fileContent = fs.readFileSync('./day1.input.txt', { encoding: 'utf-8' })
const result = day1(fileContent)

console.log(result)