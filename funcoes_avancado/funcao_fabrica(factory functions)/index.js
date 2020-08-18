// Exemplo básico

function criaPessoa(nome, sobrenome) {
    return { 
        nome, 
        sobrenome 
    };
}

const p1 = criaPessoa('Gabriel', 'Navas');
console.log(p1.nome, p1.sobrenome); // Gabriel Navas


// usando o 'this'
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



// usando get/set
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