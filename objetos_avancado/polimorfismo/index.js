function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente. ${this.saldo}`);
        return;
    }

    this.saldo -= this.saldo;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();

};
Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} |` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11); // Ag/c: 11/22 |Saldo: R$21.00
conta1.depositar(10); // Ag/c: 11/22 |Saldo: R$31.00
conta1.sacar(30); // Ag/c: 11/22 |Saldo: R$0.00
conta1.sacar(0.01); // Saldo insuficiente. 0
conta1.verSaldo(); // Ag/c: 11/22 |Saldo: R$0.00
console.log(conta1); // Conta { agencia: 11, conta: 22, saldo: 0 }



// Polimorfismo Conta corrente
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (this.saldo + this.limite < valor) {
        console.log(`Saldo insuficiente. ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10); // Ag/c: 11/22 |Saldo: R$10.00
contaCorrente.sacar(110); // Ag/c: 11/22 |Saldo: R$-100.00
contaCorrente.sacar(2); // Saldo insuficiente. -100
