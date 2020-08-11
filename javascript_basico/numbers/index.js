// transformar number em string

let num1 = 2; // number 
let num2 = 2; // number

console.log(num1.toString() + num2.toString()); // 22
console.log(typeof num1); //number

// transformando para binario
let dez = 10;
let dezBin = 0b1010;
console.log(dez.toString(2)); // 1010
console.log(dezBin.toString(10)); // 10

// transformando para octal
let oito = 8;
let sete = 0o10;
console.log(oito.toString(8)); // 10
console.log(sete.toString(10)); // 8

// transformando para hexa
let quinze = 15;
console.log(quinze.toString(16)); // f

// transformando para decimal
let hexaDez = 0XA;
console.log(hexaDez.toString(10)); // 10


// Alterando casas decimais

const placaDeVideo = 2000.88888;
const precoFixed2GPU = placaDeVideo.toFixed(2); 
console.log(precoFixed2GPU); // 2000.89


// Verificando tipo de número

const numero = 25;
console.log(Number.isInteger(numero)); //true

const numeroTalvez = '25';
console.log(Number.isInteger(numeroTalvez)); //false


// tipo NaN
const conta = numero * 'Olá';
console.log(conta); //NaN
console.log(Number.isNaN(conta)) // true


// Imprecisões
let num3 = 0.7;
let num4 = 0.1;

num3 += num4; // 0.7999999999999999

console.log(num3);// 0.7999999999999999
console.log(num3.toFixed(2));// 0.80

console.log(typeof (num3.toFixed(2) + 1));// string

// pra ter segurança utilize to fixed e number
console.log(Number(num3.toFixed(2)) + 1);// 1.8

//ou
                
const resultado = ((num3 * 100 ) + (num4 * 100)) / 100;
console.log(resultado); // 0.9