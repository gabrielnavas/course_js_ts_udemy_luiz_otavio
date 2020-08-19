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