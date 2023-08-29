"use strict";

const { helloworld, helloworldv2 } = require("..");
const assert = require("assert").strict;

assert.strictEqual(helloworld(), "Hello from helloworld");
assert.strictEqual(helloworldv2(), "Hello from helloworld v2");
console.info("helloworld tests passed");
