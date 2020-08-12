/*
    && -> false && true -> false
    || ->
*/

//'Gabriel Navas' é true, true é true, false é false
console.log('Gabriel Navas' && true && false); 
/*
Ou seja, todos valores são true, como o ultimo é false, ele torna o false 
*/


console.log('João' && 0 && 89); // retorna 0
/*
    Pois 'João' é um valor true, quando ele verifica o 0, é um valor false, 
    é parado a verificação e retornado aquele valor. 
*/


// Em JS tudo pode ser avalido em true (TRUTHY) ou false (FALSY)

// Exemplos de falsy
console.log( false );
console.log( !!0 );
console.log( !!'' );
console.log( !!"" );
console.log( !!`` );
console.log( !!null );
console.log( !!undefined );
console.log( !!NaN );

// Exemplos de truthy
console.log(!!true);
console.log(!!{});
console.log(!![]);
console.log(!!42);
console.log(!!"foo");
console.log(!!new Date());
console.log(!!-42);
console.log(!!3.14);
console.log(!!-3.14);
console.log(!!Infinity);
console.log(!!-Infinity);
console.log(!!function() {});



// Curto-circuito usando o AND

function souUmaFuncao() {
    console.log('olá');
}

const receboUmaFuncao = true && souUmaFuncao;
const receboUmFalse = false && souUmaFuncao;

console.log(receboUmaFuncao); // [Function: souUmaFuncao]
console.log(receboUmFalse); //false


// Curto-circuito usando o OR

function souOutraFuncao() {
    console.log('fui executado');
}

const valorVerdadeiro = true;
const valorFalso = false;

/*
valor falso nem chega a ser verificado, 
já que souOutraFuncao retorna uma funcao, e uma função é true 
(!!function() {}) => true
*/

const executo = valorFalso || souOutraFuncao || valorFalso;

if(typeof executo === 'function') {
    executo(); //fui executado
}



// Outro exemplo de truthy e falsy
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // NaN

