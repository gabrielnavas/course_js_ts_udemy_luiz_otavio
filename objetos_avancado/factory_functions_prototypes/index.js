// Fortemente aclopado

function criaPessoa(nome, sobrenome) {
    const pessoaProtoType = {
        falar() {
            console.log(`${this.nome} está falando.`);
        },
        comer() {
            console.log(`${this.nome} está comendo.`);
        },
        beber() {
            console.log(`${this.nome} está bebendo.`);
        },
    };

    return Object.create(pessoaProtoType, {
        nome: {
            value: nome,
            // get: function () { return this.nome },
        },
        sobrenome: {
            value: sobrenome,
            // get: function () { return this.sobrenome },
        },
    });
}

const pessoa = criaPessoa('Gabriel', 'Navas');
console.log(pessoa.nome);





//// Desaclopado

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
}

const pessoaProtoType = Object.assign({}, { ...falar, ...comer, ...beber, });

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaProtoType, {
        nome: {
            value: nome,
            // get: function () { return this.nome },
        },
        sobrenome: {
            value: sobrenome,
            // get: function () { return this.sobrenome },
        },
    });
}

const pessoa = criaPessoa('Gabriel', 'Navas');
pessoa.falar(); // Gabriel está falar.
pessoa.comer(); // Gabriel está comendo.
pessoa.beber(); // Gabriel está beber.
