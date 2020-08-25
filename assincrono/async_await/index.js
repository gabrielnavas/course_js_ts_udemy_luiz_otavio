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

// Exemplo de chamadas assíncronas encadeadas sequencialmente.
// esperaAi('mensagem 1', 1000)
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('mensagem 2', rand(1, 4))
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('mensagem 3', 2000)
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('mensagem 4', 500)
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('mensagem 5', 200)
//     })
//     .catch(erro => {
//         console.log(erro);
//     })



// Exemplo de chamadas assíncronas encadeadas sequencialmente. (usando async await)
// async function executa() {

//     try {
//         const resposta1 = await esperaAi('mensagem 1', 500);
//         console.log(resposta1);
    
//         const resposta2 = await esperaAi('mensagem 2', 5000);
//         console.log(resposta2);
        
//         const resposta3 = await esperaAi('mensagem 3', 800);
//         console.log(resposta3);
//     }
//     catch(erro) {
//         console.log(erro); // printa erro
//     }
// }

// executa();


// Printando uma promise sem resolver
/*
pending -> pendente
fullfilled -> resolvida
reject -> rejeitada
*/

async function executa() {
    try {
        const resposta = esperaAi('mensagem 1', 1000);

        setTimeout(() => {
            console.log('promise pendente: ', resposta); //
        }, 1100);
    }
    catch(erro) {
        console.log(erro); // printa erro
    }
}

executa();