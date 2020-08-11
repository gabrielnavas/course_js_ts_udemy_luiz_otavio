const alunos = ['Luiz', 'Maria', 'João'];
const muitasCoisas = ['Gabriel', true, [1, 2, 3], 4.55]; 


console.log(alunos); // [ 'Luiz', 'Maria', 'João' ]
console.log(muitasCoisas); // [ 'Gabriel', true, [ 1, 2, 3 ], 4.55 ]

console.log(alunos[2]); // 'João'
console.log(alunos[2][1]); // 'o'



// Mudar e adicionar elementos
alunos[2] = 'Ricardo';
alunos[3] = 'Luiza';
alunos[alunos.length] = 'Joaquina';

console.log(alunos); // [ 'Luiz', 'Maria', 'Ricardo', 'Luiza', 'Joaquina' ]


// Adicionar no final com função
alunos.push('Juquinha');
alunos.push('Fábio');

console.log(alunos);
/*
[
  'Luiz',     'Maria',
  'Ricardo',  'Luiza',
  'Joaquina', 'Juquinha',
  'Fábio'
] */

// Adicionar no inicio, devo mover todos os elementos para frente ou
alunos.unshift('Larissa');
console.log(alunos);
/*
[
  'Larissa',  'Luiz',
  'Maria',    'Ricardo',
  'Luiza',    'Joaquina',
  'Juquinha', 'Fábio'
]
*/


// Remove no final
const elementoRemovido = alunos.pop();
console.log(elementoRemovido); // 'Fábio'
console.log(alunos);
/*
[
    'Larissa',  'Luiz',
    'Maria',    'Ricardo',
    'Luiza',    'Joaquina',
    'Juquinha'
]
*/

// Remove do início
const elementoInicio = alunos.shift();
console.log(elementoInicio); // Larissa
console.log(alunos); // [ 'Luiz', 'Maria', 'Ricardo', 'Luiza', 'Joaquina', 'Juquinha' ]


// Deletar 
const carros = ['Ferrari', 'Fusca', 'Gol', 'Saveiro', 'Pampa'];

// dessa forma é ruim
delete carros[1];
console.log(carros); //[ 'Ferrari', <1 empty item>, 'Gol', 'Saveiro', 'Pampa' ]

// Assim é melhor
const indexRemover = carros.indexOf('Gol');
carros.splice(indexRemover, 1); //[ 'Ferrari', <1 empty item>, 'Saveiro', 'Pampa' ]
console.log(carros);



// Fatiar, não altera o array, apenas retorna a fatia
const numeros = [2,1,4,7]
console.log(numeros.slice(1, 3)); // [ 1, 4 ]


// Tipo do array

// array em JS é um objeto
console.log(typeof carros); //object

// E também é um array
console.log(carros instanceof Array); //true