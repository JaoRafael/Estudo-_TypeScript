class Humano {
    nome: string;
    idade: number;
    sexo: string;
    constructor(nome: string, idade: number, sexo: string){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    apresetarHumano() {
        return `O nome desse Humano é ${this.nome} é do sexo ${this.sexo} e ele tem ${this.idade} anos. `;
    }
}

class Ninja extends Humano {
    classe: string;
    constructor(nome: string, idade: number, sexo: string, classe: string) {
        super(nome, idade, sexo);
        this.classe = classe;
    }
    atirarShuriken() {
        console.log(" O ninja atirou a shuriken");
    }
}

let joao = new Ninja('João', 36, "Masculino", "Jounin");

console.log(joao);
console.log(joao.apresetarHumano());
joao.atirarShuriken();