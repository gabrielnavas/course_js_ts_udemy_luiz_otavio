// Modos mais complicados de concatenar arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);

console.log(a1 + a2); // 1,2,34,5,6
console.log(a3); // [ 1, 2, 3, 4, 5, 6 ]
console.log(typeof a3); // object

const a4 = a3.concat([10, 20, 30], 'Gabriel');
console.log(a4); // [ 1, 2, 3, 4, 5, 6, 10, 20, 30, 'Gabriel' ]


// Método mais fácil de concatenar arrays

const a5 = [...a1, ...a2];
console.log(a5); //[ 1, 2, 3, 4, 5, 6 ]