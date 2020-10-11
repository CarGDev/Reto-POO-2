'use strict'
const { nanoid } = require('nanoid')
const name = 'nombre'
const edad = 'edad'
const genreH = 'H'
const genreF = 'F'
const peso = 80
const altura = 190

const isEmpty = () => {
  return (_empty) => {
    if (!_empty) {
      throw new Error(`${name} or ${edad} should not empty`)
    }
    return _empty
  }
}

const isNotString = () => {
  return (notString) => {
    if (!isNaN(notString)) {
      throw new TypeError(`${name} expected: String`)
    }
    return notString
  }
}

const isNotInteger = () => {
  return (_notInteger) => {
    if (isNaN(_notInteger)) {
      throw new TypeError(`${edad} expected: Integer`)
    }
    return _notInteger
  }
}

const isGenre = () => {
  return (genre) => {
    if (genre === null || genre === undefined || !isNaN(genre)) return genreH
    const sexo = genre.toUpperCase()
    if (sexo !== genreH && sexo !== genreF) return genreH
    if(!sexo) return genreH
    return sexo
  }
}

class persona {
  constructor (_nombre, _edad, _sexo) {
    this.nombre = isNotString()(isEmpty()(_nombre))
    this.edad = isNotInteger()(isEmpty()(_edad))
    this.DNI = nanoid()
    this.sexo = isGenre()(_sexo)
    this.peso = peso
    this.altura = altura
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

module.exports = persona