const Punto = require('../../app/scripts/objetos/practica1.js');

test('crea un objeto Punto con coordenadas X e Y', () => {
    let p1 = new Punto(3, 4);
    
    expect(p1.x).toBe(3);
    expect(p1.y).toBe(4);
});

test('si algun parametro no es un numero se sustituye por un 0', () => {
    let p2 = new Punto('abc', null);
    
    expect(p2.x).toBe(0);
    expect(p2.y).toBe(0);
});

test('el metodo cambiar() asigna nuevas coordenadas pasadas por parametro al objeto', () => {
    let p1 = new Punto(3, 4);
    p1.cambiar(1, 9);

    expect(p1.x).toBe(1);
    expect(p1.y).toBe(9);
});

test('el metodo copia() devuelve una copia del objeto pasado por parametro', () => {
    let p1 = new Punto(3, 4);
    
    let p2 = p1.copia();
    
    expect(p2).toMatchObject(p1);
});

test('el metodo suma() devuelve un objeto Punto sumando las coordenadas de dos puntos', () => {
    let p1 = new Punto(3, 4);
    let p2 = new Punto(2, 9);
    let p3 = p1.suma(p2);

    expect(p3.x).toBe(p1.x + p2.x);
    expect(p3.y).toBe(p1.y + p2.y);
    expect(p3 instanceof Punto).toBeTruthy();
});
