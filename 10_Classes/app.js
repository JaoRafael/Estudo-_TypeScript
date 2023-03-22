var Humano = /** @class */ (function () {
    function Humano(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    Humano.prototype.apresetarHumano = function () {
        return "O nome desse Humano \u00E9 ".concat(this.nome, " \u00E9 do sexo ").concat(this.sexo, " e ele tem ").concat(this.idade, " anos. ");
    };
    return Humano;
}());
var joao = new Humano('João', 36, "Masculino");
console.log(joao);
console.log(joao.apresetarHumano());
