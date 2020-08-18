// a function 'funcao' não recebe nenhum argumentos, pois não tem nenhum parâmetro

function funcao() {
    console.log('Olá');
}
funcao('Valor 1', 1, 2, 13, 123, 12, 3, 1, 4214); // Olá


// Mas posso pergar esse argumentos

function funcao() {
    console.log(arguments);
    /*
        [Arguments] {
        '0': 'Valor 1',
        '1': 1,
        '2': 2,
        '3': 13,
        '4': 123,
        '5': 12,
        '6': 3,
        '7': 1,
        '8': 4214
        } 
    */
    console.log(arguments[0]); // 'Valor 1'
}
funcao('Valor 1', 1, 2, 13, 123, 12, 3, 1, 4214); // Olá


// Pegando Argumentos dos parâmetros

function comParams(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f); // 1 2 3 undefined undefined undefined
}
comParams(1, 2, 3);


// Parametros padrão, maneira antiga
function funcaoValorPadrao(a, b) {
    b = b || 2;
    console.log(a, b);
}
funcaoValorPadrao(1); // 1 2


// Parametros padrão, maneira antiga
function funcaoValorPadrao(a, b = 2, c = 5) {
    console.log(a, b, c);
}
funcaoValorPadrao(1); // 1 2 5
funcaoValorPadrao(1, null, 6); // 1 null 6
funcaoValorPadrao(1, undefined, 6); // 1 2 6


// Desestruturação objeto

function printaNomes({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
printaNomes({ nome: 'Gabriel', sobrenome: 'Silva', idade: 22 });


// Desestruturação de array

function printaNomes([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
printaNomes(['Gabriel', 'Silva', 22]);


// usando rest como parametro
function conta(operador, acumulador, ...numeros) {
    console.log(operador); // + 
    console.log(acumulador); // 0 
    console.log(numeros); // [ 20, 30, 40, 50 ]
}

conta('+', 0, 20, 30, 40, 50);