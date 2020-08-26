import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qntCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkSimbolos = document.querySelector('.chk-simbolos');
const chkNumeros = document.querySelector('.chk-numeros');
const gerarSenha = document.querySelector('.gerar-senha');

function gera() {
    const senha = geraSenha(qntCaracteres.value, chkMaiusculas.checked,
        chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked);
    return senha || 'Nada selecionado';
}

export default () => {
    gerarSenha.addEventListener('click', () => {
        const senha = gera();
        senhaGerada.innerText = senha;
    });
};