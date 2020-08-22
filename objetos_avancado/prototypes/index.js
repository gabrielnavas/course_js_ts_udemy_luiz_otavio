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
