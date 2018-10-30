const patterns = require("./src/pattern_lib.js");
const {generateFilledRectangle,
  generateEmptyRectangle,
  generateAlternativeRectangle} = patterns;

const main = function(){
  let length = +process.argv[3];
  let width = +process.argv[4];
  let patternType = process.argv[2];

  let patterns = {filled_rectangle: generateFilledRectangle(length,width),
    empty_rectangle: generateEmptyRectangle(length,width),
    alternative_rectangle: generateAlternativeRectangle(length,width)}
  console.log(patterns[patternType]);
}
main();
