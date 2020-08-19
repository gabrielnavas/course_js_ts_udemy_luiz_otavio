

//             -5        -4       -3         -2         -1
//              0        1         2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elementoAdicionar1, elementoAdicionar2, elementoAdicionar1..)

let removidos = nomes.splice(3, 2);
console.log(removidos); // [ 'Gabriel', 'Júlia' ]
console.log(nomes); // [ 'Maria', 'João', 'Eduardo' ]

removidos = nomes.splice(0, 1, 'Juca'); // é inserido no índice que é removido
console.log(removidos); // [ 'Maria' ]
console.log(nomes); // [ 'Juca', 'João', 'Eduardo' ]


removidos = nomes.splice(1, 1, 'Kátia', 'Miguel'); // é inserido no índice que é removido
console.log(removidos); // [ 'João' ]
console.log(nomes); // [ 'Juca', 'Kátia', 'Miguel', 'Eduardo' ]


removidos = nomes.splice(-1, 1, 'Eduardaaaa'); // é inserido no índice que é removido
console.log(removidos); // [ 'Eduardo' ]
console.log(nomes); // [ 'Juca', 'Kátia', 'Miguel', 'Eduardaaaa' ]


// Remover todos os elementos do array
removidos = nomes.splice(0, Number.MAX_VALUE);
console.log(removidos); // [ 'Juca', 'Kátia', 'Miguel', 'Eduardaaaa' ]