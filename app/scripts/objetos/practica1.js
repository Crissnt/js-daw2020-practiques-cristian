function Punto (x, y) {

    if(typeof x === 'number'){
        this.x = x;
    } else {
        this.x = 0;
    }
    
    if(typeof y === 'number'){
        this.y = y;
    } else {
        this.y = 0;
    }


    this.cambiar = function (a, b){
        this.x = a;
        this.y = b;
    }

    this.copia = () => this;

    this.suma = (p) => new Punto(this.x + p.x, this.y + p.y);
}

// Export para el test
module.exports = Punto;
