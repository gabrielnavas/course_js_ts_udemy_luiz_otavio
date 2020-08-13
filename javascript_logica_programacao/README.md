### Operadores de comparação.

```javascript
/*
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) ******** não utilize
=== igualdade estrito (valor e tipo)
!= diferente ******* não utilize
!=== diferente estrito (valor e tipo)
*/
```

#### Exemplos

```javascript

const numero1 = 10;
const numero2 = 5
const numeroString = '5';

console.log(numero1 > numero2); // true
console.log(numero1 <= numero1); // true
console.log(numero2 == numeroString); // true
console.log(numero1 === numeroString); // false
console.log(numero1 !== numeroString); // true
console.log(numero1 != numeroString); // false
 
```

### Operadores lógicos

```javascript
/*
    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NÃO
*/
```

##### Operador AND (todas expressões precisam ser verdadeiras para retornar true)

```javascript
const estaFzdSol = true;
const estouFeliz = true;
const tenhoGrana = false;

console.log(estaFzdSol && estouFeliz); // true
console.log(estaFzdSol && tenhoGrana); // false
```

##### Operador OR (Apenas uma expressões precisam ser verdadeira para retornar true)

```javascript
const estaFzdSol = true;
const estouFeliz = true;
const tenhoGrana = false;

console.log(estaFzdSol || estouFeliz); //true
console.log(estaFzdSol || tenhoGrana); //true
```

##### Operador NOT

```javascript

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
```

###### Mais exemplos de negação

```javascript

console.log(!true); // false
console.log(!!true); // true
console.log(!!!true); // false
console.log(!!!!true); // true
```

#### Avaliacao curto ciruito

##### && -> false && true -> false
##### || -> false || true -> true

```javascript
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
```


##### Em JS tudo pode ser avalido em true (TRUTHY) ou false (FALSY)

```javascript
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
```

##### Curto-circuito usando o AND:

```javascript
function souUmaFuncao() {
    console.log('olá');
}

const receboUmaFuncao = true && souUmaFuncao;
const receboUmFalse = false && souUmaFuncao;

console.log(receboUmaFuncao); // [Function: souUmaFuncao]
console.log(receboUmFalse); //false
```

##### Curto-circuito usando o OR: 

```javascript
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
```


##### Outro exemplo de truthy e falsy

```javascript
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
```


## if, else if e else

#### Exemplo com if, else if

```javascript
const hora = 12;

if (hora <= 12) {
    console.log('Bom dia'); //Bom dia
}

if (hora < 12) {
    console.log('Bom dia');
} else if(hora <= 12) {
    console.log('Bom dia'); //Bom dia
}
```

#### Exemplo com if, else if e else 

```javascript
const nome = 'Gabriel'
if('Gabriel' !== nome) {
    console.log('os nomes são iguais')
} else if('Gab' === nome) {
    console.log('Gab é igual que a variável nome')
} else {
    console.log('você entrou no else pois nenhuma das opções foi verdadeiras (true)');
}
```

#### É possível utilizar intervalos também

```javascript
if(6 > 1 && 6 < 12) {
    console.log('Seis é maior que um e 6 é menor que doze');
}
```


#### Exercício de IMC GABRIEL, Gif de como ficou

![alt-text](https://github.com/gabrielnavas/course_js_ts_udemy_luiz_otavio/blob/master/javascript_logica_programacao/tabela_imc_gabriel/usando.gif)