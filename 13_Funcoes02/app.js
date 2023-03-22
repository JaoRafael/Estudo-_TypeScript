// ? -> parametro opcional, porem só deve ser parametro opcioanl depois de um obrigatório
function descreverCarro(marca, aro) {
    if (aro) {
        console.log("O carro \u00E9 da marca ".concat(marca, " tem o aro de ").concat(aro));
    }
    else {
        console.log("O carro \u00E9 da marca ".concat(marca));
    }
}
descreverCarro("BMW", 20);
descreverCarro("Fiat");
