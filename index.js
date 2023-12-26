const fs = require('fs')
const [, , day, part] = process.argv

console.log(`Solving day ${day} part ${part}`)
const { solve } = require(`./day${day}/part${part}.js`)
const fileContent = fs.readFileSync(`./day${day}/part${part}.input.txt`, { encoding: 'utf-8' })
const result = solve(fileContent)
console.log(result)