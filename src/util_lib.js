const generateLine = function(length,char){
  let line = "";
  for (let charactetrOfLine = 0; charactetrOfLine < length; charactetrOfLine++){
    line = line+char;
  }
  return line;
};

const generateMiddleLines = function(length){
  let middleLines = "*";
  if (length > 1){
    middleLines = middleLines + generateLine(length-2," ");
    middleLines = middleLines+"*";
    }
  return middleLines;
};

exports.generateLine = generateLine;
exports.generateMiddleLines = generateMiddleLines;
