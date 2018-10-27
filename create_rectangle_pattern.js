const generateLine = function(length,char){
  let line = "";
  for (let charactetrOfLine = 0; charactetrOfLine < length; charactetrOfLine++){
    line = line+char;
  }
  return line;
}

const generateFilled = function(length,width){
  let filledPattern=[];
  for (let indexOfLine = 0; indexOfLine < width; indexOfLine++){
    filledPattern[indexOfLine] = generateLine(length,"*");
  }
  return filledPattern;
}

const generateMiddleLines = function(length){
  let middleLines = "*";
  if (length > 1){
    middleLines = middleLines + generateLine(length-2," ");
    }
    middleLines = middleLines+"*";
  return middleLines;
}

const generateEmpty = function(length,width){
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

const generateAlternative = function(length,width){
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
