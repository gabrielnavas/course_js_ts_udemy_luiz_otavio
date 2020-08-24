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