const triangleLib = require('./src/pattern_lib.js');
const {generateLeftTriangle,generateRightTriangle} = triangleLib;

const main = function(){
  let triangleType = process.argv[2];
  let height = +process.argv[3];

  let patterns = {left_triangle: generateLeftTriangle(height),
    right_triangle: generateRightTriangle(height)};

  console.log(patterns[triangleType]);
};
main();
