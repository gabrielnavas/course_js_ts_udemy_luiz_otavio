/*
    Operadores Lógicos

    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NÃO

*/


// AND
const estaFzdSol = true;
const estouFeliz = true;
const tenhoGrana = false;

console.log(estaFzdSol && estouFeliz); // true & true => true
console.log(estaFzdSol && tenhoGrana); // true & false =>true


// OR
console.log(estaFzdSol || estouFeliz); // true || true => true
console.log(estaFzdSol || tenhoGrana); // true || false => true
console.log(tenhoGrana || tenhoGrana); // false || false => false


// NOT
const usuario = 'Gabriel';
const senha = '123456';

const resultadoAND = usuario === true && !senha === true; // !true && !true => false
const resultadoOR = (!!usuario === true) || (!senha === true); // true || !true => true

console.log(resultadoAND);
console.log(resultadoOR);

/*
    Ao utilizar || (OR), ao encontrar uma expressão verdadeira, ela já é retornada, 
    não chega o resto da expressão
*/

console.log('Exemplos de negação');
console.log(!true); // false
console.log(!!true); // true
console.log(!!!true); // false
console.log(!!!!true); // true


