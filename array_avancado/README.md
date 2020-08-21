## Relembrando de array


#### Forma literal e construtor de array

```javascript
//Array literal
const nomes1 = ['Eduardo', 'Maria', 'Joana'];

// Array instanciado objeto
const nomes2 = new Array('Eduardo', 'Maria', 'Joana');
```

#### Array é referência

```javascript
const array1 = [15, 2, 5];
const array2 = array1;
array2[1] = 10;
console.log(array1[1]); // 10

const copiaDoArray1 = [...array1];
copiaDoArray1[0] = 200;
console.log(copiaDoArray1[0]); //200
console.log(array1[0]); // 15
```


### Remover ultimo elemento do array e retornar para uma variável

```javascript
const carros = ['Ferray', 'Fusca', 'Gol'];
const gol = carros.pop();
console.log(carros); // [ 'Ferray', 'Fusca' ]
console.log(gol); // Gol
```


### Remover o primeiro elemento do array e retornar para uma variável

```javascript
const pessoas = ['João', 'Lucas', 'Maria'];
const joao = pessoas.shift();
console.log(pessoas); // [ 'Lucas', 'Maria' ]
console.log(joao); // João
```

## Adicionar no final do array

```javascript
const pessoas = ['João', 'Lucas', 'Maria'];
pessoas.unshift('Joaquina');
console.log(pessoas); // [ 'Joaquina', 'João', 'Lucas', 'Maria', 'Joaquina' ]
```


## Fatiando

```javascript
const pessoas = ['João', 'Lucas', 'Maria', 'Ana', 'Juca'];
console.log(pessoas.slice(0, 3)); // [ 'João', 'Lucas', 'Maria' ]
console.log(pessoas.slice(0, -1)); // [ 'João', 'Lucas', 'Maria', 'Ana' ]
console.log(pessoas.slice(0, -2)); // [ 'João', 'Lucas', 'Maria' ]
console.log(pessoas.slice(0, -3)); // [ 'João', 'Lucas' ]
```

## Split

```javascript

// Split
const nome = 'Gabriel Miguel,Navas';
const nomesArray = nome.split(' ');
const nomesVirgula = nomesArray[1].split(',');

// retora split

let MiguelNavas = nomesArray.join(' '); // Gabriel Miguel,Navas
MiguelNavas = MiguelNavas.replace(',', ' '); // Gabriel Miguel Navas

console.log(nomesArray); // [ 'Gabriel', 'Miguel,Navas' ]
console.log(nomesVirgula); // [ 'Miguel', 'Navas' ]
console.log(MiguelNavas); // Miguel Navas
```


## Médoto splice, (faz tudo, push, pop, shift, unshift)

```javascript
//             -5        -4       -3         -2         -1
//              0        1         2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elementoAdicionar1, elementoAdicionar2, elementoAdicionar1..)

let removidos = nomes.splice(3, 2);
console.log(removidos); // [ 'Gabriel', 'Júlia' ]
console.log(nomes); // [ 'Maria', 'João', 'Eduardo' ]

removidos = nomes.splice(0, 1, 'Juca'); // é inserido no índice que é removido
console.log(removidos); // [ 'Maria' ]
console.log(nomes); // [ 'Juca', 'João', 'Eduardo' ]


removidos = nomes.splice(1, 1, 'Kátia', 'Miguel'); // é inserido no índice que é removido
console.log(removidos); // [ 'João' ]
console.log(nomes); // [ 'Juca', 'Kátia', 'Miguel', 'Eduardo' ]
```

## Concatenar Arrays

#### Modos mais complicados de concatenar arrays

```javascript
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);

console.log(a1 + a2); // 1,2,34,5,6
console.log(a3); // [ 1, 2, 3, 4, 5, 6 ]
console.log(typeof a3); // object

const a4 = a3.concat([10, 20, 30], 'Gabriel');
console.log(a4); // [ 1, 2, 3, 4, 5, 6, 10, 20, 30, 'Gabriel' ]
```

## Método mais fácil de concatenar arrays


#### Modo difícil de ler (rs)

```javascript
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];

// Retornar os números maiores que 10

function retornaMaiorQue10(arrayNumeros) {
    const novoArray = [];

    for(let numero of arrayNumeros) {
        if(numero > 10) novoArray.push(numero);
    }

    return novoArray;
}

const modoDificilArray = retornaMaiorQue10(numeros);
console.log(modoDificilArray); // [ 50, 80, 11, 15, 22, 27 ]
```

#### Modo fácil de ler (rs)


```javascript
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
```

#### Exemplo mais complexo

```javascript
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
```

## Método Map do array

#### Modifica o array

```javascript
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
```


## Reduce


#### Examplo básico

```javascript
//          10 + acumulador  + acumulador+valor + acumulador+valor
const numeros = [5, 10, 15];

const valorInicial = 10

function reduzir(acumulador, valor, indice, array) {
    return acumulador + valor;
}
const somatorio = numeros.reduce(reduzir, valorInicial);

console.log('Somatória:', somatorio); // 40
```


### Usando reduce + filter + map //

#### Usando reduce + filter + map
#### Some todos os números (reduce)
#### Retorne um aray com os pares (Filter)
#### Retorne um array com o dobro dos valores (map)

```javascript
const numeros = [2, 5, 11, 20, 31, 50];

const somarValores = (acc, valor) => acc + valor;
const valoresPares = numero => numero % 2 === 0;
const valorDobro = numero => numero * 2;


const somatoria = numeros.reduce(somarValores);

const valorInicialFilter = 0;
const valoresParesArray = numeros.filter(valoresPares, valorInicialFilter);

const valorDobroArray = numeros.map(valorDobro);

console.log(somatoria); // 119
console.log(valoresParesArray); // [ 2, 20, 50 ]
console.log(valorDobroArray); // [ 4, 10, 22, 40, 62, 100 ]
```

### Usando apenas reduce

```javascript
const numeros = [2, 5, 11, 20, 31, 50];

const arrayReduzido = numeros.reduce((accArray, valor) => {
    if(valor % 2 === 0) { //filtra
        const dobroValor = valor * 2; //mapeia
        accArray.push(dobroValor);
    }
    return accArray;
}, []);

console.log(arrayReduzido); // [ 4, 40, 100 ]
```

### Retornando a pessoa mais velha

```javascript
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
```