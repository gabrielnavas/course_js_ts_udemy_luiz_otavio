// Examplo básico

const arrayNumeros = [5, 16, 18, 5, 4, 2, 7, 99];

arrayNumeros.forEach((valor, index, array) => {
    console.log(`Index: ${index}, valor: ${valor}, array: ${array}`);
});

/*
Index: 0, valor: 5, array: 5,16,18,5,4,2,7,99
Index: 1, valor: 16, array: 5,16,18,5,4,2,7,99
Index: 2, valor: 18, array: 5,16,18,5,4,2,7,99
Index: 3, valor: 5, array: 5,16,18,5,4,2,7,99
Index: 4, valor: 4, array: 5,16,18,5,4,2,7,99
Index: 5, valor: 2, array: 5,16,18,5,4,2,7,99
Index: 6, valor: 7, array: 5,16,18,5,4,2,7,99
Index: 7, valor: 99, array: 5,16,18,5,4,2,7,99
*/



// Imitacao de reduce por exemplo

let total = 0;
arrayNumeros.forEach(valor => total += valor);
console.log('Total: ', total); // Total:  156