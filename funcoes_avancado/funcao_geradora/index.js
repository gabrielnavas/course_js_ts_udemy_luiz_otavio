function* geradora1() {
    const codigoQualquer1 = 1;
    yield 'valor 1';
    const codigoQualquer2 = 2;
    yield 'valor 2';
    const codigoQualquer3 = 3;
    yield 'valor 3';
}

const g1 = geradora1();

for (let valor of g1) {
    console.log(valor);
}
/*
valor 1
valor 2
valor 3
*/


// Geradora infinita

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();

console.log(g2.next().value); // 0
console.log(g2.next().value); // 1
console.log(g2.next().value); // 2
console.log(g2.next().value); // 3
console.log(g2.next().value); // 4
console.log(g2.next().value); // 5


// Gerando para outra geradora
function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let valor of g4) {
    console.log(valor);
}

/*
0
1
2
3
4
5
*/


// Executar várias tarefas

function primeiraEtapa() {
    console.log('Primeira etapa finalizada');
}

function segundaEtapa() {
    console.log('Segunda etapa finalizada');
}

function terceiraEtapa() {
    console.log('Terceira etapa finalizada');
}

function quartaJaExecutando() {
    return 'quarta etapa finalizada';
}

function* executaEtapas() {
    yield primeiraEtapa;
    yield segundaEtapa;
    yield terceiraEtapa;
    yield quartaJaExecutando();
    yield* quartaJaExecutando(); //retorna caracter por caracter
}

const etapas = executaEtapas();

for(let etapa of etapas) {
    if(typeof etapa === 'function') etapa();
    else console.log(etapa);
}


// Usando retorn junto

function* geradoraComReturn() {
    yield 'Palavraaaao';
    yield* 'Palavraaaao'; // retorna caracter por caracter
    return 10; // não é retornado
    yield* 'Palavraaaao';
}

const gComReturn = geradoraComReturn();

for(let gerado of gComReturn) {
    console.log(gerado);
}

/*
Palavraaaao
P
a
l
a
v
r
a
a
a
a
o
*/