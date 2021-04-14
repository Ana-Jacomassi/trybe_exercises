//Exercício 4 
// let n = 5;
// let symbol = '*';
// let imputSymbol = '';

// let mid = (n + 1) / 2;
// let midrigth = mid;
// let midleft = mid;

// for (index = 0; index < mid; index += 1) {
//   for (columnIndex = 0; mid <= n; columnIndex += 1) {
//     if (columnIndex > midleft && columnIndex < midrigth) {
//       imputSymbol = imputSymbol + symbol;
//     } else {
//       imputSymbol = imputSymbol + symbol;
//     }

//   }
//   console.log(imputSymbol);
//   imputSymbol = '';
//   midrigth += 1
//   midleft -= 1
// }

let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};