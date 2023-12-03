const fs = require('fs')
const { day2 } = require('./day2')

const fileContent = fs.readFileSync('./day2.input.txt', { encoding: 'utf-8' })
const result = day2(fileContent)
console.log(result)