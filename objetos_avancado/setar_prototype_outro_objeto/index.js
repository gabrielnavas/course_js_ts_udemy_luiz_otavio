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