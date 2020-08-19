const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

// Retornar os números maiores que 10

function retornaMaiorQue10(arrayNumeros) {
    const novoArray = [];

    for (let numero of arrayNumeros) {
        if (numero > 10) novoArray.push(numero);
    }

    return novoArray;
}

const modoDificilArray = retornaMaiorQue10(numeros);
console.log(modoDificilArray); // [ 50, 80, 11, 15, 22, 27 ]


// Modo fácil, usando método filter presente em os arrays

// const funcaoFilter = numero => numero > 10;
// const modoFacil = numeros.filter(funcaoFilter);
// console.log(modoFacil); // [ 50, 80, 11, 15, 22, 27 ]

const modoFacil = numeros.filter(numero => numero > 10);
console.log(modoFacil); // [ 50, 80, 11, 15, 22, 27 ]

numeros.filter((numero, index, arrayInteiro) => {
    console.log(numero, index, arrayInteiro);
    // 5 0 [ 5, 50, 80, 1,  2,  3, 4,  5,  6, 7, 11, 15, 22, 27 ] 
    // 50 1 [ 5, 50, 80, 1,  2,  3, 4,  5,  6, 7, 11, 15, 22, 27 ] 
    // 80 2 [ 5, 50, 80, 1,  2,  3, 4,  5,  6, 7, 11, 15, 22, 27 ] 
    // 1 3 [ 5, 50, 80, 1,  2,  3, 4,  5,  6, 7, 11, 15, 22, 27 ] 
    // etc...
    return numero > 10;
})


// Exemplo mais complexo

// Retornar as pessoas que tem o nome com 5 letras ou mais
// Retornar as pessoas com mais de 50 anos
// Retornar as pessoas cujo nome termina com a letra 'a'

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoas5LetrasOuMais = pessoas.filter(pessoa => pessoa.nome.length >= 5);
const pessoasMais50Anos = pessoas.filter(pessoa => pessoa.idade > 50);
const pessoasQueTerminaComLetraA = pessoas.filter(pessoa => pessoa.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoas5LetrasOuMais);
/*
[
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
] 
*/
console.log(pessoasMais50Anos); // [ { nome: 'Luiz', idade: 62 }, { nome: 'Eduardo', idade: 55 } ] 
console.log(pessoasQueTerminaComLetraA);
/*
[
  { nome: 'Maria', idade: 23 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 }
]
*/
