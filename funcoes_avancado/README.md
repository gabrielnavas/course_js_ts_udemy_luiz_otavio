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