// Exemplo com if e else if
const hora = 12;

if (hora <= 12) {
    console.log('Bom dia'); //Bom dia
}

if (hora < 12) {
    console.log('Bom dia');
} else if(hora <= 12) {
    console.log('Bom dia'); //Bom dia
}

// Exemplo com if, else if e if
const nome = 'Gabriel'

if('Gabriel' !== nome) {
    console.log('os nomes são iguais')
} else if('Gab' === nome) {
    console.log('Gab é igual que a variável nome')
} else {
    console.log('você entrou no else pois nenhuma das opções foi verdadeiras (true)');
}


// É possível utilizar intervalos também

if(6 > 1 && 6 < 12) {
    console.log('Seis é maior que um e 6 é menor que doze');
}