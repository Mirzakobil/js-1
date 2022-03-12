const data = require('./task2-data.json')
console.log(data)

const uniqueCards = Array.from(new Set(data.map(e => e.name)))
 .map(name => {
   return data.find(e => e.name === name)
 })
console.log(data)
console.log(uniqueCards)