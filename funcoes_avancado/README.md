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


## Closures

### Closure é a habilidade de acessar seu escopo léxico

```javascript
function retornaFuncao(nome) {

    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Gabriel');
const funcao2 = retornaFuncao('João');
console.dir(funcao()); // Gabriel
console.dir(funcao2()); //João
```

## Callback

#### Exemplo simples de chamada de função
```javascript
function f1 () {
    console.log('f1');
}

function f2 () {
    console.log('f2');
}

function f3 () {
    console.log('f3');
}

f1();
f2();
f3();
console.log('Olá mundo!');
/*
f1
f2
f3
Olá mundo!
*/
```

#### Exemplo de utilização de callback

```javascript
function f1ComEsperaCallback (callback) {
    setTimeout(function() {
        console.log('f1');
        if(callback) callback()
    }, 500);
}

function f2ComEsperaCallback (callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) callback()
    }, 1000);
}

function f3ComEsperaCallback (callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback()
        console.log('Olá mundo');
    }, 800);
}


//CallbackHell >:|
f1ComEsperaCallback(
    f2ComEsperaCallback(
        f3ComEsperaCallback
    )
);
/*
f1
f2
f3
Olá mundo. 
*/
```


#### Resolvendo o callbackHell

```javascript

function f1 (callback) {
    setTimeout(function() {
        console.log('f1');
        if(callback) callback()
    }, 500);
}

function f2 (callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) callback()
    }, 1000);
}

function f3 (callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback()
    }, 800);
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo');
}
/*
f1
f2
f3
Olá mundo. 
*/
```


## funcoes imediatas(IIFE)

### IIFE - Immediately invoked function expression
### Fugir de um contexto léxico atual.

#### sem IIFE

```javascript
function executaAlgumaTarefaSemIIFE() {
    console.log('tarefa 1');
}
executaAlgumaTarefaSemIIFE(); // tarefa 1
```

#### com IIFE
```javascript
(function executaComIIFE() {
    console.log('tarefa 2'); 
})(); // tarefa 2
```

### Outro exemplo, função anônima

```javascript
((parametro1, parametro2, ...etc) => {
    console.log(parametro1); // 1
    console.log(parametro2); // 2
    console.log(etc); // [ 'Gabriel', 'Maça', 'Juca' ]
    console.log('sou uma IIFE usando uma funcao anônima')
})(1, 2, 'Gabriel', 'Maça', 'Juca');
```

## função fabrica (Factory)

### Exemplo básico

```javascript
function criaPessoa(nome, sobrenome) {
    return { 
        nome, 
        sobrenome 
    };
}

const p1 = criaPessoa('Gabriel', 'Navas');
console.log(p1.nome, p1.sobrenome); // Gabriel Navas
```

### usando o 'this'

```javascript

function criaPessoaFalante(nome, sobrenome, p, a) {
    return { 
        nome, 
        sobrenome,
        peso: 50,
        peso: p,
        altura: a,
        fala(assunto) {
            return `${this.nome} está ${assunto} ${this.peso} anos.`;
        },
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p2 = criaPessoaFalante('Gabriel', 'navas', 80, 1.78);
const frase = p2.fala('fazendo');
const imc = p2.imc();
console.log(frase); // Gabriel está fazendo 50 anos.
console.log(imc); // o imc => 25.25.
```

### Getter/Setter

```javascript
function criaPessoaFalante(nome, sobrenome) {
    return { 
        nome, 
        sobrenome,
    
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(nomeCompleto) {
            const nomeSplited = nomeCompleto.split(' ');
            this.nome = nomeSplited.shift();
            this.sobrenome = nomeSplited.join(' ');
        }
    };
}

const pessoa = criaPessoaFalante('Gabriel', 'Navas');
// console.log(pessoa.nomeCompleto); // Gabriel Navas

pessoa.nomeCompleto = 'João Carlos da Silva Soares';
console.log(pessoa.nomeCompleto); // João Carlos da Silva Soares
```

## Minha calculadora do exercício feito pelo Gabriel Navas

![Imagem do resultado](https://github.com/gabrielnavas/course_js_ts_udemy_luiz_otavio/blob/master/javascript_logica_programacao/exercicio_switch_date_gabriel/img_exercicio_switch_case_gabriel.png)
