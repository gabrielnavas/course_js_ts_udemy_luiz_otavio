## Promises


##### Executando funções de callback em ordem, independente do tempo.

```javascript
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

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
```


#### Promise, resolve e reject

```javascript
const rand = (min, max) => 
    Math.floor(Math.random() * ( (max*1000) - (min*1000)) + min);

function esperaAi(msg, tempo) {

    //retorna uma promissa, que pode ser resolvidoa ou rejeitada
    return new Promise((resolve, reject) => {
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
```


##### Forçando um reject

```javascript
esperaAi(123, 'tempo')
    .then(resp => {
        console.log(resp);
    })
    .catch(erro => {
        //vai entrar aqui.
        console.log(erro); // Error: msg deve ser do tipo string
    });
```

## Métodos uteis de promises


#### Promise.all

```javascript
function esperaAi(msg, tempo) {

    //retorna uma promissa, que pode ser resolvidoa ou rejeitada
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') return reject(new Error('msg deve ser do tipo string'));
        if(typeof tempo !== 'number') return reject('msg deve ser do tipo string');
        

        setTimeout(() => {
            return resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}


// Promise.all (executa promessas na ordem)

const promises = [
    'Primeiro valor',
    esperaAi('promessa 1', 3000),
    esperaAi('promessa 2', 500),
    esperaAi('promessa 3', 1000),
    'Outro valor',
];

Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        // Caso dê algum erro nas promessas
        console.log(erro);
    })
```



#### Promise.race (entrega a promessa mais rápida, mas continua executando o resto das promessas)


```javascript
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
```


#### Promise.resolve

##### Promise.resolve
##### Vamos supor que uma página já está em cache, então não preciso requisitar, retorna um Promise.resolve(html)
##### Caso contrário é preciso fazer a requisição, será preciso fazer a requisição 

```javascript
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
```


## Async/await


#### Funções auxiliares

```javascript
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
```


#### Exemplo de chamadas assíncronas encadeadas sequencialmente. (novamente)

```javascript
esperaAi('mensagem 1', 1000)
    .then(resposta => {
        console.log(resposta);
        return esperaAi('mensagem 2', 1000)
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('mensagem 3', 1000)
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('mensagem 4', 1000)
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('mensagem 5', 1000)
    })
    .catch(erro => {
        console.log(erro);
    })
```


#### Exemplo equivalente, usando async await, usando chamadas assíncronas encadeadas sequencialmente.

```javascript
async function executa() {

    try {
        const resposta1 = await esperaAi('mensagem 1', 500);
        console.log(resposta1);
    
        const resposta2 = await esperaAi('mensagem 2', 5000);
        console.log(resposta2);
        
        const resposta3 = await esperaAi('mensagem 3', 800);
        console.log(resposta3);
    }
    catch(erro) {
        console.log(erro); // printa erro
    }
}

executa();
```


#### Printando uma promise sem resolver

```javascript
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
```