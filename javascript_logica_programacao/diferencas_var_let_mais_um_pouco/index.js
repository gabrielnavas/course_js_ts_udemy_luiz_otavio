// Mais diferencas entre var e let

let nome = 'Gabriel';
// let nome = 'Gabriel'; //SyntaxError: Identifier 'nome' has already been declared

// redeclarando várias vezes usando var
var nome2 = 'Navas 1';
var nome2 = 'Navas 2';
var nome2 = 'Navas 3';
var nome2 = 'Navas 4';

console.log(nome2);

//outro escopo com let
const verdade = true;

if (verdade) {
    let nome = 'sou outro escopo';
    var nome2 = 'Navas 5';
    // let nome = 'Gabriel'; //SyntaxError: Identifier 'nome' has already been declared
    console.log(nome);

    if (verdade) {
        let nome = 'sou outro escopo dentro de outro escopo';
        var nome2 = 'Navas 6';
        console.log(nome);

        if (verdade) {
            let nome = 'sou outro escopo dentro de outro escopo, dentro de outro escopo';
            var nome2 = 'Navas 7';
            console.log(nome);
        }
    }
}

console.log(nome, nome2); // Gabriel Navas 7

function falaOi() {
    var nome3 = 'To dentro da função'
}

// console.log(nome3); //ReferenceError: nome3 is not defined

falaOi()


// Hoisting
console.log(varDeclaradaDepois); //undefined
// console.log(letDeclaradaDepois); //ReferenceError: Cannot access 'letDeclaradaDepois' before initialization

var varDeclaradaDepois = 'Gabriel var';
let letDeclaradaDepois = 'Gabriel let';
