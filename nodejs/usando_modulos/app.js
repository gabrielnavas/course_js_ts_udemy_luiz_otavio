// const mod1 = require('./mod1');
const { falaNome, nome, MinhaClasse } = require('./mod1');
// require('./usandoLibsExistentes');

// console.log(mod1);
// console.log(mod1.falaNome());

/*
{ sobrenome: 'Miranda', nome: 'Luiz', falaNome: [Function: falaNome] }
Luiz Miranda
*/


console.log(nome, falaNome()); //Luiz Luiz Miranda

new MinhaClasse(); // minha classe anonima foi instânciada