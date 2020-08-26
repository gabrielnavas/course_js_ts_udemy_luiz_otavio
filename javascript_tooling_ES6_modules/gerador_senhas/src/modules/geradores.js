const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraUmaMaiuscula = () => String.fromCharCode(rand(65, 91));

const geraUmaMinuscula = () => String.fromCharCode(rand(97, 123));

const geraUmNumero = () => String.fromCharCode(rand(48, 58));

const geraUmSimbolo = () => {
    const simbolos = ',.;~[]{}!@#$%*()_+=-';
    return simbolos[rand(0, simbolos.length)];
}

export default function geraSenha(qntd, maiuslas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qntd = Number(qntd);

    for (let i = 0; senhaArray.length < qntd && i < qntd; i++) {
        maiuslas && senhaArray.length < qntd && senhaArray.push(geraUmaMaiuscula());
        minusculas && senhaArray.length < qntd && senhaArray.push(geraUmaMinuscula());
        numeros && senhaArray.length < qntd && senhaArray.push(geraUmNumero());
        simbolos && senhaArray.length < qntd && senhaArray.push(geraUmSimbolo());
    }

    return senhaArray.join('');
}