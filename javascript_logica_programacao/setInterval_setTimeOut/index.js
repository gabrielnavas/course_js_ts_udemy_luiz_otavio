//uma função que será executada
function mostraMsg() {
    console.log('Olá');
}

//tempo do intervado da execução
const tempoEmMilissegundos = 1000;

// chamar a função com o tempo de execução
setInterval(mostraMsg, tempoEmMilissegundos);

// A cada 1 segundo (1000 milissegundos) será chamado a funcao mostraMsg no console 




// Fazendo o SetInterval parar

//tempo do intervado da execução
const tempoEmMilissegundos = 1000;
const tempoDeParada = 5000;

function funcaoQueSeraChamada() {
    console.log('Olá');
}

// chamar a função com o tempo de execução
const timer = setInterval(funcaoQueSeraChamada, tempoEmMilissegundos);

setTimeout(function() {
    clearInterval(timer);
}, tempoDeParada);


// Exemplo de setTimeout
const tempoDeEspera = 3000; // 3 segundos

setTimeout(function() {
    console.log('Passou 3 segundos.');
}, tempoDeEspera);