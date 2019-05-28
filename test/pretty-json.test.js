'require strict'

/* eslint-env mocha */
/* eslint-disable no-unused-expressions, function-paren-newline */

describe('#prettyJson', () => {
  const { expect } = require('chai')
  const { prettyJson } = require('../')

  describe('#prettyJson()', () => {
    it('should generate a valid json', () => {
      const obj = { a: 1, b: 2, c: [{ d: 3, e: 4 }], f: { g: null } }
      const json = prettyJson(obj)

      const res = JSON.parse(json)

      expect(res).to.deep.equal(obj)
    })

    it('should return json formatted as expected', () => {
      const obj = { a: 1, b: 2, c: [{ d: 3, e: 4 }], f: { g: null } }
      const json = prettyJson(obj)
      const expected = [
        '{',
        '  "a": 1,',
        '  "b": 2,',
        '  "c": [',
        '    {',
        '      "d": 3,',
        '      "e": 4',
        '    }',
        '  ],',
        '  "f": {',
        '    "g": null',
        '  }',
        '}'
      ]

      const res = json.split('\n')
      expect(res).to.deep.equal(expected)
    })
  })
})
