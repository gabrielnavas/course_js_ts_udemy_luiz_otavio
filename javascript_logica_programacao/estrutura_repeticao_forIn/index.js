///////////////// em um array

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



////////////////// em um objeto

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