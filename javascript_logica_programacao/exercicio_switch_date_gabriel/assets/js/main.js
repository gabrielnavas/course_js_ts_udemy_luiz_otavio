(function dataHojeDiv() {

    function formatarData(data) {

        function getDiasemanaString(diaSemana) {
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

        function getMesString(diaSemana) {
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

        const dia = data.getDate();
        const diaSemana = data.getDay();
        const mes = data.getMonth();
        const ano = data.getFullYear();

        return `${getDiasemanaString(diaSemana)}, ${dia} de ${getMesString(mes)} de ${ano}`;
    }

    function montarHoraMinutoString(data) {
        return `${data.getHours()}:${data.getMinutes()}`;
    }

    function createH1WithContent(content) {
        const h1 = document.createElement('h1');
        h1.innerHTML = content;
        return h1;
    }

    function montar() {
        const divDataHoje = document.querySelector('.data_hoje');

        const dataAgora = new Date();

        const dataString = formatarData(dataAgora);
        const horaMinMinutoString = montarHoraMinutoString(dataAgora);

        const dataPorExtensoH1 = createH1WithContent(dataString);
        const horaMinPorExtensoH1 = createH1WithContent(horaMinMinutoString);

        divDataHoje.appendChild(dataPorExtensoH1);
        divDataHoje.appendChild(horaMinPorExtensoH1);
    }

    montar();
})();