function criarCarro(config) {
    var carro = { marca: "Default", aro: 16, tetoSolar: false, cor: "Preto" };
    if (config.marca) {
        carro.marca = config.marca;
    }
    if (config.aro) {
        carro.aro = config.aro;
    }
    if (config.tetoSolar) {
        carro.tetoSolar = config.tetoSolar;
    }
    if (config.cor) {
        carro.cor = config.cor;
    }
    return carro;
}
var maverick = criarCarro({ marca: "Maverick", tetoSolar: false });
console.log(maverick);
var bugatti = criarCarro({ marca: "Bugatti", aro: 22, tetoSolar: true, cor: "Laranja" });
console.log(bugatti);
