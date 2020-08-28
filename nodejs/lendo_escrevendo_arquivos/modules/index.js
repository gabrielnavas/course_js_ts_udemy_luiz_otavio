const escreve = require('./escreve');
const ler = require('./le')

const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'texto.txt');


const pessoas = [
    { id: 1, nome: 'Gabriel' },
    { id: 2, nome: 'Navas' },
    { id: 3, nome: 'João' },
    { id: 4, nome: 'Maria' },
];

const jsonPessoas = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, jsonPessoas, 'w');

(async () => {
    const txt = await ler(caminhoArquivo);
    const jsonParsed = JSON.parse(txt);
    console.log(jsonParsed);
})();