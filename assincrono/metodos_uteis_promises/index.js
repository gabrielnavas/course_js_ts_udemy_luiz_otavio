const rand = (min, max) => Math.floor(Math.random() * ((max * 1000) - (min * 1000)) + min);

function esperaAi(msg, tempo) {

    //retorna uma promissa, que pode ser resolvidoa ou rejeitada
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') return reject(new Error('msg deve ser do tipo string'));
        if (typeof tempo !== 'number') return reject('msg deve ser do tipo string');


        setTimeout(() => {
            return resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}


// Promise.all (executa promessas na ordem)

// const promises = [
//     'Primeiro valor',
//     esperaAi('promessa 1', 3000),
//     esperaAi('promessa 2', 500),
//     esperaAi('promessa 3', 1000),
//     'Outro valor',
// ];

// Promise.all(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(erro => {
//         // Caso dê algum erro nas promessas
//         console.log(erro);
//     })


// Promise.race (entrega a promessa mais rápida, mas continua executando o resto das promessas)

const promises = [
    esperaAi('promessa 1', rand(1, 5)),
    esperaAi('promessa 2', 500),
    esperaAi('promessa 3', 1000),
];

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        // Caso dê algum erro nas promessas
        console.log(erro);
    })



// Promise.resolve
// Vamos supor que uma página já está em cache, então não preciso requisitar, retorna um Promise.resolve(html)
// Caso contrário é preciso fazer a requisição, será preciso fazer a requisição 

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        // return Promise.resolve('<html>sou uma pagina em cache</html>');
        return Promise.reject('<html>sou um erro</html>');
    } else {
        // busca html em algum lugar.
        return esperaAi('<html>sou uma pagina baixada</html>', 2000);
    }
}

baixaPagina()
    .then(paginaHTML => {
        console.log(paginaHTML); // <html>sou uma pagina em cache</html>'
    })
    .catch(erro => console.log(erro)); // <html>sou um erro</html>