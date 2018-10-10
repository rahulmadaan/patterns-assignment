let triangleType = process.argv[2];
let baseOfTriangle = +process.argv[3];

const generateLeftPattern = function(baseOfTriangle){
  let pattern = "*";
  while (pattern.length <= baseOfTriangle){
    console.log(pattern);
    pattern = pattern+"*";
  }
  return pattern;
}

const generateRightPattern = function(baseOfTriangle){
  let delimiter = "\n";
  let line = "";
  let star = "*";
  for (let indexOfLine = 0; indexOfLine < baseOfTriangle; indexOfLine++){
    if (indexOfLine == baseOfTriangle - 1){
      delimiter = "";
    }
    for (let height = baseOfTriangle-2; height >=indexOfLine; height--){
      line = line + " ";
    }
    line = line + star + delimiter;
    star = star + "*"
  }
  return line;
}

if (triangleType == "left"){
  pattern = generateLeftPattern(baseOfTriangle);
}
if (triangleType == "right"){
  line = generateRightPattern(baseOfTriangle);
  console.log(line);
}
