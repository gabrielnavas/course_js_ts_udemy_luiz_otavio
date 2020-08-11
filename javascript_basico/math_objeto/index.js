let num1 = 9.4323;

// Arredondar para baixo
let praBaixo = Math.floor(num1); // 9
console.log(praBaixo);

// Arredondar para cima
let praCima = Math.ceil(num1); // 10
console.log(praCima);

// Arredondar para o mais próximo
console.log(Math.round(9.5)); //10
console.log(Math.round(9.49999)); //9
console.log(Math.round(9.35)); //9
console.log(Math.round(9.65)); //10


// máximo da sequência (pega o maior número, o max)
console.log(Math.max(5, 6, 2, 3, 7, 9, 55)); // 55

// mínimo da sequência (pega o menor número, o max)
console.log(Math.min(5, 6, 2, 3, 7, 9, 55)); // 2

// número aleatório entre 0 e 0.99999999999999999
console.log(Math.random()); // 0.0...0.99999999999999999

//número aleatório entre 0 e 9.99999999
console.log(Math.random() * 10);

//número aleatório entre 5.000000 e 9.99999999
console.log(Math.random() * (10-5) + 5);

//número aleatório entre 5.000000 e 99.99999999
console.log(Math.random() * (100-5) + 5);



// Números constantes e funcoes prontas

console.log( Math.pow(2, 10) ); // 2 elevado a 10 = 1024
console.log( Math.sqrt(100) ); //raiz quadrada de 10 
console.log( Math.PI ); // PI = 3.141592653589793


// É possível dividir por 0 em JS (CUIDADO)

const valor = 100 / 0;
console.log(valor); // Infinity
console.log(!!valor === true); // é true (CUIDADO COM ISSO), números dividido por 0 em JS retorna true


// Quando o número é muito grande, pode retornar infinity também
console.log(100 / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);