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



#### Strings

##### Usando aspas dentro de string

```javascript
let strComAspas1 = "Gabriel foi 'pescar'";
let strComAspas2 = "Gabriel foi \"pescar\"";

console.log(strComAspas1); // "Gabriel foi 'pescar'"
console.log(strComAspas2); // "Gabriel foi "pescar""
```

##### Fora do range da string
```javascript
console.log(strComAspas1[-1]); // undefined
console.log(strComAspas1[20]); // undefined

console.log(strComAspas1.charAt(-1)); // '' valor vazio
```

##### Pegando código referente a tabela ASCII
```javascript
console.log(strComAspas1.charCodeAt(1)); // a == 97 na tabela ASCII
```


##### Concatenar usando função de string
```javascript
console.log(strComAspas1.concat(' ', 'no', ' ', 'rio', '.')); // a == 97 na tabela ASCII

// use template string, é melhor. :)
```

##### Pegar o index (posição) que começa a palavra foi
```javascript
console.log(strComAspas1.indexOf('foi'));
console.log(strComAspas1.indexOf('agora')); // -1 agora não existe
```

##### Exemplo de expessão regular

```javascript
const arr = "Um texto legal".match(/[a-z]/g); //retorna um array de todas letra minúscula.
```

##### Substituição de palavras e letras

```javascript
console.log("uma frase legal".replace('legal', 'chata'));

// funciona usando expressão regular também.
console.log("uma frase legal".replace(/legal/, 'chata'));
```

##### Tamanho de uma string
```javascript
console.log("uma frase legal com tamanho :)".length);
```

##### Pegando pedaços de string

```javascript
//posição 1 até a 4
console.log("uma frase legal".slice(1, 5)); // ma f

// posição 1 até 5
console.log("uma frase legal".substr(1, 5)); //ma fr

// posição 1 ate 4
console.log("uma frase legal".substring(1, 5)); //ma f

// é possivel pegar invertido também
console.log("uma frase legal".slice(-5, -1)); // lega


// o slice escreve menos, veja o exemplo do substring
console.log("uma frase legal".substring("uma frase legal".length - 5, "uma frase legal".length - 1)); 
```

##### Dividir a string em pedaços

```javascript
"O rato roeu a roupa da rainha".split(' '); // ['O', 'rato', 'roeu', 'a', 'roupa', 'da', 'rainha']

// É possível exibir somente 2 palavras
"O rato roeu a roupa da rainha".split(' ', 2); // ['O', 'rato']
```


##### Maiúscula e minúscula

```javascript

// Maiúscula
console.log("sou uma frase em upper case".toUpperCase());

// Minúscula
console.log("sou uma frase em lower case".toLowerCase());
```


#### Mais sobre Numbers

##### Transformar number em string

```javascript
let num1 = 2; // number 
let num2 = 2; // number

console.log(num1.toString() + num2.toString()); // 22
console.log(typeof num1); //number
```

##### Transformar para binário, hex, octal, decimal

```javascript

// transformando para binario
let dez = 10;
let dezBin = 0b1010;
console.log(dez.toString(2)); // 1010
console.log(dezBin.toString(10)); // 10

// transformando para octal
let oito = 8;
let sete = 0o7;
console.log(oito.toString(8)); // 10
console.log(sete.toString(10)); // 7

// transformando para hexa
let quinze = 15;
console.log(quinze.toString(16)); // f

// transformando para decimal
let hexaDez = 0XA;
console.log(hexaDez.toString(10)); // 10
```

##### Alterando casas decimais

```javascript
const placaDeVideo = 2000.88888;
const precoFixed2GPU = placaDeVideo.toFixed(2); 
console.log(precoFixed2GPU); // 2000.89
```

##### Verificando tipo Number (Padrão IEEE 754-2008)

```javascript

//tipo number
const numero = 25;
console.log(Number.isInteger(numero)); //true

const numeroTalvez = '25';
console.log(Number.isInteger(numeroTalvez)); //false

// tipo NaN
const conta = numero * 'Olá';
console.log(conta); //NaN
console.log(Number.isNaN(conta)) // true


// Imprecisões
let num3 = 0.7;
let num4 = 0.1;

num3 += num4; // 0.7999999999999999

console.log(num3);// 0.7999999999999999
console.log(num3.toFixed(2));// 0.80

console.log(typeof (num3.toFixed(2) + 1));// string

// pra ter segurança utilize to fixed e number
console.log(Number(num3.toFixed(2)) + 1);// 1.8

//ou
                
const resultado = ((num3 * 100 ) + (num4 * 100)) / 100;
console.log(resultado); // 0.9
```

#### Objeto Math


##### Arredondamento

```javascript
let num1 = 9.4323;

// Arredondar para baixo
let praBaixo = Math.floor(num1);
console.log(praBaixo);

// Arredondar para cima
let praCima = Math.ceil(num1);
console.log(praCima);


// Arredondar para o mais próximo
console.log(Math.round(9.5)); //10
console.log(Math.round(9.35)); //9
console.log(Math.round(9.65)); //10
```

##### Máximo, Mínimo

```javascript
// máximo da sequência (pega o maior número, o max)
console.log(Math.max(5, 6, 2, 3, 7, 9, 55)); // 55

// mínimo da sequência (pega o menor número, o max)
console.log(Math.min(5, 6, 2, 3, 7, 9, 55)); // 2
```

##### Números aleatórios

```javascript
// número aleatório entre 0 e 0.99999999999999999
console.log(Math.random()); // 0.0...0.99999999999999999

//número aleatório entre 0 e 9.99999999
console.log(Math.random() * 10);

//número aleatório entre 5.000000 e 9.99999999
console.log(Math.random() * (10-5) + 5);

//número aleatório entre 5.000000 e 99.99999999
console.log(Math.random() * (100-5) + 5);
```

##### Números constantes e funcoes prontas

```javascript
console.log( Math.pow(2, 10) ); // 2 elevado a 10 = 1024

console.log( Math.sqrt(100) ); //raiz quadrada de 100 = 10 
console.log( 100 ** (1/2) ); // cem elevado a meio = 10

console.log( Math.PI ); // PI = 3.141592653589793
```

##### É possível dividir por 0 em JS (CUIDADO) ou quando o número é grande demais

```javascript
const valor = 100 / 0;
console.log(valor); // Infinity
console.log(!!valor === true); // é true (CUIDADO COM ISSO), números dividido por 0 em JS retorna true


// Quando o número é muito grande, pode retornar infinity também
console.log(100 / 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001); //Infinity
```


#### Arrays

##### Acessando posições do array

```javascript
const alunos = ['Luiz', 'Maria', 'João'];
const muitasCoisas = ['Gabriel', true, [1, 2, 3], 4.55]; 


console.log(alunos); // [ 'Luiz', 'Maria', 'João' ]
console.log(muitasCoisas); // [ 'Gabriel', true, [ 1, 2, 3 ], 4.55 ]

console.log(alunos[2]); // 'João'

// Acessando posição do elemento do array
console.log(alunos[2][1]); // 'o'
```

##### Mudar e adicionar elementos

```javascript
alunos[2] = 'Ricardo';
alunos[3] = 'Luiza';
alunos[alunos.length] = 'Joaquina';
alunos[alunos.length] = 'Miguel';
alunos[alunos.length] = 'Rafael';

console.log(alunos); //[ 'Luiz', 'Maria', 'Ricardo', 'Luiza' ]
```

#### Adicionando usando funções 


```javascript

// Adicionar no final
alunos.push('Juquinha');
alunos.push('Fábio');

console.log(alunos);
alunos.push('Juquinha');
alunos.push('Fábio');

console.log(alunos);
/*
[
  'Luiz',     'Maria',
  'Ricardo',  'Luiza',
  'Joaquina', 'Juquinha',
  'Fábio'
] */

// Adicionar no inicio, devo mover todos os elementos para frente ou
alunos.unshift('Larissa');
console.log(alunos);
/*
[
  'Larissa',  'Luiz',
  'Maria',    'Ricardo',
  'Luiza',    'Joaquina',
  'Juquinha', 'Fábio'
]
*/
```

##### Remover elementos do final do array 

```javascript
const elementoRemovido = alunos.pop();
console.log(elementRemovido); // 'Fábio'
console.log(alunos);
/*
[
    'Larissa',  'Luiz',
    'Maria',    'Ricardo',
    'Luiza',    'Joaquina',
    'Juquinha'
]
*/
```

##### Remover elemento do início do array

```javascript
// Remove do início
const elementoInicio = alunos.shift();
console.log(elementoInicio); // Larissa
console.log(alunos); // [ 'Luiz', 'Maria', 'Ricardo', 'Luiza', 'Joaquina', 'Juquinha' ]
```

##### Remover elemento de uma posição
```javascript
const carros = ['Ferrari', 'Fusca', 'Gol', 'Saveiro', 'Pampa'];

// dessa forma é ruim
delete carros[1];
console.log(carros); //[ 'Ferrari', <1 empty item>, 'Gol', 'Saveiro', 'Pampa' ]

// Assim é melhor
const indexRemover = carros.indexOf('Gol');
carros.splice(indexRemover, 1); //[ 'Ferrari', <1 empty item>, 'Saveiro', 'Pampa' ]
console.log(carros);
```

##### Fatiar o array em elementos

```javascript
// Fatiar, não altera o array, apenas retorna a fatia
console.log(alunos.slice(2, 3)); // [ 'Ricardo' ]
```

##### Tipo do array

```javascript 
// array em JS é um objeto
console.log(typeof carros); //object

// E também é um array
console.log(carros instanceof Array); //true
```

#### Funções (basica)

##### Mesma regras de nomeação das váriaveis

###### Exemplo de criação e chamada

```javascript
//Criando uma função
function saudacao() {
    console.log('Olá');
}

// Chamando a função
saudacao();
saudacao();
```

###### Parâmetros 

```javascript
function saudacaoComParametro(nome, periodo) {
    console.log(`Olá ${nome}, tenha ${periodo}`);
}

saudacaoComParametro('Gabriel', 'um bom dia');
```

###### Retorno de função 

```javascript
// Retornando valores
function saudacaoComParametroERetorno(nome, periodo) {
    return `Olá ${nome}, tenha ${periodo}`;
}

//retorno da frase
const frase = saudacaoComParametroERetorno('João', 'uma ótima noite');
console.log(frase);
```

###### Escopo

```javascript
// Escopo 
function exemploDeEscopo(x, y) {
    const multiplicacao = x * y;
    return multiplicacao;
}

console.log(multiplicacao); //multiplicacao is not defined
```

###### Omitir parâmetros

```javascript
function calculoSoma(x, y) {
    return x + y;
}

console.log(calculoSoma()); // NaN
```


###### Adicionando lógica na função 

```javascript
function funcaoComLogica(x, y) {
    if(!Number.isInteger(x) || !Number.isInteger(y)) {
        return NaN;
    }
    return x + y;
}

console.log(funcaoComLogica('gab', 2));
```

###### Adicionando valor padrão em parametro
```javascript

// Adicionando valor padrão
function funcaoParamPadrao(x=2, y=3) {
    return x + y;
}

console.log(funcaoParamPadrao(1)); //4
```

###### Passando uma função como parametro

```javascript
function calculaDentro(x=2, y=3) {
    console.log(x + y);
}

function exibirFuncao(funcao) {
    calculaDentro(2, 3); //5
}

exibirFuncao(calculaDentro); //5
```

###### Função Arrow

```javascript
// Função flecha (arrow function)
const funcaoArrow = () => {
    return 'Sou uma arrow function.';
}

// se tiver somente uma linha, pode-se fazer assim
const funcaoSemChave = () => 'Sou uma funcao sem chave.';

console.log(funcaoArrow());
console.log(funcaoSemChave());

// mais um exemplo, usando cálculo de potência
const calculoArrow = (x=2, y=10) => x ** y;
console.log(calculoArrow(2)); //1024

// quando tem apenas um pararâmetro, não precisa de parenteses na declaração
const apenasUmParametro = numero => numero * 2;
console.log(apenasUmParametro(4)); // 8
```
