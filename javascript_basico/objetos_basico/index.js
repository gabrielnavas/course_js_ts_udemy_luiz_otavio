//Grupo de dados

const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 24;

const nome02 = 'Maria';
const sobrenome02 = 'Silva';
const idade02 = 21;


// muito melhor assim né?
// isso são objetos literais
//  const nomeObjeto =  {
//     chave1: valor1,
//     chave2: valor2,
// }

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 24,
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 21,
};

console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);


// função construtora
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    }
}

const pessoa3 = criaPessoa('Gabriel', 'Miguel', 22);
console.log(pessoa3); //{ nome: 'Gabriel', sobrenome: 'Miguel', idade: 22 }



// função arrowCriadora =>
const criaPessoa2 = (nome, sobrenome, idade) => {
    return { 
        nome, 
        sobrenome, 
        idade,
        fala() {
            return `Olá sou o ${this.nome} ${this.sobrenome} e tenho ${this.idade}`;
        },
        incrementaIdade(){
            this.idade++;
        }
    };
}
console.log(criaPessoa2('João', 'Silva', 26)); // { nome: 'João', sobrenome: 'Silva', idade: 26 }
console.log(criaPessoa2('João', 'Silva', 26).fala()); // Olá sou o João Silva e  tenho 26

const outraPessoa = criaPessoa2('Mario', 'Navas', 22);
outraPessoa.incrementaIdade();
console.log(outraPessoa.idade); //23