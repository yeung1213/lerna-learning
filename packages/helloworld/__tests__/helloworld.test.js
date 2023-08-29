'use strict';

const helloworld = require('..');
const assert = require('assert').strict;

assert.strictEqual(helloworld(), 'Hello from helloworld');
console.info('helloworld tests passed');
