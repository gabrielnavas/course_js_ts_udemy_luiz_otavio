/* Aritméticos 

    + Adição e Concatenação
    - Subtração
    * Multiplicação
    / Divisão
    ** Exponenciação
    % Resto da divisão
    =  atribuição
    ++ incrementa o valor e atribui o valor na variável 
    -- decrementa o valor e atribui o valor na variável 
    NaN not a number

    //Prescedência de calculo.
    1. ()
    2. **
    3. * / %
    4. + -
*/

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
console.log(num11);
console.log(++num11);

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

const convertido = parseInt(variavelInt);
const convertidoFloat = parseInt(variavelFloat);

// Number(numero) não tem distinção, se é float ou inteiro
console.log(Number('12.65'));

console.log('Convertido: ', convertido);