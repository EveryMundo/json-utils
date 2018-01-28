'use strict';

const parseJson = (json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return e;
  }
};

const prettyJson = (obj, spaces = '  ') => JSON.stringify(obj, null, spaces);

module.exports = {
  parseJson,
  prettyJson,
};
