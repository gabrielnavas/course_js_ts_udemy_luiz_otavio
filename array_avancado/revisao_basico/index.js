//Array literal
const nomes1 = ['Eduardo', 'Maria', 'Joana'];

// construtor de Array
const nomes2 = new Array('Eduardo', 'Maria', 'Joana');



// Referência de array
const array1 = [15, 2, 5];
const array2 = array1;
array2[1] = 10;
console.log(array1[1]); // 10

const copiaDoArray1 = [...array1];
copiaDoArray1[0] = 200;
console.log(copiaDoArray1[0]); //200
console.log(array1[0]); // 15


// Remover ultimo elemento do array e retornar para uma variável

const carros = ['Ferray', 'Fusca', 'Gol'];
const gol = carros.pop();
console.log(carros); // [ 'Ferray', 'Fusca' ]
console.log(gol); // Gol


// Remover o primeiro elemento do array e retornar para uma variável
const pessoas = ['João', 'Lucas', 'Maria'];
const joao = pessoas.shift();
console.log(pessoas); // [ 'Lucas', 'Maria' ]
console.log(joao); // João


// Adicionar no final

const pessoas = ['João', 'Lucas', 'Maria'];
pessoas.push('Joaquina');
console.log(pessoas); // [ 'João', 'Lucas', 'Maria', 'Joaquina' ]


// Adicionar no início

const pessoas = ['João', 'Lucas', 'Maria'];
pessoas.unshift('Joaquina');
console.log(pessoas); // [ 'Joaquina', 'João', 'Lucas', 'Maria', 'Joaquina' ]


// Fatiando

const pessoas = ['João', 'Lucas', 'Maria', 'Ana', 'Juca'];
console.log(pessoas.slice(0, 3)); // [ 'João', 'Lucas', 'Maria' ]
console.log(pessoas.slice(0, -1)); // [ 'João', 'Lucas', 'Maria', 'Ana' ]
console.log(pessoas.slice(0, -2)); // [ 'João', 'Lucas', 'Maria' ]
console.log(pessoas.slice(0, -3)); // [ 'João', 'Lucas' ]



// Split

const nome = 'Gabriel Miguel,Navas';
const nomesArray = nome.split(' ');
const nomesVirgula = nomesArray[1].split(',');

// retora split

let MiguelNavas = nomesArray.join(' '); // Gabriel Miguel,Navas
MiguelNavas = MiguelNavas.replace(',', ' '); // Gabriel Miguel Navas

console.log(nomesArray); // [ 'Gabriel', 'Miguel,Navas' ]
console.log(nomesVirgula); // [ 'Miguel', 'Navas' ]
console.log(MiguelNavas); // Miguel Navas