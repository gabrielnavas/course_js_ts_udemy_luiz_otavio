function buttonLimpar() {
    setDisplay('0');
}

function buttonAddDigito(digito) {
    let displayData = getDisplay();
    displayData += digito;
    setDisplay(displayData);
}

function buttonBackspace() {
    let displayData = getDisplay();

    const novoDisplayData = displayData.split('')
    novoDisplayData.pop();
    displayData = novoDisplayData.join('');

    setDisplay(displayData);
}

function getDisplay() {
    const display = document.querySelector('.input-display');
    let valueDisplay = display.value;

    if(typeof valueDisplay !== 'string') {
        valueDisplay = `${valueDisplay}`;
    } 

    if(valueDisplay === '0') {
        valueDisplay = '';
    }

    return valueDisplay;
}

function setDisplay(displayData) {
    const display = document.querySelector('.input-display');
    display.value = displayData;

}

function buttonIgual() {
    const displayData = getDisplay();

    // console.log(displayData);
    
    let resultado = null;
    try {
        resultado = eval(`${displayData}`);

        if(!resultado) {
            resultado = '0';
        } else {
            resultado = Number(resultado).toFixed(2);
            resultado = `${resultado}`;
        }
    }
    catch(err) {
        resultado = 'Sintax error';
        setTimeout(() => {
            setDisplay('0');
        }, 1700);
    }

    setDisplay(resultado);
}

(function setarEnterDisplay() {
    const display = document.querySelector('.input-display');

    display.addEventListener('click', event => {
        if(event.target.value === '0') {
            setDisplay('');
        }
    })

    display.addEventListener('blur', event => {
        if(event.target.value === '') {
            setDisplay('0');
        }
    })
    
    display.addEventListener('keypress', event => {
        const keyCode = event.keyCode;
        if(keyCode === 13) buttonIgual()
    })
})();

(function setarBotoes() {
    const display = document.querySelectorAll('.teclas button');

    function filtrarButoes(buttonText) {
        if( !['C', '<<', '='].includes(buttonText)) {
            buttonAddDigito(buttonText);
        } else {
            const tipoEspecial = {
                'C': buttonLimpar,
                '<<': buttonBackspace,
                '=': buttonIgual,
            }
            tipoEspecial[buttonText]();
        }
    }

    display.forEach(button => {
        button.addEventListener('click', (event) => filtrarButoes(event.target.innerText))
    })
})();