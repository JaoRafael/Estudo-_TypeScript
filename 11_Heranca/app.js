var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Ninja = /** @class */ (function (_super) {
    __extends(Ninja, _super);
    function Ninja(nome, idade, sexo, classe) {
        var _this = _super.call(this, nome, idade, sexo) || this;
        _this.classe = classe;
        return _this;
    }
    Ninja.prototype.atirarShuriken = function () {
        console.log(" O ninja atirou a shuriken");
    };
    return Ninja;
}(Humano));
var joao = new Ninja('João', 36, "Masculino", "Jounin");
console.log(joao);
console.log(joao.apresetarHumano());
joao.atirarShuriken();
