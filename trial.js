const person = {
    name: 'amira',
    age: 24
}
console.log(person.name)

const personJson = JSON.stringify(person)
console.log(personJson)

const fs = require('fs')
fs.writeFileSync('trial.json', personJson)

console.log(fs.readFileSync('trial.json').toString())

const personObject = JSON.parse(personJson)
console.log(personObject)

personObject.name='AMIRAA'
personObject.age=25

const userJson = JSON.stringify(personObject)
fs.writeFileSync('trial.json',userJson)

