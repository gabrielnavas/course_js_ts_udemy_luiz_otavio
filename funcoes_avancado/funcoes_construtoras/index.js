// Função construtora -> objetos
// Função fabrica -> objetos
// Costrutora -> new Pessoa()

function Pessoa(nome, idade) {

    // atributos privados
    const souUmAtributoInterno;
    const souUmaFuncInterna = function() {
        console.log(souUmAtributoInterno);
    }

    this.nome = nome;
    this.idade = idade;

    this.nomeEidade = function() {
        return `${this.nome} ${this.idade}`;
    };
}

const p1 = new Pessoa('Gabriel', 22); 
console.log(p1.nome); // Gabriel
console.log(p1.nomeEidade()); // Gabriel 22
console.log(typeof p1); // object
console.log(typeof Pessoa); // function