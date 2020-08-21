## Revisando sobre objetos

### Objeto literal

```javascript
const carro = {
    marca: 'Ferrari',
    cor: 'Vermelho',
    motor: 8.0,
    portas: 2,
};

console.log(carro); // { marca: 'Ferrari', cor: 'Vermelho', motor: 8, portas: 2 }
console.log(carro.cor); // Vermelho
console.log(carro.motor); //8
console.log(carro.portas); // 2
console.log(carro['portas']); // 2

const nomeAtributo = 'marca'
console.log(carro[nomeAtributo]); // Ferrari
```


### Usando o New

```javascript
const pessoa = new Object();
pessoa.nome = 'Gabriel';
pessoa.idade = 55;

console.log(pessoa); // { nome: 'Gabriel', idade: 55 }
```


### Deletando um atributo

```javascript
const cidade = {
    populacao: 55000,
    bairros: 20,
};
console.log(cidade); //{ populacao: 55000, bairros: 20 }

delete cidade.bairros;
console.log(cidade); // { populacao: 55000 }
```


### Método dentro de um objeto

```javascript
const animal = {
    tipo: 'Cachorro',
    falar() {
        console.log('AU AU');
    }
}

animal.falar(); // AU AU
```


### Referência para uma tributo do objeto

```javascript
const familia = {
    pai: 'Gabriel',
    mae: 'Maria',
    exibirParents() {
        console.log(`Olá sou o ${this.pai} e sou casado com a ${this.mae}`);
    },
};

familia.exibirParents(); // Olá sou o Gabriel e sou casado com a Maria.
```


### Factory functions

```javascript
function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
    }
}

const gabriel = criarPessoa('Gabriel', 24);
console.log(gabriel); // { nome: 'Gabriel', idade: 24 }
```


### Constructor functions

```javascript
function Carro(nome, motor) {
    this.nome = nome;
    this.motor = motor;
}

const ferrari = new Carro('Ferrari', 8.0);
console.log(ferrari); // Carro { nome: 'Ferrari', motor: 8 }
```


### Travar objeto para não ser alterado

#### Usando constructor function

```javascript
const fazenda = {
    porcos: 55,
    vacas: 21,
    galinhas: 88,
};

Object.freeze(fazenda);

fazenda.porcos = 65;
console.log(fazenda.porcos); // 55
```


#### Usando factory function

```javascript
function criarFazenda(porcos, vacas, galinhas) {
    
    this.porcos = porcos;
    this.vacas = vacas;
    this.galinhas = galinhas;

    // Travar sempre dois, se travar antes, não poderá fazer a atribuição
    Object.freeze(this);
}

const minhaFazenda = new criarFazenda(77, 44, 88);
minhaFazenda.porcos = 99;
console.log(minhaFazenda.porcos); // 77
```