const gabarito = 'resposta correta';
const aValidar = 'Resposta Correta';

const validacao = (gabarito1) => (aValidar1) => gabarito1 === aValidar1.toLowerCase();

console.log(validacao(gabarito)(aValidar));