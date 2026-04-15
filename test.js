const assert = require('assert');
const getNo = require('./');
const reasons = require('./reasons.json');

assert(reasons.includes(getNo()), 'getNo should return a reason from the list.');