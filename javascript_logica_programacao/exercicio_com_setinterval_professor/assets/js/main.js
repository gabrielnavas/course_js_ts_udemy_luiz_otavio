(function relogio() {

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC',
        });
    }

    console.log(criaHoraDosSegundos(10));

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer = null;

    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {

        if (e.target.className === 'iniciar') {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarRelogio();
        }

        if (e.target.className === 'pausar') {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if (e.target.className === 'zerar') {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = `00:00:00`;
        }
    });


    // iniciar.addEventListener('click', function (event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciarRelogio();
    // });

    // pausar.addEventListener('click', function (event) {
    //     relogio.classList.add('pausado');
    //     clearInterval(timer);
    // });

    // zerar.addEventListener('click', function (event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     segundos = 0;
    //     relogio.innerHTML = `00:00:00`;
    // });
})();
