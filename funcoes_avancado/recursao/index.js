// Exemplo básico

function ateDez(num) {
    if (num > 50000) return;

    console.log(num);
    num = num + 1;
    ateDez(num);
}

ateDez(0);

/*
0
1
2
3
4
5
*/


// Outro exemplo

function printarCaracteres(nome, index) {
    if (index < nome.length) {
        console.log(nome[index]);

        index = index + 1;
        printarCaracteres(nome, index);
    }
}

printarCaracteres('Gabriel', 0);