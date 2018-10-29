const patterns = require("./src/pattern_lib.js");
const generateFilled = patterns.generateFilled;
const generateEmpty = patterns.generateEmpty;
const generateAlternative = patterns.generateAlternative;

const main = function(){
  let length = +process.argv[3];
  let width = +process.argv[4];
  let firstPatternType = process.argv[2];
  let secondPatternType = process.argv[5];

  let patterns = {filled_rectangle: generateFilled(length,width),
    empty_rectangle: generateEmpty(length,width),
    alternative_rectangle: generateAlternative(length,width)}

  for(let index=0; index<width; index++){
    console.log(patterns[firstPatternType][index]);
  }
}
main();
