'require strict'

/* eslint-env mocha */

const { expect } = require('chai')
const { parseJson } = require('../')

describe('#parseJson', () => {
  it('returns a valid object given a valid JSON input', () => {
    const res = parseJson('{"name":"Ragnar"}')
    expect(res).to.be.instanceOf(Object)
    expect(res).to.have.property('name', 'Ragnar')
  })

  it('returns an Error object given an invalid JSON input', () => {
    const res = parseJson('{name:"Ragnar"}')
    expect(res).to.be.instanceOf(Error)
  })
})
