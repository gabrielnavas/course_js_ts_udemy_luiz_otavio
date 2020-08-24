class ValidarFormulario {

    constructor() {
        this.formulario = document.querySelector('.formulario')

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formuario enviado.');
            this.formulario.submit();
        }
    }

    senhasSaoValidas() {
        let valido = true;

        const senha = this.formulario.querySelector('.senha');
        const repitirSenha = this.formulario.querySelector('.repitir-senha');

        if(senha.value !== repitirSenha.value) {
            valido = false;
            this.criaErro(senha, 'Campo senha e repitir senha precisa ser iguais.');
            this.criaErro(repitirSenha, 'Campo senha e repitir senha precisa ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valido = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres');
        }

        return valido;
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('input')) {
            let label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `campo ${label} não pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if( !this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if( !this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }
    
    
    somenteLetrasENumeros(str) {
        return String(str).match(/^[a-zA-Z0-9]+$/g);
    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if( !this.somenteLetrasENumeros(usuario)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if( !cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }

        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidarFormulario();