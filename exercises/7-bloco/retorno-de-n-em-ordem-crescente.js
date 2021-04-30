const oddsAndEvens = [13, 3, 4, 10, 7, 2];
 const sortNumbers = () => {
   oddsAndEvens[0] = 2;
   oddsAndEvens[1] = 3;
   oddsAndEvens[2] = 4;
   oddsAndEvens[3] = 7;
   oddsAndEvens[4] = 10;
   oddsAndEvens[5] = 13;

   return sortNumbers;
  }
sortNumbers();

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//Bônus

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => {
  if (a < b) return -1;
})

console.log(oddsAndEvens);

// refatoração
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a-b)} se encontram ordenados de forma crescente!`);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort(function(a, b) {
    return a - b;
  });
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
