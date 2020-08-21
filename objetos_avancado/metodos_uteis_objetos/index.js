// Object.assign

// Modo complicado

const produto = { nome: 'Caneca', preco: 18.55 };

const copiaProduto = Object.assign({}, produto, { material: 'madeira' });
copiaProduto.nome = 'Cadeira';

console.log(produto); // { nome: 'Caneca', preco: 18.55 }
console.log(copiaProduto); // { nome: 'Cadeira', preco: 18.55, material: 'madeira' }

// Modo fácil
const outroProduto = { ...produto, material: 'plástico' };
outroProduto.nome = 'Copo';

console.log(produto); // { nome: 'Caneca', preco: 18.55 }
console.log(outroProduto); // { nome: 'Copo', preco: 18.55, material: 'plástico' }


// Object.keys

const pessoa = { nome: 'Gabriel', idade: 55 };
const chaves = Object.keys(pessoa);

console.log(chaves); //[ 'nome', 'idade' ]


// Object.values
const pessoa = { nome: 'Gabriel', idade: 55 };
const chaves = Object.values(pessoa);

console.log(chaves); // [ 'Gabriel', 55 ]


// Object.entries
const pessoa = { nome: 'Gabriel', idade: 55 };
const chaves = Object.entries(pessoa);

console.log(chaves); // [ [ 'nome', 'Gabriel' ], [ 'idade', 55 ] ]

// iterar sobre o entries
for(let [chave, valor] of Object.entries(pessoa)) {
    console.log(`chave: ${chave}, valor ${valor}`)
}
/* Saída: 
chave: nome, valor Gabriel
chave: idade, valor 55
*/




// Object.getOwnPropertyDescriptor

const pessoa = { nome: 'Gabriel', idade: 55 };
const ownPropertyDescr = Object.getOwnPropertyDescriptor(pessoa, 'nome');
console.log(ownPropertyDescr);
/*
{
  value: 'Gabriel',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
