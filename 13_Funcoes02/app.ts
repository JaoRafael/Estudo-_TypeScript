// ? -> parametro opcional, porem só deve ser parametro opcional depois de um obrigatório

function descreverCarro(marca: string, aro?: number) {
    if(aro) {
        console.log(`O carro é da marca ${marca} tem o aro de ${aro}`);
    } else{
        console.log(`O carro é da marca ${marca}`);
    }
}

descreverCarro("BMW", 20);
descreverCarro("Fiat");