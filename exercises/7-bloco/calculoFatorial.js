const assert = require('assert');

const fatorial = (number) => {
  let multiplier = 1
  
  if(typeof(number) !== 'number') {
    throw new Error('Este campo precisa ser preenchido por algum número, engraçadinho(a) :p');
  }
  
  for(let i = number; i >= 1; i -= 1) {
   multiplier *= i;
  }
  return multiplier
} 
fatorial('string');


assert.strictEqual(typeof(fatorial), 'function');
assert.strictEqual(fatorial(1), 1);
assert.strictEqual(fatorial(3), 6);

// exercício com testes de assert.
