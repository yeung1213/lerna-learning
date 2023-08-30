"use strict";

module.exports = {
  helloworld,
  helloworldv2,
};

const addAndMinus = require("@simonooo/add_and_minus");

function helloworld() {
  const result = addAndMinus(3, 5, 1);
  console.log("addAndMinus test:", result);
  return "Hello from helloworld";
}

function helloworldv2() {
  return "Hello from helloworld v2";
}
