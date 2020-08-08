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