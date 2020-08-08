const nome = 'Gabriel';
const sobrenome = 'Navas';
const idade = 27;
const alturaCentimetro = 1.85;
const peso = 75;
const anoNascimento = new Date().getFullYear() - idade;
const indiceMassaCorporal = peso / (alturaCentimetro * alturaCentimetro);

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg, nasceu no ano de ' + anoNascimento);

// indiceMassaCorporal.toFixed(2) é para ter apenas 2 números após a vírgula.
console.log('tem ' + alturaCentimetro + ' de altura e seu IMC é de ' + indiceMassaCorporal.toFixed(2) + '.');


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, nasceu no ano de ${anoNascimento}`);
console.log(`tem ${alturaCentimetro} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}.`);


