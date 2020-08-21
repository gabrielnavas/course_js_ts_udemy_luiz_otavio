// Reduzir em único objeto, valor e etc

//          10 + acumulador  + acumulador+valor + acumulador+valor
const numeros = [5, 10, 15];

const valorInicial = 10

function reduzir(acumulador, valor, indice, array) {
    return acumulador + valor;
}
const somatorio = numeros.reduce(reduzir, valorInicial);

console.log('Somatória:', somatorio); // 40



// Usando reduce + filter + map //

// Some todos os números (reduce)
// Retorne um aray com os pares (Filter)
// Retorne um array com o dobro dos valores (map)


const numeros = [2, 5, 11, 20, 31, 50];

const somarValores = (acc, valor) => acc + valor;
const valoresPares = numero => numero % 2 === 0;
const valorDobro = numero => numero * 2;


const valorInicialFilter = 0;
const valoresParesArray = numeros.filter(valoresPares, valorInicialFilter);

const somatoria = numeros.reduce(somarValores);

const valorDobroArray = numeros.map(valorDobro);

console.log(somatoria); // 119
console.log(valoresParesArray); // [ 2, 20, 50 ]
console.log(valorDobroArray); // [ 4, 10, 22, 40, 62, 100 ]


// Usando somente reduce

const arrayReduzido = numeros.reduce((accArray, valor) => {
    if (valor % 2 === 0) { // filtra
        const dobroValor = valor * 2; //mapeia
        accArray.push(dobroValor);
    }
    return accArray;
}, []);

console.log(arrayReduzido); // [ 4, 40, 100 ]


// Retornar a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Gabriel', idade: 54 },
    { nome: 'João', idade: 66 },
    { nome: 'Ricardo', idade: 32 },
    { nome: 'Julio', idade: 43 },
    { nome: 'Maria', idade: 55 },
    { nome: 'Navas', idade: 21 },
];

const funcFilter = (pessoaVelha, pessoa) => 
    pessoaVelha.idade < pessoa.idade ? pessoa : pessoaVelha;

const maisVelha = pessoas.reduce(funcFilter);
console.log(maisVelha); // { nome: 'João', idade: 66 } 