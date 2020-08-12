function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    // 1. forma
    // form.onsubmit = function(evento) {
    //     evento.preventDefault(); //previnir o que era pra acontecer por padrão
    //     console.log('foi enviado');

    // };

    //2. forma
    const resultados = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');

        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value, 
            sobrenome:sobrenome.value, 
            peso: peso.value, 
            altura: altura.value,
        };

        resultados.push(pessoa);
        console.log(resultados);
        
        resultados.forEach(r => {
            const li = `<li>${r.nome} ${r.sobrenome} - peso: ${r.peso} - altura: ${r.altura}</li>`;
            resultado.innerHTML += li;
        })
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();