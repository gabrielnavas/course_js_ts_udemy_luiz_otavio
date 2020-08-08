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