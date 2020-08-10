// nâo podemos criar varipaveis com palavras reservadas
// let if; => SyntaxError: Unexpected token 'if'
// const console;

// Não podemos criar variaveis iniciando um números.
// let 1nome = 10;



// Tipos de declações

let variavelQueMuda; // = undefined
console.log('Meu nome é ' + variavelQueMuda);

variavelQueMuda = 'gabriel';
variavelQueMuda = 'navas';

const variavelImutavel = 'joana';
// variavelImutavel = 'joão'; => assingment to const variable

var poucoUsada = 'valor';


console.log('Meu nome é ' + variavelQueMuda);
console.log('Meu nome é ' + variavelImutavel);
console.log('Meu nome é ' + poucoUsada);


// não pode ter espaços nas variáveis.
// let variavel um;


// Case -sensitive

let variavelum = 10;
let variavelUm = 20; //variavelum é diferente de variavelUm

console.log(variavelum); //10
console.log(variavelUm); //20


// Constantes

const sobrenome = 'Silva';
// sobrenome = 'Castro'; //TypeError: Assignment to constant variable.


// Fazendo contas
// + - * /

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero + segundoNumero;

console.log(conta);

// Ver tipo de dado
const souString = 'Gabriel';
const souNumber = 22;

console.log(typeof souString);
console.log(typeof souNumber);



// Exercício de troca de valores

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// const auxiliarA = varA;
// varA = varB;
// varB = varC;

// varC = auxiliarA;

// console.log(varA, varB, varC);


[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);

