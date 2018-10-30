const utilLib = require("./util_lib.js");
const generateLine = utilLib.generateLine;
const generateMiddleLines = utilLib.generateMiddleLines;

const generateFilledRectangle = function(length,width){
  let filledPattern=[];
  for (let indexOfLine = 0; indexOfLine < width; indexOfLine++){
    filledPattern[indexOfLine] = generateLine(length,"*");
  }
  return filledPattern;
}

const generateEmptyRectangle = function(length,width){
  let emptyPattern = [];
  emptyPattern[0] = generateLine(length,"*");
  for(let index=1; index<width-1; index++){
    emptyPattern[index] = generateMiddleLines(length);
  }
  if(width>1){
    emptyPattern[width-1] = emptyPattern[0];
  }
  return emptyPattern;
}

const generateAlternativeRectangle = function(length,width){
  let alternativePattern = [];
  for(let index=0; index<width; index++){
    if(index%2 == 0){
      alternativePattern[index] = generateLine(length,"*");
    } else {
      alternativePattern[index] = generateLine(length,"-");
    }
  }
  return alternativePattern;
}

const generateLeftTriangle = function(height){
  let pattern = [];
  for(let index=0; index<height; index++){
    pattern[index] = generateLine(index+1,'*');
    pattern[index] += generateLine(height-(index+1),' ');
  }
  return pattern;
}

const generateRightTriangle = function(height){
  let pattern = [];
  for(let index=0; index<height; index++){
    pattern[index] = generateLine(height-(index+1),' ');
    pattern[index] += generateLine(index+1,'*');
  }
  return pattern;
}


exports.generateFilledRectangle = generateFilledRectangle;
exports.generateEmptyRectangle = generateEmptyRectangle;
exports.generateAlternativeRectangle = generateAlternativeRectangle;
exports.generateLeftTriangle = generateLeftTriangle;
exports.generateRightTriangle = generateRightTriangle;
