
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
        if (typeof valor !== 'number') return;
        if (valor > this.limite || valor < 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if (this._velocidade >= this.limite) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this._velocidade <= 0) return;
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


/// Classe pessoa

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