"use strict";

module.exports = addAndMinus;
const addv2 = require("@simonooo/add");

function addAndMinus(x, y, z) {
  console.log('hello4')
  return addv2(x, y) - z;
}
