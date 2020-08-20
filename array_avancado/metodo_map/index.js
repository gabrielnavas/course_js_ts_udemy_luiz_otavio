// Modifica o array

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((valor, indice, array) => valor * 2);
console.log(numerosEmDobro);

/*
[
  10, 100, 160,  2,  4,  6,
   8,  10,  12, 14, 22, 30,
  44,  54
]
*/


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const apenasONome = pessoas.map(pessoa => pessoa.nome);
const apenasIdade = pessoas.map(pessoa => ({ idade: pessoa.idade }));
const addChave = pessoas.map((pessoa, index) => ({ id: index, ...pessoa }));

console.log(apenasONome); // [ 'Luiz', 'Maria', 'Eduardo', 'Letícia', 'Rosana', 'Wallace' ]

console.log(apenasIdade); //
/*
[
  { idade: 62 },
  { idade: 23 },
  { idade: 55 },
  { idade: 19 },
  { idade: 32 },
  { idade: 47 }
] 
*/

console.log(addChave);
/*
[
  { id: 0, nome: 'Luiz', idade: 62 },
  { id: 1, nome: 'Maria', idade: 23 },
  { id: 2, nome: 'Eduardo', idade: 55 },
  { id: 3, nome: 'Letícia', idade: 19 },
  { id: 4, nome: 'Rosana', idade: 32 },
  { id: 5, nome: 'Wallace', idade: 47 }
]
*/