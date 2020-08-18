// Declarações de função (Function hoisting)

falarOi();

function falarOi() {
    console.log('Oi');
}


// First-class objects (Objetos de primeira classe)

// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};

souUmDado(); // Sou um dado


// Simples exemplo de callback
const souUmDado = function() {
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado); // Sou um dado



// Arrow Function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow(); // Sou uma arrow function;



// Dentro de um objeto
const carro = {
    ligar: function() {
        console.log('Vruuummm');
    }
};

carro.ligar(); // Vrumm

//ou sem a palavra function

const pessoa = {
    falar() {
        console.log('Olá');
    }
};
pessoa.falar(); // Olá

