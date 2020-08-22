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

## Prototype

```javascript
// Construtora -> molde (classe)

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


## Manipulando prototype


#### Apontar o prototype de um objeto literal para outro objeto literal

```javascript
const objA = {
    chaveA: 'chaveA',
};

const objB = {
    chaveB: 'chaveB',
};

Object.setPrototypeOf(objB, objA);

console.log(objB.__proto__); // { chaveA: 'chaveA' }
console.log(objB.__proto__.chaveA); // chaveA
```

#### Criando um objeto constructor e pegando o prototype de outro

```javascript
const objA = {
    chaveA: 'chaveA',
};

const objB = {
    chaveB: 'chaveB',
};

const objC = new Object();

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.__proto__.chaveA); // chaveA
console.log(objC.__proto__.__proto__.chaveA); // chaveA
```

## prototype exemplo real

```javascript
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * percentual);
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * percentual);
}

const produto1 = new Produto('Camiseta', 100.00);
produto1.aumento(0.10);
console.log(produto1.preco); // 110

produto1.desconto(0.20);
console.log(produto1.preco); // 88
```


## Setar prototype de outro objeto

```javascript
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * percentual);
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * percentual);
}

const produto1 = new Produto('Camiseta', 100.00);

const produto2 = {
    nome: 'Ferrari',
    preco: 1000000,
}

Object.setPrototypeOf(produto2, Produto.prototype);
produto2.desconto(0.20);

console.log(produto2.preco); // 800000
```


## Algorítmo checar CPF

<p>
<h3>COMO FAZER</h3>

705.484.450-52 070.987.720-03
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
</p>

####  Meu algoritmo Gabriel

```javascript
const isCpf = cpf => {

    const cpfTratado = retirarNaoNumeros(cpf);

    if (!isTamanhoMinimo(cpfTratado)) return false;
    if (isSequencia(cpfTratado)) return false;

    const cpfParcial = cpfTratado.slice(0, 9);
    const restoCpf1 = calcularUltimosDigitos(cpfParcial);
    const restoCpf2 = calcularUltimosDigitos(cpfParcial + restoCpf1);

    const cpfGerado = cpfParcial + restoCpf1 + restoCpf2;

    return cpfTratado === cpfGerado;

    function isSequencia(cpf) {
        const sequencia = cpf[0].repeat(cpf.length);
        return sequencia === cpf;
    }

    function isTamanhoMinimo(tamanho) {
        return tamanho != 11;
    }

    function retirarNaoNumeros(cpfBruto) {
        return cpfBruto.replace(/\D+/g, '');
    }

    function calcularUltimosDigitos(cpfParcial) {

        let totalLength = cpfParcial.length + 1;

        let total = cpfParcial.split('').reduce((acc, numero) => {
            acc += totalLength-- * Number(numero);
            return acc;
        }, 0);

        const resultCalculo = 11 - (total % 11);
        const restoCpfParcial = resultCalculo > 9 ? 0 : resultCalculo;

        return String(restoCpfParcial);
    }
}

console.log(isCpf('705.484.450-52')); // true
console.log(isCpf('070.987.720-03')); // true
console.log(isCpf('111.111.111-11')); // false
```

##### Professor

```javascript
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if (cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}
```