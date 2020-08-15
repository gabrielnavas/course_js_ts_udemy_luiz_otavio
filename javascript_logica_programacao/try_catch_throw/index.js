// Printar uma variável que não existe.

// ReferenceError: naoExisto is not defined
// console.log(naoExisto);


// Mudar para outro lugar, tratar erros
try {
    console.log(naoExisto);
}
catch (err) {
    console.log('variável naoExisto não existe');
    console.log(err); // erro
}


// Lançar/Criar erros 

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'x e y precisam ser números';
    }

    return x + y;
}

const total = soma(2, 2);
console.log(total); // 4

/**
    throw 'x e y precisma ser números';
           ^
    x e y precisam ser números
 */
const totalComErro = soma('gabriel', 4);



// Entao, é possível tratar esse erro lançado
try {
    const totalComErro = soma('gabriel', 4);
}
catch (error) {
    console.log(error); // x e y precisam ser números
}


// Para mostrar a linha do erro, igual normalmente seria

function somaComErro(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
        // throw new TypeError('x e y precisam ser números');
        // throw new ReferenceError('x e y precisam ser números');
    }

    return x + y;
}

try {
    const resultado = somaComErro(3,'jão');
}
catch(error) {
    // agora tem a menssagem, a stack toda do erro, e a linha, path do arquivo, etc
    console.log(error); 
}