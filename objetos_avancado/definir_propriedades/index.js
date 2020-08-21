// DefineProperty

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
console.log(produto); //Produto { nome: 3, preco: 3, estoque: 99 }


