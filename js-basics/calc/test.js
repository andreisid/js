//https://www.taniarascia.com/unit-testing-in-javascript/
// npm install -g mocha 
// npm test 

const assert = require("assert");
const operation = require("./operations.js");

it("should return true", () => {
  assert.equal(true, true);
});

it("correctly calculates sum of 1 and 3", () => {
  assert.equal(operation.add(1, 3), 4);
});

it("correctly calculates sum of 5 and 10", () => {
  assert.equal(operation.add(5, 10), 15);
});

it("correctly calculates substract of 3 and 1", () => {
  assert.equal(operation.sub(3, 1), 2);
});

it("correctly calculates substract of 10 and 5", () => {
  assert.equal(operation.sub(10, 5), 5);
});
