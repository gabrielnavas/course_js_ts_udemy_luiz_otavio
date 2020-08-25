document.addEventListener('click', event => {
    const el = event.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        carregaPagina(el);
    }
})

// sem async/away 
// function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     fetch(href)
//         .then(resp => {
//             if(resp.status < 200 || resp.status > 200) throw new Error('ERRO 404!')
//             return resp.text();
//         })
//         .then(responseHTML => carregaResultado(responseHTML))
//         .catch(error => console.error(error));
// }


//com async await
async function carregaPagina(el) {
    const href = el.getAttribute('href');

    try {
        const resp = await fetch(href)
        if (resp.status < 200 || resp.status > 200) throw new Error('ERRO 404!')

        const responseHTML = await resp.text();
        carregaResultado(responseHTML);
    }
    catch (error) {
        console.error(error);
    }
}


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

