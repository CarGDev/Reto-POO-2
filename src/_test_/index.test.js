'use strict'

const persona = require('../persona')
const ejecutable = require('../ejecutable')

describe ('ejecutable class', () => {
  it ('ejecutable extends from cuenta', () => {
    expect(new ejecutable('carlos', 12, 'h')).toBeInstanceOf(persona)
    expect(new ejecutable('carlos', 12, 'h', 'fcawefqw', 155, 188)).toBeInstanceOf(persona)
    expect(new ejecutable('carlos', 12, 'h', '', 155, 188)).toBeInstanceOf(persona)
  })
})