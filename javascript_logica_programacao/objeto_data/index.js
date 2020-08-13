
// Link da Documentação
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data = new Date();
console.log(data); //2020-08-13T20:24:08.923Z


// Marco inicial
const data2 = new Date(0);
console.log(data2.toString()); //Wed Dec 31 1969 21:00:00 GMT-0300 (Brasilia Standard Time)


// Alguns atributos do objeto Date
const ano = data.getFullYear();
const dia = data.getDay();
const mes = data.getMonth();
const hora = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();
const milissegundos = data.getMilliseconds();
const numeroDaSemana = data.getDay();

console.log(ano); //2020
console.log(dia); // 4
console.log(numeroDaSemana); // 4 (0...6)
console.log(mes); // 7 (0...11)  
console.log(hora); // 17
console.log(minutos); // 58
console.log(segundos); // 32 (0...59)
console.log(milissegundos); // 516


// Montando a data, parâmetro por parâmetro
const dataParams = new Date(ano, mes, dia, hora, minutos, segundos, milissegundos);
console.log(dataParams); // 2020-08-04T21:13:17.039Z


// Montando a data, passando uma string
const dataPorString = new Date('2020-05-03 13:15:59');
console.log(dataParams); //2020-08-04T21:16:13.157Z


// Montando a data usando milissegundos
const milissegundosDeAgora = 1597354370861;
const hojeEmMilissegundos = new Date(milissegundosDeAgora);


//comparações de datas
const umDiasEmMilis = 60 * 60 * 24 * 1000;
const hojeEmMilis = Date.now();

const amanha = new Date(hojeEmMilis + umDiasEmMilis);

if (Date.now() < amanha) {
    console.log('Sim, hoje é antes que amanhã.');
    console.log(`Amanhã é ${amanha.toString()}`);
}

// Exemplo, é possível criar uma função para formatar uma data
function formatarData(date) {

    const meses = [
        'janeiro', 'fevereiro', 'março',
        'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro',
        'novembro', 'dezembro'
    ]

    function zeroAEsquerda(numero) {
        return numero < 10 ?
            `0${numero}` : numero.toString();
    }

    function formatarComZeroEsquerda(dia, mes) {
        const diaFormatado = zeroAEsquerda(dia);
        const mesPorExtenso = meses[mes];

        return {
            dia: diaFormatado,
            mes: mesPorExtenso
        }
    }

    const dia = date.getDay();
    const mes = date.getMonth();
    const ano = date.getFullYear();

    const mesDiaFormatado = formatarComZeroEsquerda(dia, mes);

    return `Hoje é dia ${mesDiaFormatado.dia} do mês de ${mesDiaFormatado.mes}, ano de ${ano}.`;
}

const msgDate = formatarData(new Date());
console.log(msgDate); // Hoje é dia 04 do mês de agosto, ano de 2020.