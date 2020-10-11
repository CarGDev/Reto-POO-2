'use strict'

const persona = require('../persona')
const ejecutable = require('../ejecutable')
const { it, expect } = require('@jest/globals')

describe ('ejecutable class', () => {
  it ('ejecutable extends from cuenta', () => {
    expect(new ejecutable('carlos', 12, 'h')).toBeInstanceOf(persona)
    expect(new ejecutable('carlos', 12, 'h', 'fcawefqw', 155, 188)).toBeInstanceOf(persona)
    expect(new ejecutable('carlos', 12, 'h', '', 155, 188)).toBeInstanceOf(persona)
  })

  it ('Persona is required', () => {
    const rejectedTest = function(){new ejecutable()}
    expect(rejectedTest).toThrow(Error, 'Nombre or Edad should not empty')
    const rejectedTest2 = function(){new ejecutable('', 20)}
    expect(rejectedTest2).toThrow(Error, 'Nombre or Edad should not empty')
  })

  it ('Edad is required', () => {
    const rejectedTest = function(){new ejecutable()}
    expect(rejectedTest).toThrow(Error, 'Edad or Edad should not empty')
    const rejectedTest2 = function(){new ejecutable('Carlos')}
    expect(rejectedTest2).toThrow(Error, 'Edad or Edad should not empty')
  })

  it ('Edad expected integer', () => {
    const rejectedTest = function(){new ejecutable('Arturo', 'Test')}
    expect(rejectedTest).toThrow(TypeError, 'Edad  expected: Integer')
  })

  it ('Persona expected string', () => {
    const rejectedTest = function(){new ejecutable(20, 20)}
    expect(rejectedTest).toThrow(TypeError, 'Nombre  expected: String')
  })

  it ('Genre should be H as defect', () => {
    const rejectedTest1 = new ejecutable('Carlos', 20)
    const rejectedTest2 = new ejecutable('Carlos', 20, 'Test')
    const rejectedTest3 = new ejecutable('Carlos', 20, 'R')
    const rejectedTest4 = new ejecutable('Carlos', 20, 0)
    const rejectedTest5 = new ejecutable('Carlos', 20, null)
    const rejectedTest6 = new ejecutable('Carlos', 20, 'H')
    const rejectedTest7 = new ejecutable('Carlos', 20, 'h')
    const rejectedTest8 = new ejecutable('Carlos', 20, 'F')
    const rejectedTest9 = new ejecutable('Carlos', 20, 'f')
    const rejectedTest10 = new ejecutable('Carlos', 20, undefined)
    expect(rejectedTest1.sexo).toBe('H')
    expect(rejectedTest2.sexo).toBe('H')
    expect(rejectedTest3.sexo).toBe('H')
    expect(rejectedTest4.sexo).toBe('H')
    expect(rejectedTest5.sexo).toBe('H')
    expect(rejectedTest6.sexo).toBe('H')
    expect(rejectedTest7.sexo).toBe('H')
    expect(rejectedTest8.sexo).toBe('F')
    expect(rejectedTest9.sexo).toBe('F')
    expect(rejectedTest10.sexo).toBe('H')
  })

  it('Mayor de edad', () => {
    const rejectedTest1 = new ejecutable('Ricardo', 20)
    const rejectedTest2 = new ejecutable('Ricardo', 17)
    const rejectedTest3 = new ejecutable('Ricardo', 10)
    const rejectedTest4 = new ejecutable('Ricardo', 54)
    expect(rejectedTest1.esMayorDeEdad()).toEqual(true)
    expect(rejectedTest2.esMayorDeEdad()).toEqual(false)
    expect(rejectedTest3.esMayorDeEdad()).toEqual(false)
    expect(rejectedTest4.esMayorDeEdad()).toEqual(true)
  })

  it('Print the function toString', () => {
    const rejectedTest1 = new ejecutable('Ricardo', 20)
    const rejectedTest2 = new ejecutable('Carlos', 17, 'H')
    const rejectedTest3 = new ejecutable('Fabiola', 17, 'F')
    const rejectedTest4 = new ejecutable('Fabiola', 17, 'F', 'Test1', 50, 160)
    const rejectedTest5 = new ejecutable('Arturo', 17, 'H', '', 120)
    const rejectedTest6 = new ejecutable('Karla', 40, 'F', 'Test2', 55, 150)
    expect(rejectedTest1.toString()).toEqual(`Ricardo tiene 20 por lo que es mayor de edad, cuenta con un DNI=${rejectedTest1.DNI}, es H y mide 190 con un peso de 80`)
    expect(rejectedTest2.toString()).toEqual(`Carlos tiene 17 por lo que es menor de edad, cuenta con un DNI=${rejectedTest2.DNI}, es H y mide 190 con un peso de 80`)
    expect(rejectedTest3.toString()).toEqual(`Fabiola tiene 17 por lo que es menor de edad, cuenta con un DNI=${rejectedTest3.DNI}, es F y mide 190 con un peso de 80`)
    expect(rejectedTest4.toString()).toEqual(`Fabiola tiene 17 por lo que es menor de edad, cuenta con un DNI=Test1, es F y mide 160 con un peso de 50`)
    expect(rejectedTest5.toString()).toEqual(`Arturo tiene 17 por lo que es menor de edad, cuenta con un DNI=${rejectedTest5.DNI}, es H y mide 190 con un peso de 120`)
    expect(rejectedTest6.toString()).toEqual(`Karla tiene 40 por lo que es mayor de edad, cuenta con un DNI=Test2, es F y mide 150 con un peso de 55`)
  })

})

describe ('persona class', () => {
  it ('Persona is required', () => {
    const rejectedTest = function(){new persona()}
    expect(rejectedTest).toThrow(Error, 'Nombre or Edad should not empty')
    const rejectedTest2 = function(){new persona('', 20)}
    expect(rejectedTest2).toThrow(Error, 'Nombre or Edad should not empty')
  })

  it ('Edad is required', () => {
    const rejectedTest = function(){new persona()}
    expect(rejectedTest).toThrow(Error, 'Nombre or Edad should not empty')
    const rejectedTest2 = function(){new persona('Carlos')}
    expect(rejectedTest2).toThrow(Error, 'Nombre or Edad should not empty')
  })

  it ('Edad expected integer', () => {
    const rejectedTest = function(){new persona('Arturo', 'Test')}
    expect(rejectedTest).toThrow(TypeError, 'Edad  expected: Integer')
  })

  it ('Persona expected string', () => {
    const rejectedTest = function(){new persona(20, 20)}
    expect(rejectedTest).toThrow(TypeError, 'Nombre  expected: String')
  })

  it ('Genre should be H as defect', () => {
    const rejectedTest1 = new persona('Carlos', 20)
    const rejectedTest2 = new persona('Carlos', 20, 'Test')
    const rejectedTest3 = new persona('Carlos', 20, 'R')
    const rejectedTest4 = new persona('Carlos', 20, 0)
    const rejectedTest5 = new persona('Carlos', 20, null)
    const rejectedTest6 = new persona('Carlos', 20, 'H')
    const rejectedTest7 = new persona('Carlos', 20, 'h')
    const rejectedTest8 = new persona('Carlos', 20, 'F')
    const rejectedTest9 = new persona('Carlos', 20, 'f')
    const rejectedTest10 = new persona('Carlos', 20, undefined)
    expect(rejectedTest1.sexo).toBe('H')
    expect(rejectedTest2.sexo).toBe('H')
    expect(rejectedTest3.sexo).toBe('H')
    expect(rejectedTest4.sexo).toBe('H')
    expect(rejectedTest5.sexo).toBe('H')
    expect(rejectedTest6.sexo).toBe('H')
    expect(rejectedTest7.sexo).toBe('H')
    expect(rejectedTest8.sexo).toBe('F')
    expect(rejectedTest9.sexo).toBe('F')
    expect(rejectedTest10.sexo).toBe('H')
  })

  it('Mayor de edad', () => {
    const rejectedTest1 = new persona('Ricardo', 20)
    const rejectedTest2 = new persona('Ricardo', 17)
    const rejectedTest3 = new persona('Ricardo', 10)
    const rejectedTest4 = new persona('Ricardo', 54)
    expect(rejectedTest1.esMayorDeEdad()).toEqual(true)
    expect(rejectedTest2.esMayorDeEdad()).toEqual(false)
    expect(rejectedTest3.esMayorDeEdad()).toEqual(false)
    expect(rejectedTest4.esMayorDeEdad()).toEqual(true)
  })

  it('Print the function toString', () => {
    const rejectedTest1 = new persona('Ricardo', 20)
    const rejectedTest2 = new persona('Carlos', 17, 'H')
    const rejectedTest3 = new persona('Fabiola', 17, 'F')
    expect(rejectedTest1.toString()).toEqual(`Ricardo tiene 20 por lo que es mayor de edad, cuenta con un DNI=${rejectedTest1.DNI}, es H y mide 190 con un peso de 80`)
    expect(rejectedTest2.toString()).toEqual(`Carlos tiene 17 por lo que es menor de edad, cuenta con un DNI=${rejectedTest2.DNI}, es H y mide 190 con un peso de 80`)
    expect(rejectedTest3.toString()).toEqual(`Fabiola tiene 17 por lo que es menor de edad, cuenta con un DNI=${rejectedTest3.DNI}, es F y mide 190 con un peso de 80`)
  })

})