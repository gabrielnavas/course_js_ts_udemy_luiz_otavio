/////////// Modo antigo (sem promises) ////////////

// const request = obj => {
//     const isAsync = true;

//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, isAsync);
//     xhr.send();

//     xhr.addEventListener('load', event => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText);
//         } else {
//             obj.error({
//                 code: xhr.status,
//                 msg: xhr.statusText,
//             })
//         }
//     });
// }


// document.addEventListener('click', event => {
//     const el = event.target;
//     const tag = el.tagName.toLowerCase();

//     if (tag === 'a') {
//         event.preventDefault();
//         carregaPagina(el);
//     }
// })

// function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     const objConfig =  {
//         method: 'GET',
//         url: href,
//         success(response) {
//             carregaResultado(response);
//         },
//         error({ code, msg }) {
//             console.log('code: ', code);
//             console.log('error: ', msg);
//         }
//     };

//     request();
// }

// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// }


////////////////// Usando Promises ///////////////////

const request = obj => {
    const isAsync = true;

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, isAsync);
        xhr.send();

        xhr.addEventListener('load', event => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText,
                })
            }
        });
    });
}


document.addEventListener('click', event => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    };

    try {
        const responseHTML = await request(objConfig);
        carregaResultado(responseHTML);
    }
    catch ({ code, msg }) {
        console.log('code: ', code);
        console.log('error: ', msg);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

