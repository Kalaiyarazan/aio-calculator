const add = (a = 0, b = 0) => a + b;
const sub = (a = 0, b = 0) => a - b;
const mul = (a = 0, b = 1) => a * b;
const div = (a = 0, b = 1) => a / b;
const mod = (a = 0, b = 1) => a % b;

module.exports = { add, sub, mul, div, mod };
