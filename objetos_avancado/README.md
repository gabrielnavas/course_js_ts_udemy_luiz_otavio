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


## Definir propriedade(s)

#### DefineProperty (uma chave)

```javascript
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibir a chave?
        value: estoque,  // valor
        writable: false, // alterar o valor?,
        configurable: true, // posso redefinir a propriedade

    });
    // redifinindo
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        value: estoque,  
        writable: false, 
        configurable: false,
    });
}

const produto = new Produto('camiseta', 20, 3);
produto.estoque = 99;
console.log(produto); // Produto { nome: 'camiseta', preco: 20, estoque: 3 }
```

#### DefineProperties (várias chaves)

```javascript
// DefineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: estoque,  
            writable: false, 
            configurable: false,
        },
        preco: {
            enumerable: true, 
            value: estoque,  
            writable: false, 
            configurable: false,
        }
    });
}

const produto = new Produto('camiseta', 20, 3);
produto.estoque = 99;
console.log(produto); //Produto { nome: 'camiseta', preco: 20, estoque: 3 }
```



## Getter e Setter


#### Getter e Setter em função construtora

```javascript
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibir a chave?
        configurable: true, // posso redefinir a propriedade
        get: function() {
            return estoquePrivado < 0 ? 0 : estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new Error('valor precisa ser um numero');
            } 

            if(valor < 0) {
                estoquePrivado = 0;
            }
            estoquePrivado = valor;
        }
    });
}

const produto = new Produto('camiseta', 20, 3);
console.log(produto); // Produto { nome: 'camiseta', preco: 20, estoque: [Getter] }

console.log(produto.estoque); // 3
produto.estoque = 55;
console.log(produto.estoque); // 55
```


#### Getter e setter função factory

```javascript
function criaPessoa(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

const pessoa = criaPessoa('Gabriel');
console.log(pessoa); // { nome: [Getter/Setter] }
console.log(pessoa.nome); // Gabriel
```

## Métodos úteis de objetos


#### Objet.values

```javascript
const pessoa = { nome: 'Gabriel', idade: 55 };
const chaves = Object.values(pessoa);

console.log(chaves); // [ 'Gabriel', 55 ]
```


#### Objet.entries

```javascript
const pessoa = { nome: 'Gabriel', idade: 55 };
const chaves = Object.entries(pessoa);

console.log(chaves); // [ [ 'nome', 'Gabriel' ], [ 'idade', 55 ] ]

// iterar sobre o entries
for(let [chave, valor] of Object.entries(pessoa)) {
    console.log(`chave: ${chave}, valor ${valor}`)
}
/* Saída: 
chave: nome, valor Gabriel
chave: idade, valor 55
*/
```


#### Objet.assign(des, any) (copiar objeto)

```javascript
const produto = { nome: 'Caneca', preco: 18.55 };

const copiaProduto = Object.assign({}, produto, { material: 'madeira' });
copiaProduto.nome = 'Cadeira';

console.log(produto); // { nome: 'Caneca', preco: 18.55 }
console.log(copiaProduto); // { nome: 'Cadeira', preco: 18.55, material: 'madeira' }
```


#### Objet.getOwnPropertyDescriptor(o ,'prop')

```javascript
const pessoa = { nome: 'Gabriel', idade: 55 };
const ownPropertyDescr = Object.getOwnPropertyDescriptor(pessoa, 'nome');
console.log(ownPropertyDescr);
/*
{
  value: 'Gabriel',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
```


#### ...spread (copiar objeto)

```javascript
const outroProduto = {...produto, material: 'plástico'};
outroProduto.nome = 'Copo';

console.log(produto); // { nome: 'Caneca', preco: 18.55 }
console.log(outroProduto); // { nome: 'Copo', preco: 18.55, material: 'plástico' }
```


#### Objet.keys

```javascript
const pessoa = { nome: 'Gabriel', idade: 55 };
const chaves = Object.keys(pessoa);

console.log(chaves); //[ 'nome', 'idade' ]
```


#### Objet.freeze

```javascript
// Ja existe exemplo pra cima
```


#### Objet.defineProperties

```javascript
// Ja existe exemplo pra cima

```


#### Objet.defineProperty

```javascript
// Ja existe exemplo pra cima
```


## Prototype

```javascript
function Carro(nome, motor) {
    // this.nome = nome;
    // this.motor = motor;

    // this.nomeCompleto = 
}


Carro.prototype.nome = 'Ferrari';
Carro.prototype.motor = 7.0;
Carro.prototype.nomeCompleto = () => this.nome + ' ' + this.motor;

// instância
const ferrari1 = new Carro('Ferrari1', 7.0); // <- Carro = Função construtora
const data = new Date(); // <- Date = Função construtora

console.dir(ferrari1);
console.dir(ferrari2);
```