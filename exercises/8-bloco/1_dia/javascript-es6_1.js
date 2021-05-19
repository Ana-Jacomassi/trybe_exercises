function objectReturn (nomedapessoa) {

  let objetox = {
    nomeCompleto: `${nomedapessoa}`,
    email: `${nomedapessoa.split(" ").join("_").toLowerCase()}@trybe.com`
  }
  return objetox;
}

const newEmployees = () => {
  const employees = {
    id1: objectReturn("Pedro Guerra"),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: objectReturn("Luiza Drumond"),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: objectReturn("Carla Paiva")
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees());