// IIFE -> Immediately invoked function expression

// sem IIFE

function executaAlgumaTarefaSemIIFE() {
    console.log('tarefa 1');
}
executaAlgumaTarefaSemIIFE(); // tarefa 1


// com IIFE

(function executaComIIFE() {
    console.log('tarefa 2'); 
})(); // tarefa 2


// Outro exemplo, função anônima

((parametro1, parametro2, ...etc) => {
    console.log(parametro1); // 1
    console.log(parametro2); // 2
    console.log(etc); // [ 'Gabriel', 'Maça', 'Juca' ]
    console.log('sou uma IIFE usando uma funcao anônima')
})(1, 2, 'Gabriel', 'Maça', 'Juca');
