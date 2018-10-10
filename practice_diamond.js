let height = +process.argv[2];
let symbol = "*";
for (let index = height; index > 0; index = index-2 ){
  let delimiter = "";
  for (let indexOfLine = 1; indexOfLine <= (index-1)/2; indexOfLine++){
    delimiter = delimiter + " ";
  }
  console.log(delimiter+symbol);
  symbol = symbol + " *";
}

let delimiter = "";
for (let index = height; index > 2; index = index-2){
  let symbol = "*";
  for (let indexOfLine = 1; indexOfLine < (index-2)/2; indexOfLine++){
    symbol = symbol + " *";
  }
  console.log(" "+delimiter+symbol)
  delimiter = delimiter + " ";
}
