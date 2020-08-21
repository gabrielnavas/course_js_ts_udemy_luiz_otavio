// Getter e Setter em função construtora

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


// Getter e setter função factory

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