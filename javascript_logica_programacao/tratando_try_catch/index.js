// try {
//     console.log('fui executado');
//     //executa
// }
// catch(error) {
//     console.log('Variável variavelNaoExiste não existe. :)');
//     // caso ocorrer um erro
// }
// finally {
//     console.log('fui executado')
//     // após um try ou catch é sempre executado
// }


// finally é executado mesmo com erros

try {
    console.log(variavelNaoExiste);
    //executa
}
catch (error) {
    console.log('Variável variavelNaoExiste não existe. :)');
    // caso ocorrer um erro
}
finally {
    console.log('fui executado')
    // após um try ou catch é sempre executado
}

/*
Saída:
Variável variavelNaoExiste não existe. :)
fui executado
*/


// try catch dentro de outro try catch
try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo');

    try {
        console.log(variavelNaodeClarada);
    }
    catch (err) {
        throw 'Erro dentro do try dentro do try';
    }
}
catch (ex) {
    console.log(ex);
}
finally {
    console.log('Fechei o arquivo');
}
/* 
Saída
Abri um arquivo
Manipulei o arquivo
Erro dentro do try dentro do try
Fechei o arquivo
*/


// Lançando erro por tipo de data

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Não é instância de data');
    }

    if (!data) {
        data = new Data();
    }

    return data.toLocaleTimeString('pt-br', { hour12: false });
}

let hour = retornaData(100) // TypeError: Não é instância de data