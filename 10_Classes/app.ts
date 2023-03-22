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

let joao = new Humano('João', 36, "Masculino");

console.log(joao);
console.log(joao.apresetarHumano());