## Maneiras de declarar funções


#### Declarações de função (Function hoisting)

```javascript
falarOi();

function falarOi() {
    console.log('Oi');
}
```


#### First-class objects (Objetos de primeira classe)

```javascript
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

souUmDado(); // Sou um dado
```



#### Simples exemplo de callback

```javascript
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado); // Sou um dado
```


#### Arrow Function

```javascript
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow(); // Sou uma arrow function;
```


#### Dentro de um objeto

```javascript
const carro = {
    ligar: function() {
        console.log('Vruuummm');
    }
};

carro.ligar(); // Vrumm

//ou sem a palavra function

const pessoa = {
    falar() {
        console.log('Olá');
    }
};
pessoa.falar(); // Olá
```

## Paramêtros de função

#### A function 'funcao' não recebe nenhum argumentos, pois não tem nenhum parâmetro

```javascript
function funcao() {
    console.log('Olá');
}
funcao('Valor 1', 1, 2, 13, 123, 12, 3, 1, 4214); // Olá
```

#### Mas posso pergar esse argumentos

```javascript
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
```

#### Pegando Argumentos dos parâmetros

```javascript
function comParams(a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f); // 1 2 3 undefined undefined undefined
}

comParams(1,2,3);
```

#### Parametros padrão, maneira antiga

```javascript
function funcaoValorPadrao(a, b) {
    b = b || 2;
    console.log(a, b);
}
funcaoValorPadrao(1); // 1 2
```


#### Parametros padrão, maneira antiga 

```javascript
function funcaoValorPadrao(a, b = 2, c = 5) {
    console.log(a, b, c);
}
funcaoValorPadrao(1); // 1 2 5
funcaoValorPadrao(1, null, 6); // 1 null 6
funcaoValorPadrao(1, undefined, 6); // 1 2 6
```


#### Desestruturação com objetos

```javascript
function printaNomes({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
printaNomes({ nome: 'Gabriel', sobrenome: 'Silva', idade: 22 });
```


#### Desestruturação com array

```javascript
function printaNomes([ nome, sobrenome, idade ]) {
    console.log(nome, sobrenome, idade);
}
printaNomes([ 'Gabriel', 'Silva', 22 ]);
```

#### Usando rest como parametro

```javascript
const conta = (operador, acumulador, ...numeros) => {
    console.log(operador); // + 
    console.log(acumulador); // 0 
    console.log(numeros); // [ 20, 30, 40, 50 ]
};

conta('+', 0, 20, 30, 40, 50);
```