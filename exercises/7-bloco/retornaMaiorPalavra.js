function calcularMaiorPalavraDaFrase (texto) {
  let palavrasDaFrase = texto.split(' ')
  let maiorPalavraDaFrase = 0
  let resultadoFinal = ''

  for(const word of palavrasDaFrase) {
    if(word.length > maiorPalavraDaFrase) {
      maiorPalavraDaFrase = word.length
      resultadoFinal = word;
    }
  } return resultadoFinal;
}
console.log(calcularMaiorPalavraDaFrase());
