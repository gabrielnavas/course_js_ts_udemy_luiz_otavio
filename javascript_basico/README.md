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