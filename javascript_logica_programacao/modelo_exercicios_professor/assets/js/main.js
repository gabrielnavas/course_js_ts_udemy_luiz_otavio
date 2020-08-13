// Capturar evento do submit do formulário.
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputaltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputaltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `eu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
})

function getNivelImc(imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobre peso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3',
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValido) {
    const resultado = document.querySelector('.resultado');
    const p = criaP();

    function removeRespostasAntigas() {
        if(resultado.childNodes.length > 0) {
            resultado.removeChild(resultado.childNodes[0]);
        }
    }

    p.innerHTML = msg;
    if (isValido) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    removeRespostasAntigas();
    resultado.appendChild(p);
}