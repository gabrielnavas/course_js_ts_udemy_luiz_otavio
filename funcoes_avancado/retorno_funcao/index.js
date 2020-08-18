// return
// Retorna um valor
// Termina a função

// Retorna um valor
function soma(n1, n2) {
    return n1 + n2;
}
const result = soma(1, 2);
console.log(result); // 3


// Não retorna nada
const dizOla = function () {
    console.log('Olá')
}
console.log(dizOla()); // undefined 


// Exemplo, retorna um objeto
function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const pessoa = criarPessoa('gabriel', 'silva');
console.log(pessoa); // { nome: 'gabriel', sobrenome: 'silva' }


// Retornar uma função de uma função
function printaNome(nome, sobrenome) {
    console.log(nome);
    
    function pritaSobrenome() {
        return sobrenome;
    }
    
    return pritaSobrenome;
}

const funcaoRetornaSobrenome = printaNome('Gabriel', 'Navas'); // Gabriel 
const sobrenome = funcaoRetornaSobrenome(); // Navas
console.log(sobrenome); 


//  Exemplo de código repitido
function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2)); // 4
console.log(triplica(2)); // 6
console.log(quadriplica(2)); // 8

// agora sem repitir
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}

const duasXquatro = criaMultiplicador(2)(4); 
console.log(duasXquatro); // 8