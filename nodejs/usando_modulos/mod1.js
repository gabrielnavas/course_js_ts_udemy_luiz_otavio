const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// console.log(module.exports); 
/*
{ nome: 'Luiz', sobrenome: 'Miranda', falaNome: [Function: falaNome] }
*/

exports.nome = nome;
// exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// console.log(exports === module.exports); // true
// console.log(this === module.exports); // true
// console.log(this === exports); // true

class Pessoa {
    constructor() {
        console.log('Sou a classe pessoa');
    }
}

exports.Pessoa = Pessoa;

exports.MinhaClasse = class {
    constructor() {
        console.log('minha classe anonima foi instânciada');
    }
}


// Assim é melhor
module.exports = {
    
}