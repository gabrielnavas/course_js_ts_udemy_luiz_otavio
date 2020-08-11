// Usando aspas dentro de string

let strComAspas1 = "Gabriel foi 'pescar'";
let strComAspas2 = "Gabriel foi \"pescar\"";

console.log(strComAspas1); // "Gabriel foi 'pescar'"
console.log(strComAspas2); // "Gabriel foi "pescar""


// Fora do range da string

console.log(strComAspas1[-1]); // undefined
console.log(strComAspas1[20]); // undefined


console.log(strComAspas1.charAt(-1)); // '' valor vazio

// tabela ASCII

console.log(strComAspas1.charCodeAt(1)); // undefined


//concatenar com concat()
console.log(strComAspas1.concat(' ', 'no', ' ', 'rio', '.')); // a == 97 na tabela ASCII

// pegar o index (posição) que começa a palavra foi
console.log(strComAspas1.indexOf('foi'));
console.log(strComAspas1.indexOf('foi', 8)); // a posição 8 é opcional, diz da onde ele começa a procurar.
console.log(strComAspas1.indexOf('agora')); // -1 agora não existe

// pegar o index (posição) que começa a palavra foi, do final para trás
console.log(strComAspas1.lastIndexOf('foi', strComAspas1.length - 1));

// Exemplo de expessão regular
const arr = "Um texto legal".match(/[a-z]/g); //retorna um array de todas letra minúscula.
console.log(arr);

// Substituir caracteres e palavras
console.log("uma frase legal".replace('legal', 'chata'));
console.log("uma frase legal".replace(/legal/, 'chata'));


// Tamanho de uma string
console.log("uma frase legal com tamanho :)".length);

// Pegando pedaços de string
console.log("uma frase legal".slice(1, 5));
console.log("uma frase legal".substr(1, 5));
console.log("uma frase legal".substring(1, 5));

//pega o tamanho da string e subtrai -5 e depois subtrai -1. Basicamente é contar do fim para o começo.
console.log("uma frase legal".slice(-5, -1));

// o slice escreve menos, veja o exemplo do substring
console.log("uma frase legal".substring("uma frase legal".length - 5, "uma frase legal".length - 1)); 

// Dividir uma string
console.log("O rato roeu a roupa da rainha".split(' '));

// É possível exibir somente 2 palavras
console.log("O rato roeu a roupa da rainha".split(' ', 2));

// Maiúscula
console.log("sou uma frase em upper case".toUpperCase());


// Minúscula
console.log("sou uma frase em lower case".toLowerCase());

