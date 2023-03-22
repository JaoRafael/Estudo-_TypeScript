function imprimirDados(obj) {
    console.log("Esta pessoa se chama ".concat(obj.nome, " e tem ").concat(obj.idade, " anos"));
}
var pessoa = { nome: "João", idade: 36 };
imprimirDados(pessoa);
var pessoa1 = { nome: "Camila", idade: 29 };
imprimirDados(pessoa1);
