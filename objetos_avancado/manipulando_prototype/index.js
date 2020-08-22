// Apontar o prototype de um objeto literal para outro objeto literal

const objA = {
    chaveA: 'chaveA',
};

const objB = {
    chaveB: 'chaveB',
};

Object.setPrototypeOf(objB, objA);

console.log(objB.__proto__); // { chaveA: 'chaveA' }
console.log(objB.__proto__.chaveA); // chaveA



// Criando um objeto constructor e pegando o prototype de outro
const objC = new Object();

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.__proto__.chaveA); // chaveA
console.log(objC.__proto__.__proto__.chaveA); // chaveA
