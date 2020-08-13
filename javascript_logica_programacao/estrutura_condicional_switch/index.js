const data = new Date('1987-03-24 00:00:00');
const diaSemana = data.getDay();


let diaSemanaString = null;

// Usando if, else if e else
if (diaSemana === 0) {
    diaSemanaString = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaString = 'Segunda-feira';
} else if (diaSemana === 2) {
    diaSemanaString = 'Terça-feira';
} else if (diaSemana === 3) {
    diaSemanaString = 'Quarta-feira';
} else if (diaSemana === 5) {
    diaSemanaString = 'Quinta-feira';
} else if (diaSemana === 6) {
    diaSemanaString = 'Sexta-feira';
} else {
    diaSemanaString = 'Sábado-feira';
}

console.log(diaSemana, diaSemanaString); // 2 Terça-feira


// Usando Switch/Case (nem curto usar switch/case)
switch (diaSemana) {
    case 0:
        diaSemanaString = 'Domingo';
        break; //serve para sair, se não ele analisa o próximo case.
    case 1:
        diaSemanaString = 'Segunda-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    case 2:
        diaSemanaString = 'Terça-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    case 3:
        diaSemanaString = 'Quarta-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    case 4:
        diaSemanaString = 'Quinta-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    case 5:
        diaSemanaString = 'Sexta-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    default:
        diaSemanaString = 'Sábado';
    //break; Aqui é opcional, já que o break é o útimo caso.
}

console.log(diaSemana, diaSemanaString); //2 Terça-Feira


// Usando uma função da pra eliminar a palavra break
function switchSemBreak(diaSemana) {
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

const diaSemanaRetornada = switchSemBreak(diaSemana);
console.log(diaSemana, diaSemanaString); //2 Terça-Feira