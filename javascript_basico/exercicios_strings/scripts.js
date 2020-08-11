const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br />`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length - (nome.split(' ').length-1)}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra 'a' no seu nome? <strong>${nome.indexOf('a')}</strong><br />`;
document.body.innerHTML += `Qual o último índice da letra 'l' no seu nome? <strong>${nome.lastIndexOf('l')}</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong><br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ').join(' ')}</strong><br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`;
