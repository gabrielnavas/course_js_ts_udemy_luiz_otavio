## Básico para os iniciantes.


#### Console.log

```javascript

const numeroInteiro = 22; //number
const numeroFlutuante = 22.66; //number
const sequenciaCaracteres = 'Gabriel foi pescar'; //string

console.log('número inteiro: ', numeroInteiro);
console.log('número flutuante: ', numeroFlutuante);
console.log('sequência de caracteres (string): ', sequenciaCaracteres);

console.log('mostra tudo: ', numeroInteiro, numeroFlutuante, sequenciaCaracteres);
```


#### Exercício

* Mostrar na tela 'Meu nome é "NOME". Estou aprendendo JavaScript às 10 da manhã.
(ps: olhei no relógio quando escrevi isso, era 10:00 aqui no meu sistema. oO);


```javascript
const date = new Date();

const nome = 'Gabriel Navas';
const horaCheia = date.getHours();

let periodo = '';
if(horaCheia > 5 && horaCheia < 12) {
    periodo = 'manhã';
} else if(horaCheia >= 12 && horaCheia < 18) {
    periodo = 'tarde';
} else if(horaCheia >= 18 && horaCheia <= 23 || horaCheia >= 0 && horaCheia <= 5) {
    periodo = 'noite';
}

const frase = 'Eu nome é ' + nome + '. Estou aprendendo JavasScript às ' + horaCheia + ' da ' + periodo + '.';

console.log(frase);
```


#### Tipos de comentário no JS

```javascript
// sou um comentario

console.log('Hello World');

/* 
    Sou outro comentário 
    blablabla
*/

console.log('Hello World' /*de novo*/);
```


#### navegador vs node html + javascript

```javascript

```

#### variaveis


##### Tipos de declações

```javascript
let variavelQueMuda = 'gabriel';
variavelQueMuda = 'navas';

const variavelImutavel = 'joana';
// variavelImutavel = 'joão'; => assingment to const variable

// recomendado não utilizar.
var poucoUsada = 'valor'; 
```

##### Não podemos criar variaveis com palavras reservadas.

```javascript
let if; // => SyntaxError: Unexpected token 'if'.
const console; // pode dar problema ao decorrer da aplicação.
```

##### Não podemos criar variaveis iniciando um números.

```javascript
let 1nome = 10; // => SyntaxError: Unexpected token 'if'.
let nome1 = 10; // isso é permitido, já que não é iniciado com um número.
```

##### Não pode ter espaços nas variáveis.

```javascript
let variavel um;
let variavelUm; //isso é permitido. camelCase
```


##### Case-sensitive.

```javascript
let variavelum = 10;
let variavelUm = 20; //variavelum é diferente de variavelUm

console.log(variavelum); //10
console.log(variavelUm); //20
```


#### Constantes

##### Não é possível alterar valor de constantes.
```javascript
const sobrenome = 'Silva';
sobrenome = 'Castro'; //TypeError: Assignment to constant variable.
```

##### Fazendo contas

```javascript
// + - * /

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero + segundoNumero;

console.log(conta); // 15
```

#### Ver tipo de dado

```javascript
const souString = 'Gabriel';
const souNumber = 22;

console.log(typeof souString); // string
console.log(typeof souNumber); // number
```

#### Exercício let e const
##### Imprimir ano, idade, peso, altura e peso.

```javascript
const nome = 'Gabriel';
const idade = 27;
const altura = 1.85;
const peso = 75;
const IMC = peso/altura;

console.log(nome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg.');

// IMC.toFixed(2) é para ter apenas 2 números após a vírgula.
console.log('tem ' + altura +' de altura e seu IMC é de ' + IMC.toFixed(2) + '.');

```

##### Melhor Utilizar template string

```javascript
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, nasceu no ano de ${anoNascimento}`);
console.log(`tem ${alturaCentimetro} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}.`);
```

#### Usando o tipo var;

##### Não é aconselhável usar var, poís ela permite o declara quantas vezes quiser a mesma variável. 
```javascript
var nome = 'Gabriel';
var nome = 'Navas';
```

##### Não é aconselhável variável sem let ou const, (muito menos var), pois criará uma variavel global no sistema.
```javascript
variavelGlobal = 'sou Global';
```


#### Tipo de dados
```javascript
// String (sequência de caracteres)
const nome = 'Gabriel'; // string
const nome1 = 'Gabriel'; // string
const nome2 = 'Gabriel'; // string

// Numérico
const num1 = 10; // number
const num2 = 100.20; // number

// Não definido e nulo
let nomeAluno; // undefined
let nomeNulo = null; // aponta para null na memória

// Booleano
const verdade = true;
const falso = false;

console.log(typeof verdade); // boolean
```


#### Operadores, aritmeticos, incremento, atribuicao e conversores

##### Operadores Aritméticos 

```javascript
/*
    + Adição e Concatenação
    - Subtração
    * Multiplicação
    / Divisão
    ** Exponenciação
    % Resto da divisão
    =  atribuição
    ++ incrementa o valor e atribui o valor na variável 
    -- decrementa o valor e atribui o valor na variável 
    += incremento quando o valor é maior que 1 (+=  -=  /=  *=)
    NaN not a number
*/
```  

##### Prescedência de calculo.
```javascript
/*
    1. ()
    2. **
    3. * / %
    4. + -
*/
```

```javascript
// Concatenação número com string

const num1 = '5';
const num2 = 10;
console.log(num1 + num2);


// Soma de números

const num3 = 5;
const num4 = 10;
console.log(num3 + num4);


// Multiplicação e divisão de números

const num5 = 5;
const num6 = 10;
console.log(num5 * num6);
console.log(num5 / num6);

// Potenciação

const num7 = 2;
const num8 = 3;
console.log(num7 ** num8);

// Potenciação

const num9 = 10;
const num10 = 6;
console.log(num9 % num10); // => 10/6 sobra 4


// Qualquer tipo de cálculo.
console.log(num1+num2/num3);


// incremento e atribuição
let num11 = 50;
console.log(num11); //50
console.log(++num11); //51

// no caso se fosse num11++ seria printado na tela e depois iria ocorrer o incremento.
console.log(num11++); // 51
console.log(num11); // 52


// incremento maior que 1
num11 += 10;  // 62
console.log(num11); // 62


// not a number
const num12 = 10;
console.log(num12 * 'gabriel'); //NaN
console.log(num12 * '12'); // 120


// converter para inteiro
const variavelInt = '12';
const variavelFloat = '12.5';

const convertido = parseInt(variavelInt);s
const convertidoFloat = parseInt(variavelFloat);

// Number(numero) não tem distinção, se é float ou inteiro
console.log(Number('12.65'));

console.log('Convertido: ', convertido);
```

#### Alert, confirm e prompt

```javascript
    if(confirm('Deseja fazer conta?')) {
        
        const num1 = prompt('Digite um número.');
        const num2 = prompt('Digite outro número.');
        
        const conta = Number(num1) + Number(num2);
        
        alert(`Resultado: ${conta}`);
    }
```


#### Trocando valores de variáveis

##### Modo antigo 

```javascript
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const auxiliarA = varA;
varA = varB;
varB = varC;

varC = auxiliarA;

console.log(varA, varB, varC);
```

```javascript
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC); // B C A
```