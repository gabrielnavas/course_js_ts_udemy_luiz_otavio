// Exercício 1

function getMaior(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

console.log(getMaior(1,2)); // 2
console.log(getMaior(5,2)); // 5
console.log(getMaior(5,7)); // 7



// Exercício 2
function isPaisagem(largura, altura) {
    const modoPaisagem = getMaior(largura, altura) === largura;
    return modoPaisagem;
}

console.log('É paisagem 1600x1200: ', isPaisagem(1600, 1200));


// Exercício 3

function numDiv(numero) {
    if( !Number.isInteger(numero)) return numero;

    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    
    return numero;
}

let result = null;
for(let i=0; i <= 100; i++) {
    result = numDiv(i);
    console.log(result);
}
