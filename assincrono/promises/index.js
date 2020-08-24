const rand = (min, max) => Math.floor(Math.random() * ( (max*1000) - (min*1000)) + min);

/*
Com callback

function esperaAi(msg, tempo, callback) {
    setTimeout(() => {
        console.log(msg);
        if(callback) callback();
    }, tempo)
}

esperaAi('Olá 1', rand(1, 3), function() {
    esperaAi('Olá 2', rand(1, 3), function() {
        esperaAi('Olá 3', rand(1, 3));
    });
});

*/


// Com promise

function esperaAi(msg, tempo) {

    //retorna uma promissa, que pode ser resolvidoa ou rejeitada
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject(new Error('msg deve ser do tipo string'));
        if(typeof tempo !== 'number') reject('msg deve ser do tipo string');
        

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Sou o último a ser exibido.');
    })
    .catch();

console.log('Olá, sou o primeiro a ser executado');


// forçando uma rejeição

esperaAi(123, 'tempo')
    .then(resp => {
        console.log(resp);
    })
    .catch(erro => {
        //vai entrar aqui.
        console.log(erro); // Error: msg deve ser do tipo string
    });