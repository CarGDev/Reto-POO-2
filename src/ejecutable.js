'use strict'
const persona = require('./persona')
const readline = require('readline')

class ejecutable extends persona {
  constructor(_nombre = 'Arturo', _edad = 12, _sexo, _DNI, _peso, _altura) {
    super(_nombre, _edad, _sexo)
    this.DNI = _DNI || this.DNI
    this.peso = _peso || this.peso
    this.altura = _altura || this.altura
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu nombre: ', (name) => {
  rl.question('Ingresa tu edad: ', (age) => {
    rl.question('Ingresa tu sexo (H/F): ', (sex) => {
      rl.question('Ingresa tu peso: ', (weigth) => {
        rl.question('Ingresa tu altura: ', (height) => {
          const object1 = new ejecutable(name, age, sex, '', weigth, height)
          const object2 = new ejecutable(name, age, sex)
          const object3 = new ejecutable()

          console.log(`\n${object1.nombre} es mayor de edad? ${object1.esMayorDeEdad()}`)
          console.log(`\n${object2.nombre} es mayor de edad? ${object2.esMayorDeEdad()}`)
          console.log(`\n${object3.nombre} es mayor de edad? ${object2.esMayorDeEdad()}`)

          console.log(`\n${object1.toString()}`)
          console.log(`\n${object2.toString()}`)
          console.log(`\n${object3.toString()}`)
          rl.close();
        })
      })
    })
  })
})

rl.on('close', () => {
  console.log('\nBYE BYE !!!')
  process.exit(0)
})


module.exports = ejecutable