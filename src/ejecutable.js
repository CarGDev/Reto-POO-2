'use strict'
const persona = require('./persona')

class ejecutable extends persona {
  constructor (_nombre, _edad, _sexo, _DNI, _peso, _altura) {
    super(_nombre, _edad, _sexo)
    this.DNI = _DNI || this.DNI
    this.sexo = this.isGenre()(_sexo)
    this.peso = _peso || this.peso
    this.altura = _altura || this.altura
  }

  get esMayorDeEdad () {
    return () => {
      if (this.edad > 17) {
        return true
      }
      return false
    }
  }

  get toString () {
    return () => {
      let mayorEdad = this.esMayorDeEdad()
      if (mayorEdad === true) {
        mayorEdad = "mayor de edad"
      } else {
        mayorEdad = "menor de edad"
      }
      return `${this.nombre} tiene ${this.edad} por lo que es ${mayorEdad}, cuenta con un DNI=${this.DNI}, es ${this.sexo} y mide ${this.altura} con un peso de ${this.peso}`
    }
  }
}


const j = new ejecutable('carlos', 12, 'h', 'fcawefqw', 155, 188)
console.log(j.toString())
module.exports = ejecutable