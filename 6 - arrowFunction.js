// camelCase
// PascalCase

// function consoleLogOi(parametro1, parametro2) {
//   // Tudo que vou fazer dentro dessa função
//   console.log("Oi");

//   // return // Posso ou não retornar uma informação
//   return "Oi de novo";
// }

const consoleLogOi = (parametro1, parametro2) => {
  console.log("Oi");

  return "Oi de novo";
};

const segundaFuncao = () => console.log("Segunda função");

const retornoDaFuncao = consoleLogOi();
console.log(retornoDaFuncao);

segundaFuncao();
