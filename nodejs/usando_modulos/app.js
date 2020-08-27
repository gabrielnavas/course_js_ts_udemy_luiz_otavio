// const mod1 = require('./mod1');
// const { falaNome, nome, MinhaClasse } = require('./mod1');
// require('./usandoLibsExistentes');

// console.log(mod1);
// console.log(mod1.falaNome());

/*
{ sobrenome: 'Miranda', nome: 'Luiz', falaNome: [Function: falaNome] }
Luiz Miranda
*/


// console.log(nome, falaNome()); //Luiz Luiz Miranda

// new MinhaClasse(); // minha classe anonima foi instânciada

// const soma = require('./mod2');
// soma(2,4);

const path = require('path');

console.log(path.resolve(__dirname, '..', '..')); // /home/navas/Desktop/course_js_ts_udemy_luiz_otavio

console.log(__filename); // /home/navas/Desktop/course_js_ts_udemy_luiz_otavio/nodejs/usando_modulos/app.js
console.log(__dirname); // /home/navas/Desktop/course_js_ts_udemy_luiz_otavio/nodejs/usando_modulos
