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
