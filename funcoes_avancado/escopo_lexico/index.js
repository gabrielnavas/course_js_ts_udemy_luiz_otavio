// Exemplo de escopo léxico, a função conhece todo o escopo dela e o global, neste exemplo

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

falaNome(); // Luiz

// Outro exemplo de escopo léxico
function usaFalaNome() {
    const nome = 'Gabriel'
    falaNome();
}
usaFalaNome(); // Gabriel



//  A função continua tendo o mesmo escopo léxico, mas pega a variável mais proima, pois tem duas variáveis em seu escopo.
const nome = 'Luiz';

function falaNome() {
    const nome = 'Gabriel'
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome(); // Gabriel