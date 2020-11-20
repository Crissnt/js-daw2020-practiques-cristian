Array.prototype.mediaAritmetica = function() {
    return this.reduce((num, valor) => num + valor, 0) / this.length;
}
