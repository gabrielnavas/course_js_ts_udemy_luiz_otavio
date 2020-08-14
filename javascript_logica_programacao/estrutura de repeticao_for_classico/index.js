
// Sem repetição
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
console.log('Linha 6');

// variavel de controle; condição de parada; incremento
for(let i=1; i <= 6; i++) {
    const msg = `Linha ${i}`;
    console.log(msg);
}


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


// Famoso par ou impar
for(let i=0; i < 100 ; i++) {
    const par = i % 2 === 0;
    console.log(i, par); // 0 true, 1 false, 2 true, 3 false, etc...
}


// Exibindo um array 

const frutas = ['Maçã', 'Pêra', 'Uva'];

for(let i=0 ; i < frutas.length ; i++) {
    console.log(frutas[i]);   
}
// Maçã 
// Pêra 
// Uva