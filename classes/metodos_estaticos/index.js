class ControleRemoto {

    static pilha = 0;

    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }


    //métodos de instância;
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        ControleRemoto.pilha += 1;
    }
}

const controle = new ControleRemoto('LG');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.diminuirVolume();

console.log(controle); //ControleRemoto { tv: 'LG', volume: 4 }

ControleRemoto.trocaPilha();
console.log(ControleRemoto.pilha); // 1