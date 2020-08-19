function Calculadora() {

    const display = document.querySelector('.display');
    // const btnClear = document.querySelector('.btn-clear');

    this.inicia = function () {
        cliqueBotoes();
        pressionaEnter();
    };

    const pressionaEnter = function () {
        display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                realizaConta();
            }
        })
    };

    const clearDisplay = function () {
        display.value = '';
    };

    const apagaUm = function () {
        display.value = display.value.slice(0, -1);
    };

    const realizaConta = function () {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
            }

            display.value = String(conta);
        } catch (err) {
            alert('Conta inválida');
            return;
        }
    };


    const cliqueBotoes = function () {
        // aqui o this é calculadora ainda

        // .bind(this) faz que essa funcao a baixo tenha o mesmo this que o escopo da função criaCalculadora
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                realizaConta();
            }
        });
    }

    const btnParaDisplay = function (valor) {
        display.value += valor;
    };
}

const calculadora = new Calculadora();
calculadora.inicia();