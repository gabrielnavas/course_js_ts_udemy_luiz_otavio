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