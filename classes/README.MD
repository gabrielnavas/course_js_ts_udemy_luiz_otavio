## Criando classes

#### As funções já ficam no prototype

```javascript
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

const pessoa = new Pessoa();
console.log(pessoa);
```


## Getters e Setters

#### Exemplo, classe Carro

```javascript
// Atributo privado 
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
        this.limite = 250;

        // privado
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor > this.limite || valor < 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this._velocidade >= this.limite) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this._velocidade <= 0) return;
        this[_velocidade]--;
    }
}

const carro = new Carro('Fusca');
carro.acelerar();
carro.acelerar();
console.log(carro.velocidade); // 5

carro.freiar();
console.log(carro.velocidade); // 4

carro.velocidade = 199;
carro.velocidade = 251; // não seta
console.log(carro.velocidade); // 199
```

#### Exemplo, classe Pessoa

##### Classe pessoa

```javascript
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(nome) {
        const nomeSplited = nome.split(' ').reduce((nomes, nome) => {
            if (nome.length <= 2) {
                const ultimoNome = nomes[nomes.length - 1]
                nomes[nomes.length - 1] = ultimoNome + ' ' + nome;
            } else {
                nomes.push(nome);
            }
            return nomes
        }, []);
        this.nome = nomeSplited[0];
        this.sobrenome = nomeSplited[1];
    }
}

const pessoa = new Pessoa('Gabriel', 'Navas');
console.log(pessoa); // Pessoa { nome: 'Gabriel', sobrenome: 'Navas' }
console.log(pessoa.nomeCompleto); // Gabriel Navas

pessoa.nomeCompleto = 'João da Silva';
console.log(pessoa.nomeCompleto); // João da Silva
```



## Heranças

```javascript
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            this.ligado = !this.ligado;
            console.log('disposito desligado');
        }
    }

    desligar() {
        if( !this.ligado) {
            this.ligado = !this.ligado;
            console.log('disposito desligado');
        }
    }
}

const disp = new DispositivoEletronico('Smartphone');
console.log(disp); // DispositivoEletronico { nome: 'Smartphone', ligado: false }


// extendendo a classe DispositoEletronico
class Smarthphone extends DispositivoEletronico {

    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const phone = new Smarthphone('Nokia', 'Preto');
console.log(phone); //Smarthphone { nome: 'Nokia', ligado: false, cor: 'Preto' }


class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    //sobreescrevendo o metodo ligar
    ligar() {
        console.log('Você sobrescreveu o método ligar.');
    }
}

const tablet = new Tablet('Nokia', true); 
tablet.ligar(); // Você sobrescreveu o método ligar.
console.log(tablet); // Tablet { nome: 'Nokia', ligado: false, temWifi: true }Tablet { nome: 'Nokia', ligado: false, temWifi: true }
```


## Métodos estáticos

```javascript
class ControleRemoto {

    static pilha = 0;

    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }


    //métodos de instância;
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        ControleRemoto.pilha += 1;
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.diminuirVolume();

console.log(controle); //ControleRemoto { tv: 'LG', volume: 4 }

ControleRemoto.trocaPilha();
console.log(ControleRemoto.pilha); // 1
```

## CPF

```javascript

```