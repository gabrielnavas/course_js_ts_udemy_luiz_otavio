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

// Incremento na própria condição
let z = 0;
while( (z = z + 1) < 10) {
    console.log(z);
}


// Do while

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