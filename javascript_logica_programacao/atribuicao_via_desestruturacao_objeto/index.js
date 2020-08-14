const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Navas',
    idade: 27,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    },
};


const { nome, ...resto } = pessoa;

console.log(nome); //nome
console.log(resto); //resto do objeto

