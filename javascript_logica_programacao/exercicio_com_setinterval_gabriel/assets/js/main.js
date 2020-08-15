const horarioElemento = document.querySelector('.hora');
let timer = null;

const horario = {
    hora: 0,
    minutos: 0,
    segundos: 0,

    incrementarSegundo(segundos) {
        let novoSegundos = this.segundos + segundos;

        while (novoSegundos > 59) {
            this.minutos++;

            if (this.minutos > 59) {
                this.incrementarMinutos(1);
                this.minutos = 0;
            }

            novoSegundos = novoSegundos - 60;
        }

        this.segundos = novoSegundos;
        return this;
    },
    incrementarMinutos(minutos) {
        let novoMinutos = this.minutos + minutos;

        while (novoMinutos > 59) {
            this.hora++;

            novoMinutos = novoMinutos - 60;
        }

        this.minutos = novoMinutos;
        return this;
    },
    getHorarioFormated() {
        function zeroAEsquerda(numero) {
            return numero < 10 ? `0${numero}` : numero;
        }

        return (
            `${zeroAEsquerda(horario.hora)}:` +
            `${zeroAEsquerda(horario.minutos)}:` +
            `${zeroAEsquerda(horario.segundos)}`
        );
    }
}

function settingHorarioHtml(parar = false) {
    if(!parar)  {
        horario.incrementarSegundo(1)
    }
    horarioElemento.innerHTML = horario.getHorarioFormated();
}

function resetarHorario() {
    horario.hora = 0;
    horario.minutos = 0;
    horario.segundos = 0;

    pararTimer();
    settingHorarioHtml(true);
}

function pararTimer() {
    clearInterval(timer);
}

function iniciarTimer() {
    timer = setInterval(function () {
        settingHorarioHtml();
    }, 1000);
}

document
    .querySelector('#iniciar')
    .addEventListener('click', function () {
        iniciarTimer();
    });

document
    .querySelector('#pausar')
    .addEventListener('click', function () {
        pararTimer();
    });

document
    .querySelector('#zerar')
    .addEventListener('click', function () {
        resetarHorario();
    });