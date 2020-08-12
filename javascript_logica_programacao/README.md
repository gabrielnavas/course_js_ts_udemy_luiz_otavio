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
