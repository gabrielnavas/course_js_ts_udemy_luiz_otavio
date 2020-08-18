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

#### Retorna um valor

```javascript
function soma(n1, n2) {
    return n1 + n2;
}
const result = soma(1, 2);
console.log(result); // 3
```


#### Não retorna nada

```javascript
const dizOla = function() {
    console.log('Olá')
}
console.log(dizOla()); // undefined 
```


#### Exemplo, retorna um objeto

```javascript
function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const pessoa = criarPessoa('gabriel', 'silva');
console.log(pessoa); // { nome: 'gabriel', sobrenome: 'silva' }
```


#### Retornar uma função de uma função

```javascript
function printaNome(nome, sobrenome) {
    console.log(nome);
    
    function pritaSobrenome() {
        return sobrenome;
    }
    
    return pritaSobrenome;
}

const retornaSobrenome = printaNome('Gabriel', 'Navas'); // Gabriel 
const sobrenome = retornaSobrenome(); // Navas
console.log(sobrenome); 
```

#### Exemplo de código repitido

```javascript
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
```


#### Agora sem repitir

```javascript
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
} 

const duasXquatro = criaMultiplicador(2)(4); 
console.log(duasXquatro); // 8
```

## Escopo léxico


##### Exemplo de escopo léxico, a função conhece todo o escopo dela e o global, neste exemplo

```javascript
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

falaNome(); // Luiz
```

#### Continua mostrando Luiz, pois o escopo léxico não mudou

```javascript
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Gabriel'
    falaNome();
}
usaFalaNome(); // Luiz
```


#### A função continua tendo o mesmo escopo léxico, mas pega a variável mais proima, pois tem duas variáveis em seu escopo.

```javascript
const nome = 'Luiz';

function falaNome() {
    const nome = 'Gabriel'
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome(); // Gabriel
```