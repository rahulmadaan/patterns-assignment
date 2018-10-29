const lib = require("../src/util_lib.js");
const assert = require("assert");

const generateLine = lib.generateLine;
const generateMiddleLines = lib.generateMiddleLines;


assert.equal(generateLine(0,' '),'');
assert.equal(generateLine(0,'*'),'');
assert.equal(generateLine(1,'*'),'*');
assert.equal(generateLine(2,'*'),'**');
assert.equal(generateLine(5,'*'),'*****');
assert.equal(generateLine(5,' '),'     ');

assert.equal(generateMiddleLines(1),'*');
assert.equal(generateMiddleLines(2),'**');
assert.equal(generateMiddleLines(3),'* *');
assert.equal(generateMiddleLines(5),'*   *');

console.log("Test Passed !");
