// Closure é a habilidade de acessar seu escopo léxico

function retornaFuncao(nome) {

    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Gabriel');
const funcao2 = retornaFuncao('João');
console.dir(funcao()); // Gabriel
console.dir(funcao2()); //João