let rectengleType = process.argv[2];
let length = +process.argv[3];
let width = +process.argv[4];

const generateLine = function(length){
  let line = "";
  for (let charactetrOfLine = 0; charactetrOfLine < length; charactetrOfLine++){
    line = line+"*";
  }
  return line;
}
line = generateLine(length);

const generateHight = function(width){
  for (let indexOfLine = 0; indexOfLine < width; indexOfLine++){
    console.log(line);
  }
  return line;
}

const generateMiddleLines = function(legth){
  let middleLines = "*";
  if (length > 1){
    for (let charactetrOfLine = 1; charactetrOfLine < length-1; charactetrOfLine++ ){
      middleLines = middleLines+" ";
    }
    middleLines = middleLines+"*";
  }
  return middleLines;
}

const generateDelimiterLine = function(length){
  delimiterLine = "";
  for (let charactetrOfLine = 0; charactetrOfLine <length; charactetrOfLine++){
    delimiterLine = delimiterLine+"-";
  }
  return delimiterLine;
}
delimiterLine = generateDelimiterLine(length);


if (rectengleType == "filled"){
  generateHight(width);
}

if (rectengleType == "empty"){
  middleLines = generateMiddleLines(length);
  console.log(line);
  for (let indexOfLine = 1; indexOfLine < width-1; indexOfLine++){
    console.log(middleLines);
  }
  if (width > 1){
    console.log(line);
  }
}

if (rectengleType == "alternative"){
  for (let row = 1; row <= width; row++){
    if (row%2 == 1){
      console.log(line);
    } else {
      console.log(delimiterLine);
    }
  }
}
