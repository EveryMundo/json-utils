'use strict'

const parseJson = (json, customFunction) => {
  try {
    return JSON.parse(json, customFunction)
  } catch (e) {
    return e
  }
}

const prettyJson = (obj, spaces = '  ') => JSON.stringify(obj, null, spaces)

module.exports = {
  parseJson,
  prettyJson
}
