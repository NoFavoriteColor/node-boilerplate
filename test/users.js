/* eslint-disable no-undef */

const chai = require('chai')
const expect = chai.expect

describe('Test', () => {
  it('Obj should not have property "b"', () => {
    expect({ a: 1 }).to.not.have.property('b')
  })
})
