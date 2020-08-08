const date = new Date();

const nome = 'Gabriel Navas';
const horaCheia = date.getHours();

let periodo = '';
if(horaCheia > 5 && horaCheia < 12) {
    periodo = 'manhã';
} else if(horaCheia >= 12 && horaCheia < 18) {
    periodo = 'tarde';
} else if(horaCheia >= 18 && horaCheia <= 23 || horaCheia >= 0 && horaCheia <= 5) {
    periodo = 'noite';
}

const frase = 'Eu nome é ' + nome + '. Estou aprendendo JavasScript às ' + horaCheia + ' da ' + periodo + '.';

console.log(frase);