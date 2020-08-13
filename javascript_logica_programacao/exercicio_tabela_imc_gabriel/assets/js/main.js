(function escopoCalcularIMC() {

    const calcularIMC = (peso, altura) => peso / (altura * altura);

    function obterIMC() {
        const elemPeso = document.querySelector('#peso');
        const elemAltura = document.querySelector('#altura');

        const peso = Number(elemPeso.value);
        const altura = Number(elemAltura.value);

        if( peso <= 0 || altura <= 0 || Number.isNaN(peso) || Number.isNaN(altura) ) {
            alert('Digite um peso e uma altura corretamente.');
            throw 'Digite um peso e uma altura corretamente.';
        }

        const resultadoIMC = calcularIMC(peso, altura);

        return resultadoIMC;
    }

    function escolherRespostaClassCSS(imc) {
        let classImc = '#imc_op';
        let classResultado = '#resul_op';

        if (imc < 18.5) {
            classImc += '1';
            classResultado += '1';
        }
        else if (imc >= 18.5 && imc < 25) {
            classImc += '2';
            classResultado += '2';
        }
        else if (imc >= 25.5 && imc < 30) {
            classImc += '3';
            classResultado += '3';
        }
        else if (imc >= 30.5 && imc < 35) {
            classImc += '4';
            classResultado += '4';
        }
        else if (imc >= 35.5 && imc < 40) {
            classImc += '5';
            classResultado += '5';
        }
        else {
            classImc += '6';
            classResultado += '6';
        }

        return {
            classImc,
            classResultado
        }
    }


    function mostrarNoHtmlResultados({ classImc, classResultado }) {

        const elemLiImc = document.querySelector(classImc);
        const elemLiResult = document.querySelector(classResultado);

        function setCssElementosLi({ elemento, innerHTML, fontWeight, color }) {
            elemento.innerHTML = innerHTML;
            elemento.style.fontWeight = fontWeight;
            elemento.style.color = color;
        }

        function limparResultadoAnterior() {

            for (let numero = 1; numero <= 6; numero++) {

                const elemImcClear = document.querySelector(`#imc_op${numero}`);
                const elemRespClear = document.querySelector(`#resul_op${numero}`);

                setCssElementosLi({
                    elemento: elemImcClear,
                    innerHTML: elemImcClear.innerHTML.replace('-&gt; ', ''),
                    fontWeight: 'initial',
                    textColor: 'initial',
                });
                setCssElementosLi({
                    elemento: elemRespClear,
                    innerHTML: elemRespClear.innerHTML.replace('-&gt; ', ''),
                    fontWeight: 'initial',
                    textColor: 'initial',
                });
            }
        }

        function novoResultado() {
            setCssElementosLi({
                elemento: elemLiImc,
                innerHTML: `-> ${elemLiImc.innerHTML}`,
                fontWeight: 'bold',
                textColor: 'darkblue',
            });
            setCssElementosLi({
                elemento: elemLiResult,
                innerHTML: `-> ${elemLiResult.innerHTML}`,
                fontWeight: 'bold',
                textColor: 'darkblue',
            });
        }

        limparResultadoAnterior();
        novoResultado();
    }

    function listenerEventCalcularIMC(event) {
        event.preventDefault();

        const imc = obterIMC();
        const respClassesCSS = escolherRespostaClassCSS(imc);

        mostrarNoHtmlResultados(respClassesCSS);
    }

    (function main() {
        const btnEnviar = document.querySelector('#form');
        btnEnviar.addEventListener('submit', listenerEventCalcularIMC);
    })();
})();