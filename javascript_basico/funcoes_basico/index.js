//Criando uma função
function saudacao() {
    console.log('Olá');
}

// Chamando a função
saudacao();
saudacao();


// Utilizando parâmetros
function saudacaoComParametro(nome, periodo) {
    console.log(`Olá ${nome}, tenha ${periodo}`);
}

saudacaoComParametro('Gabriel', 'um bom dia');


// Retornando valores
function saudacaoComParametroERetorno(nome, periodo) {
    return `Olá ${nome}, tenha ${periodo}`;
}

//retorno da frase
const frase = saudacaoComParametroERetorno('João', 'uma ótima noite');
console.log(frase);


// Exemplo de calculo
function calculoMultiplicacao(x, y) {
    return x * y;
}
const resultadoCalculo = calculoMultiplicacao(2,5);
console.log(resultadoCalculo); // 10


// Escopo 
function exemploDeEscopo(x, y) {
    const multiplicacao = x * y;
    return multiplicacao;
}

// console.log(multiplicacao); //multiplicacao is not defined


// Execução após o return
function exemploOrdemExecucao(x, y) {
    const multiplicacao = x * y;
    return multiplicacao;
    console.log('não serei executado nem printado');
}

console.log(exemploDeEscopo(2,2)); // 4


// Omitir parâmetros
function calculoSoma(x, y) {
    return x + y;
}

console.log(calculoSoma()); // NaN



// Adicionando lógica na função 
function funcaoComLogica(x, y) {
    if(!Number.isInteger(x) || !Number.isInteger(y)) {
        return NaN;
    }
    return x + y;
}

console.log(funcaoComLogica('gab', 2));



// Adicionando valor padrão
function funcaoParamPadrao(x=2, y=3) {
    return x + y;
}

console.log(funcaoParamPadrao(1)); //4


// Atribuindo função a uma variável
const funcao = function(x) {
    console.log(x);
}

funcao(4)


// Passando uma função como parametro
function calculaDentro(x=2, y=3) {
    console.log(x + y);
}

function exibirFuncao(funcao) {
    calculaDentro(2, 3); //5
}

exibirFuncao(calculaDentro); //5


// Função flecha (arrow function)
const funcaoArrow = () => {
    return 'Sou uma arrow function.';
}

// se tiver somente uma linha, pode-se fazer assim
const funcaoSemChave = () => 'Sou uma funcao sem chave.';

console.log(funcaoArrow());
console.log(funcaoSemChave());

// mais um exemplo, usando cálculo de potência
const calculoArrow = (x=2, y=10) => x ** y;
console.log(calculoArrow(2)); //1024

// quando tem apenas um pararâmetro, não precisa de parenteses na declaração
const apenasUmParametro = numero => numero * 2;
console.log(apenasUmParametro(4)); // 8
