// \/\/\/\/\/ COMO FAZER \/\/\/\/\/\/\/\/ //

// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/


// Meu algoritmo

const isCpf = cpf => {

    const cpfTratado = retirarNaoNumeros(cpf);

    if (!isTamanhoMinimo(cpfTratado)) return false;
    if (isSequencia(cpfTratado)) return false;

    const cpfParcial = cpfTratado.slice(0, 9);
    const restoCpf1 = calcularUltimosDigitos(cpfParcial);
    const restoCpf2 = calcularUltimosDigitos(cpfParcial + restoCpf1);

    const cpfGerado = cpfParcial + restoCpf1 + restoCpf2;

    return cpfTratado === cpfGerado;

    function isSequencia(cpf) {
        const sequencia = cpf[0].repeat(cpf.length);
        return sequencia === cpf;
    }

    function isTamanhoMinimo(tamanho) {
        return tamanho != 11;
    }

    function retirarNaoNumeros(cpfBruto) {
        return cpfBruto.replace(/\D+/g, '');
    }

    function calcularUltimosDigitos(cpfParcial) {

        let totalLength = cpfParcial.length + 1;

        let total = cpfParcial.split('').reduce((acc, numero) => {
            acc += totalLength-- * Number(numero);
            return acc;
        }, 0);

        const resultCalculo = 11 - (total % 11);
        const restoCpfParcial = resultCalculo > 9 ? 0 : resultCalculo;

        return String(restoCpfParcial);
    }
}

console.log(isCpf('705.484.450-52')); // true
console.log(isCpf('070.987.720-03')); // true
console.log(isCpf('111.111.111-11')); // false





// Algorítmo professor

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if (cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}
