var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nome, cpf, valor) {
        this.nome = nome;
        this.cpf = cpf;
        this.valor = valor;
    }
    ContaBancaria.prototype.guardar = function () {
    };
    return ContaBancaria;
}());
var contaBacaria = new ContaBancaria('Ratomolhado,cpf 162.929.8283-8, 90000, AnaMaria");

AnaMaria.guardar();
console.log("Qual o nome do cliente: ".concat(AnaMaria.nome));
console.log("Qual o cpf do cliente: ".concat(AnaMaria.cpf));
console.log("Qual o valor na conta: ".concat(AnaMaria.valor));
