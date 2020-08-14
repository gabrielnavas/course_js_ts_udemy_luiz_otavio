let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

// atribuicão novamente em a, b, c, desestruturando b, c, a em a, b, c
[a, b, c] = [b, c, a];
console.log(a, b, c); //B C A

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;
console.log(a, b, c); //B C A


// Outro exemplo
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [primeiroNumero, segundoNumero] = numeros;

// console.log(primeiroNumero, segundoNumero); // 1000 2000


// Pegando o resto dos números (rest operator)
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero); // 1000 2000 3000
console.log(resto); // [ 4000, 5000, 6000, 7000, 8000, 9000 ]


// Pegando alguns valores somente
const nomes = ['Gabriel', 'Rafael', 'João', 'Ana', 'Fátima'];
const [primeiroNome, , terceiroNome, , quintoNome] = nomes;

console.log(primeiroNome, terceiroNome, quintoNome); // Gabriel João Fátima


// Complicando um pouco

const numerosArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

const [, [,,seis]] = numerosArray;
console.log(seis); // 6