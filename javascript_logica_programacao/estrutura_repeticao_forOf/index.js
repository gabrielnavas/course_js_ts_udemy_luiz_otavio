// Iterando sobre uma string

const nome = 'Gabriel';

for (let caracter of nome) {
    console.log(caracter);
}

// Saída
/*
G
a
b
r
i
e
l
*/


const pessoas = [
    {
        nome: 'Gabriel',
        endereco: {
            rua: 'Rua das flores',
            numero: 31,
            cidade: {
                nome: 'Presidente Prudente',
            },
        },
    }, {
        nome: 'Gabriel',
        endereco: {
            rua: 'Rua das flores',
            numero: 31,
            cidade: {
                nome: 'Presidente Prudente',
            },
        },
    },
]

for (let pessoa of pessoas) {
    console.log(pessoa);
}

/*
Saída

{
  nome: 'Gabriel',
  endereco: {
    rua: 'Rua das flores',
    numero: 31,
    cidade: { nome: 'Presidente Prudente' }
  }
}
{
  nome: 'Gabriel',
  endereco: {
    rua: 'Rua das flores',
    numero: 31,
    cidade: { nome: 'Presidente Prudente' }
  }
}
*/
