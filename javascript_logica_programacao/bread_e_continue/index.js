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