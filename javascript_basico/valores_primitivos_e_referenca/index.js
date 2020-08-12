/*
    Primitivos (imutáveis):
        - string
        - number
        - boolean
        - undefined
        - null
        - bigint (não vimos ainda)
        - symbol (não vimos ainda)

    Referência (mutáveis) passados por referência:
        - array
        - object
        - function
*/


// string é imutável
let nome = 'Gabriel';
nome[1] = 'u';
console.log(nome); // Gabriel

// atribuicao é sempre feito uma cópia
let outroNome = nome;
nome = 'João';
console.log(nome, outroNome); //João Gabriel


// number é feito cópia;
let numero = 22;
let outroNumero = numero; ///cópia
numero = 25;
console.log(numero, outroNumero);



// Objetos são mutáveis, ou seja, dados por referência são mutáveis (object, array, function)

let a = [1, 2, 3];
a[2] = 5;
console.log(a); //[ 1, 2, 5 ]


// Da para alterar por referência
let b = a;
a.push(10);
console.log(a); // [ 1, 2, 5, 10 ]
console.log(b); // [ 1, 2, 5, 10 ]


// Criar uma copia do array 
const d = [1, 2, 3];
const e = [...d]; // 'e' tem uma cópia de 'd'
d.push(4);

// array 'e' é outro array, tem outro endereço na memória
console.log(e); // [ 1, 2, 3 ]


// Clone de objetos literais
const empregado = {
    nome: 'Gabriel',
    salario: 1500,
}

//'empregado2' é uma cópia do objeto literal 'empregado'
const empregado2 = { ...empregado };

empregado.nome = 'João';
console.log(empregado); // { nome: 'João', salario: 1500 }

// 'empregado2' é uma cópia de 'empregado'
console.log(empregado2); // { nome: 'Gabriel', salario: 1500 }