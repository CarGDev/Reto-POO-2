'use strict'
const { nanoid } = require('nanoid')

class persona {
  constructor (_nombre, _edad, _sexo) {
    this.nombre = _nombre
    this.edad = _edad
    this.DNI = nanoid()
    this.sexo = this.isGenre()(_sexo)
    this.peso = '70'
    this.altura = '190'
  }

  isGenre () {
    return (_sexo) => {
      if(!_sexo || _sexo !== 'H' || _sexo !== 'F') {
        return 'H'
      }
      return _sexo
    }
  }

}

module.exports = persona