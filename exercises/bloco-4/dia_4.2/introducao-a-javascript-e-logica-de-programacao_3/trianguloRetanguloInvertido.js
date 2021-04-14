//Exercício 3 
let n = 5;
let symbol = '*';
let imputSymbol = '';
let inputPosition = n;

for (index = 0; index <= n; index += 1) {
  for (columIndex = 0; columIndex < n; columIndex += 1) {
    if (columIndex < inputPosition) {
      imputSymbol = imputSymbol + ' ';
    } else {
      imputSymbol = imputSymbol + symbol;
    }

  }
  console.log(imputSymbol);
  imputSymbol = '';
  inputPosition -=1; 
}
