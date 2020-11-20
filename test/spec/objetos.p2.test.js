require('../../app/scripts/objetos/practica2.js');

test('el metodo mediaAritmetica() del prototipo Array devuelve la media aritmetica de los valores del objeto', () => {
    let array = [Math.random(), Math.random(), Math.random()];

    let media = array.mediaAritmetica();

    let resultado = array.reduce((num, valor) => num + valor, 0)/array.length;

    expect(media).toBe(resultado);
});