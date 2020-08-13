// condicao ? a : b;

const pontuacaoUsuario = 999;

const tipoUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Comum'; 
console.log(tipoUsuario); // Usuário Comum


//Setando valor padrão
const corUsuario = null;
const corPadrao = corUsuario || 'Rosa';
console.log(corPadrao); // Rosa

// Um pouco mais complexo
const tipoUsuarioComplexo = pontuacaoUsuario > 1000 ?
    'Usuário vip' :
    pontuacaoUsuario === 999 ?
        'Esse user é 999' :
        'Esse user não é 999';

console.log(tipoUsuarioComplexo); // Esse user é 999


