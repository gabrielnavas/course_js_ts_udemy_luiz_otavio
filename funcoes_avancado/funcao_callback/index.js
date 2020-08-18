// Exemplo simples de chamada de função

function f1 () {
    console.log('f1');
}

function f2 () {
    console.log('f2');
}

function f3 () {
    console.log('f3');
}

f1();
f2();
f3();
console.log('Olá mundo!');
/*
f1
f2
f3
Olá mundo!
*/



// Exemplo de utilizacação de callback

function f1ComEspera () {
    setTimeout(function() {
        console.log('f1');
    }, 500);
}

function f2ComEspera () {
    setTimeout(function() {
        console.log('f2');
    }, 1000);
}

function f3ComEspera () {
    setTimeout(function() {
        console.log('f3');
    }, 800);
}

f1ComEspera();
f2ComEspera();
f3ComEspera();
console.log('Olá mundo primeiro!');
/*
Olá mundo primeiro!
f1
f3
f2
*/


// Executar na ordem, uma função chama a outra (callback), com isso é executado na ordem, independente do tempo de execução

function f1ComEsperaCallback (callback) {
    setTimeout(function() {
        console.log('f1');
        if(callback) callback()
    }, 500);
}

function f2ComEsperaCallback (callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) callback()
    }, 1000);
}

function f3ComEsperaCallback (callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback()
        console.log('Olá mundo');
    }, 800);
}


//CallbackHell >:|
f1ComEsperaCallback(
    f2ComEsperaCallback(
        f3ComEsperaCallback
    )
);
/*
f1
f2
f3
Olá mundo. 
*/



// Resolvendo o callbackHell

function f1 (callback) {
    setTimeout(function() {
        console.log('f1');
        if(callback) callback()
    }, 500);
}

function f2 (callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) callback()
    }, 1000);
}

function f3 (callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback()
    }, 800);
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo');
}
/*
f1
f2
f3
Olá mundo. 
*/