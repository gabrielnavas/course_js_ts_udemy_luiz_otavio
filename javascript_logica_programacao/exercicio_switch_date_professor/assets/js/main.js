
//////////////////////////////////////////////////////////////////////////////////////////
//                               JEITO MAIS COMPLICADO                                  //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////

/*

const h1 = document.querySelector('.container h1');
const data = new Date();


function getDiaSemana(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta-Feira';
        default:
            return 'Sábado';
    }
}

function getNomeMes(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'janeiro';
        case 1:
            return 'fevereiro';
        case 2:
            return 'março';
        case 3:
            return 'abril';
        case 4:
            return 'maio';
        case 5:
            return 'junho';
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        case 8:
            return 'setembro';
        case 9:
            return 'outubro';
        case 10:
            return 'novembro';
        default:
            return 'dezembro';
    }
}

function zeroAEsquerda(numero) {
    return numero < 10 ?
        `0${numero}` : numero.toString();
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemana(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
        `de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}

h1.innerHTML = criaData(data);

*/



//////////////////////////////////////////////////////////////////////////////////////////
//                               Como o professor faria se não tivesse                  //
//                               o options ali em baixo                                 //
//////////////////////////////////////////////////////////////////////////////////////////

/*

const h1 = document.querySelector('.container h1');
const data = new Date();


function getDiaSemana(diaSemana) {
    const diasSemana = [
        'Domingo', 'Segunda-Feira', 'Terça-Feira',
        'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
    ];
    return diasSemana[diaSemana];
}

function getNomeMes(diaSemana) {
    const meses = [
        'janeiro', 'fevereiro', 'março',
        'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro',
        'outubro', 'novembro', 'dezembro'
    ];

    return meses[diaSemana];
}

function zeroAEsquerda(numero) {
    return numero < 10 ?
        `0${numero}` : numero.toString();
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemana(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
        `de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}

h1.innerHTML = criaData(data);

*/


//////////////////////////////////////////////////////////////////////////////////////////
//                               JEITO MAIS PRODUTIVO, MUITO MELHOR                     //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////


const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    minute: ('numeric' || '2-digit'),
    hour: ('numeric' || '2-digit'),
    day: ('numeric' || '2-digit'),
    weekday: ('long'),
    month: ('long'),
    year: ('numeric'),
}

h1.innerHTML = data.toLocaleDateString('pt-br', opcoes);