const isCpf = (cpf) => {
    
    const cpfOriginal = retirarNaoNumeros(cpf);
    
    if( !isTamanhoMinimo(cpfOriginal)) return false;

    const primeiros9 = cpfOriginal.slice(0, 9);
    const primeiros10 = calcularUltimosDigitos(primeiros9, 10);
    const cpfFinal = calcularUltimosDigitos(primeiros10, 11);

    function isTamanhoMinimo(tamanho) {
        return tamanho != 11;
    }

    function retirarNaoNumeros(cpfBruto) {
        return cpf.replace(/\D+/g, '');
    }

    function calcularUltimosDigitos(primeiros9, numero) {

        let total = 0;
        // let numero = 10;
        for (let ch of primeiros9) {
            total += Number(ch) * numero;
            numero--;
        }

        let primeiroUltimo = 11 - (total % 11);
        primeiroUltimo = primeiroUltimo > 9 ? 0 : primeiroUltimo;

        const primeiros10 = primeiros9 + primeiroUltimo.toString();
        return primeiros10;
    }

    return cpfFinal === cpfOriginal;
}

console.log(isCpf('705.484.450-52'));
console.log(isCpf('070.987.720-03')); 
