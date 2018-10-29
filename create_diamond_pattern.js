let diamondType = process.argv[2];
let height = +process.argv[3];

const generateFirstFilled = function(height){
  let symbol = "*";
  for (let index = height; index > 0; index = index-2 ){
    let delimiter = "";
    for (let indexOfLine = 1; indexOfLine <= (index-1)/2; indexOfLine++){
      delimiter = delimiter + " ";
    }
    pattern = delimiter + symbol + delimiter;
    console.log(pattern);
    symbol = symbol + "**"
  }
  return pattern;
}

const generateSecondFilled = function(height){
  let delimiter = " ";
  for (let index = height; index > 2; index = index-2){
    let symbol = "*";
    for (let indexOfLine = 1; indexOfLine < (index-2)/2; indexOfLine++){
      symbol = symbol + "**";
    }
    pattern = delimiter + symbol + delimiter;
    console.log(pattern)
    delimiter = delimiter + " ";
  }
  return pattern;
}


const generateFirstHollow = function(height){
  let symbol = "*";
  let pattern = "";
  let delimiter2 = " ";

  for (let indexOfLine = height; indexOfLine > 0; indexOfLine-=2){
    let delimiter = "";
    for (let charactersOfLine = 1; charactersOfLine <= (indexOfLine-1)/2; charactersOfLine++){
      delimiter = delimiter + " ";
    }
    if (indexOfLine == height){
      pattern = delimiter + symbol + delimiter;
    } else {
      pattern = delimiter + symbol + delimiter2 + symbol + delimiter;
      delimiter2 = delimiter2 + "  ";
    }
    console.log(pattern);
  }
  return pattern;
}

const generateSecondHollow = function(height){
  let delimiter = " ";
  let pattern = "";
  let symbol = "*";
  for (let indexOfLine = height; indexOfLine > 2; indexOfLine-=2){
    let delimiter2 = " ";
    for (let charactersOfLine = 1; charactersOfLine < (indexOfLine-4)/2; charactersOfLine++){
      delimiter2 = delimiter2 + "  ";
    }
    if (indexOfLine == 3 || indexOfLine == 4){
      pattern = delimiter + symbol + delimiter;
    } else {
      pattern = delimiter + symbol + delimiter2 + symbol + delimiter;
      delimiter = delimiter + " ";
    }
    console.log(pattern);
  }
  return pattern;
}


const generateFirstAngled = function(height){
  let pattern = "";
  let delimiter2 = " ";
  let fSlash = "/"
  let bSlash = "\\"

  for (let indexOfLine = height; indexOfLine > 0; indexOfLine-=2){
    let delimiter = "";
    if (indexOfLine == 1 || indexOfLine == 2){
      fSlash = bSlash = "*";
    }
    for (let charactersOfLine = 1; charactersOfLine <= (indexOfLine-1)/2; charactersOfLine++){
      delimiter = delimiter + " ";
    }
    if (indexOfLine == height){
      pattern = delimiter + "*" + delimiter;
    } else {
      pattern = delimiter + fSlash + delimiter2 + bSlash + delimiter;
      delimiter2 = delimiter2 + "  ";
    }
    console.log(pattern);
  }
  return pattern;
}

const generateSecondAngled = function(height){
  let delimiter = " ";
  let pattern = "";
  let fSlash = "/";
  let bSlash = "\\";
  for (let indexOfLine = height; indexOfLine > 2; indexOfLine-=2){
    let delimiter2 = " ";
    for (let charactersOfLine = 1; charactersOfLine < (indexOfLine-4)/2; charactersOfLine++){
      delimiter2 = delimiter2 + "  ";
    }
    if (indexOfLine == 3 || indexOfLine == 4){
      pattern = delimiter + "*" + delimiter;
    } else {
      pattern = delimiter + bSlash + delimiter2 + fSlash + delimiter;
      delimiter = delimiter + " ";
    }
    console.log(pattern);
  }
  return pattern;
}


if (diamondType == "filled"){
  generateFirstFilled(height);
  generateSecondFilled(height);
}

if (diamondType == "hollow"){
  generateFirstHollow(height);
  generateSecondHollow(height);
}

if (diamondType == "angled"){
  generateFirstAngled(height);
  generateSecondAngled(height);
}
