function imprimirDados(obj: {nome: string, idade: number}) {
    console.log(`Esta pessoa se chama ${obj.nome} e tem ${obj.idade} anos`);
}

let pessoa = {nome: "João", idade: 36};

imprimirDados(pessoa);

let pessoa1 = {nome: "Camila", idade: 29};

imprimirDados(pessoa1);
