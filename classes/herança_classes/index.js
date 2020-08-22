class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            this.ligado = !this.ligado;
            console.log('disposito desligado');
        }
    }

    desligar() {
        if( !this.ligado) {
            this.ligado = !this.ligado;
            console.log('disposito desligado');
        }
    }
}

const disp = new DispositivoEletronico('Smartphone');
console.log(disp); // DispositivoEletronico { nome: 'Smartphone', ligado: false }


// extendendo a classe DispositoEletronico
class Smarthphone extends DispositivoEletronico {

    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const phone = new Smarthphone('Nokia', 'Preto');
console.log(phone); //Smarthphone { nome: 'Nokia', ligado: false, cor: 'Preto' }


class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    //sobreescrevendo o metodo ligar
    ligar() {
        console.log('Você sobrescreveu o método ligar.');
    }
}

const tablet = new Tablet('Nokia', true); 
tablet.ligar(); // Você sobrescreveu o método ligar.
console.log(tablet); // Tablet { nome: 'Nokia', ligado: false, temWifi: true }Tablet { nome: 'Nokia', ligado: false, temWifi: true }

