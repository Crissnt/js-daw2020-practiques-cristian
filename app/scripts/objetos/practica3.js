function Ordenador(marca, modelo, ram = 4, disco = 512, pulgadas = 17) {

    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;

    this.toString = () => {
        return `Marca: ${marca} Modelo: ${modelo} RAM: ${ram} Disco: ${disco} Pulgadas: ${pulgadas}`;
    }
}

function Portatil(marca, modelo, ram = 4, disco = 256, pulgadas = 12, autonomia = 4){
    Ordenador.call(this, marca, modelo, ram, disco, pulgadas);

    this.toString = () => {
        return `Marca: ${marca} Modelo: ${modelo} RAM: ${ram} Disco: ${disco} Pulgadas: ${pulgadas} Autonomia: ${autonomia}`;
    }
}
