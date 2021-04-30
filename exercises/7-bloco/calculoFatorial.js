const assert = require('assert');

const fatorial = (number) => {
  let multiplier = 1
  for(let i = number; i >= 1; i -= 1) {
   multiplier *= i;
  }
  return multiplier
} 
fatorial(3);


assert.strictEqual(typeof(fatorial), 'function');
assert.strictEqual(fatorial(1), 1);
assert.strictEqual(fatorial(3), 6);
