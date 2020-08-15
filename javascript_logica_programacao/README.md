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


## Operador ternário

```javascript
// condicao ? a : b;

const pontuacaoUsuario = 999;

const tipoUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuário Comum'; 
```

##### Setando um valor padrão

```javascript
//Setando valor padrão
const corUsuario = null;
const corPadrao = corUsuario || 'Rosa';
console.log(corPadrao); // Rosa
```


##### Um pouco mais complexo, um ternário dentro de outro ternário

```javascript
const tipoUsuarioComplexo = pontuacaoUsuario > 1000 ?
    'Usuário vip' :
    pontuacaoUsuario === 999 ?
        'Esse user é 999' :
        'Esse user não é 999';

console.log(tipoUsuarioComplexo); // Esse user é 999
```


## Objeto Data

###### Documentação
![Link da documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)
 

##### Exemplo básico
```javascript
const data = new Date();
console.log(data); //2020-08-13T20:24:08.923Z
```

##### Marco inicial do Objeto Date, é o timestamp unix ou época unix
```javascript
const data = new Date(0);
console.log(data.toString()); //Wed Dec 31 1969 21:00:00 GMT-0300 (Brasilia Standard Time)
```

##### Alguns atributos do objeto Date

```javascript 
// Alguns atributos do objeto Date
const ano = data.getFullYear();
const dia = data.getDay();
const mes = data.getMonth();
const hora = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();
const milissegundos = data.getMilliseconds();
const numeroDaSemana = data.getDay();

console.log(ano); //2020
console.log(dia); // 4
console.log(numeroDaSemana); // 4 (0...6)
console.log(mes); // 7 (0...11)  
console.log(hora); // 17
console.log(minutos); // 58
console.log(segundos); // 32 (0...59)
console.log(milissegundos); // 516
```


##### É possível montar o objeto Date, parâmetro por parâmetro

```javascript
const dataParams = new Date(ano, mes, dia, hora, minutos, segundos, milissegundos);
console.log(dataParams); // 2020-08-04T21:13:17.039Z
```

##### É possível montar o objeto Date também, passando uma string

```javascript
const dataPorString = new Date('2020-05-03 13:15:59');
console.log(dataParams); //2020-08-04T21:16:13.157Z
```


##### Montando a data usando milissegundos

```javascript
const milissegundosDeAgora = 1597354370861;
const hojeEmMilissegundos = new Date(milissegundosDeAgora);
```


##### comparações de datas

```javascript
const umDiasEmMilis = 60 * 60 * 24 * 1000;
const hojeEmMilis = Date.now();

const amanha = new Date(hojeEmMilis + umDiasEmMilis);

if(Date.now() < amanha) {
    console.log('Sim, hoje é antes que amanhã.');
    console.log(`Amanhã é ${amanha.toString()}`);
} 
```

##### Exemplo, é possível criar uma função para formatar uma data

```javascript
function formatarData(date) {

    const meses = [
        'janeiro', 'fevereiro', 'março',
        'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro',
        'novembro', 'dezembro'
    ]

    function zeroAEsquerda(numero) {
        return numero < 10 ?
            `0${numero}` : numero.toString();
    }

    function formatarComZeroEsquerda(dia, mes) {
        const diaFormatado = zeroAEsquerda(dia);
        const mesPorExtenso = meses[mes];

        return {
            dia: diaFormatado,
            mes: mesPorExtenso
        }
    }

    const dia = date.getDay();
    const mes = date.getMonth();
    const ano = date.getFullYear();

    const mesDiaFormatado = formatarComZeroEsquerda(dia, mes);

    return `Hoje é dia ${mesDiaFormatado.dia} do mês de ${mesDiaFormatado.mes}, ano de ${ano}.`;
}
const msgDate = formatarData(new Date());
console.log(msgDate); // Hoje é dia 04 do mês de agosto, ano de 2020.
```

## Estrutura condicional Switch/Case


##### Exemplo, usando a estrutura condicional if, else if e else
```javascript
const data = new Date('1987-03-24 00:00:00');
const diaSemana = data.getDay();

let diaSemanaString = null;

if(diaSemana === 0 ) {
    diaSemanaString = 'Domingo';
} else if(diaSemana === 1) {
    diaSemanaString = 'Segunda-feira';
} else if(diaSemana === 2) {
    diaSemanaString = 'Terça-feira';
} else if(diaSemana === 3) {
    diaSemanaString = 'Quarta-feira';
} else if(diaSemana === 5) {
    diaSemanaString = 'Quinta-feira';
} else if(diaSemana === 6) {
    diaSemanaString = 'Sexta-feira';
} else {
    diaSemanaString = 'Sábado-feira';
}

console.log(diaSemanaString); // Terça-feira
```


##### Usando Switch/Case

```javascript
let diaSemanaString = null;

switch (diaSemana) {
    case 0:
        diaSemanaString = 'Domingo';
        break; //serve para sair, se não ele analisa o próximo case.
    case 1:
        diaSemanaString = 'Segunda-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    case 2:
        diaSemanaString = 'Terça-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    case 3:
        diaSemanaString = 'Quarta-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    case 4:
        diaSemanaString = 'Quinta-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    case 5:
        diaSemanaString = 'Sexta-Feira';
        break; //serve para sair, se não ele analisa o próximo case.
    default:
        diaSemanaString = 'Sábado';
        //break; Aqui é opcional, já que o break é o útimo caso.
}

console.log(diaSemana, diaSemanaString); //2 Terça-Feira
```


##### Usando uma função da pra eliminar a palavra break

```javascript
function switchSemBreak(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta-Feira';
        default:
            return 'Sábado';
    }
}

const diaSemanaRetornada = switchSemBreak(diaSemana);
console.log(diaSemana, diaSemanaString); //2 Terça-Feira
```

## Exercício Switch/Case

![Imagem do resultado](https://github.com/gabrielnavas/course_js_ts_udemy_luiz_otavio/blob/master/javascript_logica_programacao/exercicio_switch_date_gabriel/img_exercicio_switch_case_gabriel.png)

## Mais diferencas entre var e let

### let tem escopo de bloco
### var tem escopo de função

##### Não posso ter variáveis declaradas duas vezes usando o let

```javascript
let nome = 'Gabriel';
// let nome = 'Gabriel'; //SyntaxError: Identifier 'nome' has already been declared
```

##### Usando var, posso redeclarar quantas vezes eu quiser

```javascript
var nome2 = 'Navas 1';
var nome2 = 'Navas 2';
var nome2 = 'Navas 3';
var nome2 = 'Navas 4';

console.log(nome2); //Navas 4
```

##### Posso redeclarar com let em outro escopo com sem problemas

```javascript
const verdade = true;

if(verdade) {
    let nome = 'sou outro escopo';
    console.log(nome);

    if(verdade) {
        let nome = 'sou outro escopo dentro de outro escopo';
        console.log(nome);
        
        if(verdade) {
            let nome = 'sou outro escopo dentro de outro escopo, dentro de outro escopo';
            console.log(nome);
        }
    }
}
```

##### Var é pego o ultimo declarado, independente do escopo

```javascript
let nome = 'Gabriel';
var nome2 = 'Navas 1';
var nome2 = 'Navas 2';
var nome2 = 'Navas 3';
var nome2 = 'Navas 4';

const verdade = true;

if (verdade) {
    let nome = 'sou outro escopo';
    var nome2 = 'Navas 5';

    if (verdade) {
        let nome = 'sou outro escopo dentro de outro escopo';
        var nome2 = 'Navas 6';

        if (verdade) {
            let nome = 'sou outro escopo dentro de outro escopo, dentro de outro escopo';
            var nome2 = 'Navas 7';
        }
    }
}

console.log(nome, nome2); // Gabriel Navas 7
```

## Hoisting

```javascript
console.log(varDeclaradaDepois); //undefined
// console.log(letDeclaradaDepois); //ReferenceError: Cannot access 'letDeclaradaDepois' before initialization

var varDeclaradaDepois = 'Gabriel var';
let letDeclaradaDepois = 'Gabriel let';
```

## Atribuição via desestruturação

```javascript
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

// atribuicão novamente em a, b, c, desestruturando b, c, a em a, b, c
[a, b, c] = [b, c, a];
console.log(a, b, c); //B C A

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;
console.log(a, b, c); //B C A
```

#### Um outro exemplo

```javascript

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero] = numeros;

console.log(primeiroNumero, segundoNumero); // 1000 2000
```

#### Pegando o resto dos números (rest operator)

###### ...rest => resto
###### ...spread => espalhar

```javascript
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero); // 1000 2000 3000
console.log(resto); // [ 4000, 5000, 6000, 7000, 8000, 9000 ]
```

###### Pegando apenas alguns valores do array (alguem usa isso? rsrs)

```javascript

const nomes = ['Gabriel', 'Rafael', 'João', 'Ana', 'Fátima'];
const [primeiroNome, , terceiroNome, , quintoNome] = nomes;

console.log(primeiroNome, terceiroNome, quintoNome); // Gabriel João Fátima
```


###### Complicando um pouco 

```javascript
const numerosArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

const [, [,,seis]] = numerosArray;
console.log(seis); // 6
```

##### Setando valor padrao na desestruturação de array

```javascript
const valores = ['Valor 1', undefined, 'Valor 3', 'Valor 4'];

const [, segundoValor = 'Valor 2'] = valores;
console.log(segundoValor); // Valor 2
```


##### Desestruturação de array não é ponteiros, os valores são cópias

```javascript
const carros = ['Fusca', 'Gol', 'Ferrari'];
let [fuscao] = carros;

fuscao = 'Fusquete';
console.log(carros[0]); // Fusca
console.log(fuscao); // Fusquete
```




## Atribuição via desestruturação de Objeto

```javascript
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Navas',
    idade: 27,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    },
};

const { nome } = pessoa;
console.log(nome); // Gabriel
```

##### Setar valor padrão na desestruturação de um atributo não atribuido do objeto 

```javascript
const pessoa = {
    nome: undefined,
    sobrenome: 'Navas',
    idade: 27,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    },
};

const { nome = 'Jão', sobrenome } = pessoa;
console.log(nome, sobrenome); // Gabriel
```

###### Dando um alias para uma variável desestruturada de uma objeto 

```javascript
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Navas',
    idade: 27,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    },
};

const { nome: n } = pessoa;
console.log(n); // 'Maria'
```


##### É possível colocar um valor padrão em apelidos de variáveis não definidas  

```javascript
const pessoa = {
    nome: undefined,
    sobrenome: 'Navas',
    idade: 27,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    },
};


const { nome: n = 'Outro Valor' } = pessoa;
console.log(n); // 'Maria'
```


##### Desestruturacao é feito uma cópia do valor, não é ponteiro

```javascript
const pessoa = {
    nome: undefined,
    sobrenome: 'Navas',
    idade: 27,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    },
};

nome = 'Ricardo';
console.log(nome); // Ricardo
console.log(pessoa.nome); // undefined
```

##### Desestruturando atributos que esta dentro de outro objeto dentro do objeto 


```javascript
const pessoa = {
    nome: undefined,
    sobrenome: 'Navas',
    idade: 27,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    },
};


const { endereco, endereco: { rua, numero } } = pessoa;

console.log(endereco); // objeto completo do endereco
console.log(rua, numero); // rua e numero desestruturado
```

##### Pegando resto do objeto

```javascript
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Navas',
    idade: 27,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    },
};


const { nome, ...resto } = pessoa;

console.log(nome); //nome
console.log(resto); //resto do objeto
```

## Estrutura de repetição - For clássico


##### Sem repetição

```javascript
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
console.log('Linha 6');
```

##### Com repetição 

```javascript
// variavel de controle; condição de parada; incremento
for(let i=1; i <= 6; i++) {
    const msg = `Linha ${i}`;
    console.log(msg);
}
```

##### Pulando

```javascript

// Pulando 
for(let i=100; i <= 600; i += 100) {
    const msg = `Linha ${i}`;
    console.log(msg);
}

/*
Linha 100
Linha 200
Linha 300
Linha 400
Linha 500
Linha 600
*/
```


##### Par Impar

```javascript
// Famoso par ou impar
for(let i=0; i < 100 ; i++) {
    const par = i % 2 === 0;
    console.log(i, par); // 0 true, 1 false, 2 true, 3 false, etc...
}
```

##### Imprimir um array 
```javascript
const frutas = ['Maçã', 'Pêra', 'Uva'];

for(let i=0 ; i < frutas.length ; i++) {
    console.log(frutas[i]);   
}
// Maçã 
// Pêra 
// Uva
```

## For in

#### Iterando sobre um array com for in em um array

```javascript
const frutas = ['maçã', 'pera', 'banana', 'melancia'];

for(let indexFruta in frutas) {
    console.log(indexFruta);
}

// Saída:
/*
0
1
2
3
*/

for(let indexFruta in frutas) {
    console.log(frutas[indexFruta]);
}

// Saída:
/*
maçã
pera
banana
melancia
*/
```


#### Iterando sobre um objeto

```javascript
const pessoa = {
    nome: 'Gabriel',
    idade: 48,
    nacionalidade: 'Japonês',
}

for(let indexPes in pessoa) {
    console.log(indexPes);
}

// Saída printa as chaves do objeto
/*
nome
idade
nacionalidade
*/

for(let indexPes in pessoa) {
    console.log(pessoa[indexPes]);
}

// Saída printa os valores das chaves do objeto

/*
nome
idade
nacionalidade
*/
```


#### Iterando numa lista de objeto

```javascript

const pessoas = [
    {
        nome: 'Gabriel',
        endereco: {
            rua: 'Rua das flores',
            numero: 31,
            cidade: {
                nome: 'Presidente Prudente',
            },
        },
    }, {
        nome: 'Gabriel',
        endereco: {
            rua: 'Rua das flores',
            numero: 31,
            cidade: {
                nome: 'Presidente Prudente',
            },
        },
    },
]

for (let pessoa of pessoas) {
    console.log(pessoa);
}

/*
Saída

{
  nome: 'Gabriel',
  endereco: {
    rua: 'Rua das flores',
    numero: 31,
    cidade: { nome: 'Presidente Prudente' }
  }
}
{
  nome: 'Gabriel',
  endereco: {
    rua: 'Rua das flores',
    numero: 31,
    cidade: { nome: 'Presidente Prudente' }
  }
}
*/
```

## While e Do While 

### While

```javascript
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}

/*
Saída:
0
1
2
3
4
*/

let j = 4
while(j > 0) {
    console.log(j);
    j--;
}

/*
Saída:
4
3
2
1
*/
```


##### Incremento na própria condição

```javascript
let z = 0;
while( (z = z + 1) < 10) {
    console.log(z);
}
```

### Do While

```javascript
let numero = 1;
do {
    //incremento apos printar o número
    console.log(numero++);
}while(numero <= 4);

/*
Saída:
1
2
3
4
*/
```


## Break e Continue

```javascript
let i = 0;

while (i < 10) {
    console.log(i);
    
    if (i < 7) {
        i++;
        //o código não continua daqui pra baixo
        // vai para a próxima iteração
        continue; 
    } else {
        break; //sai do laço
    }
}
/*
Saída:
0
1
2
3
4
5
6
7
*/
```

## Pegar maior número

```javascript
function getMaior(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

console.log(getMaior(1,2)); // 2
console.log(getMaior(5,2)); // 5
console.log(getMaior(5,7)); // 7
```

## Verifica se é paisagem

```javascript
function isPaisagem(largura, altura) {
    const modoPaisagem = getMaior(largura, altura) === largura;
    return modoPaisagem;
}

console.log('É paisagem 1600x1200: ', isPaisagem(1600, 1200));
```

## Outro Exercício, Fizz, Buzz

```javascript
function numDiv(numero) {
    if( !Number.isInteger(numero)) return numero;

    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    
    return numero;
}

let result = null;
for(let i=0; i <= 100; i++) {
    result = numDiv(i);
    console.log(result);
}
```