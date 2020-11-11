const funcP2Test = require('../../app/scripts/funciones/practica2.js');
/*
test('adds 1 + 2 to equal 3', () => {
  expect(funcp2Test.sum(1, 2)).toBe(31);
});
*/

test('compara el mapa devuelto con uno predefinido', () => {
  const array = ['pal1', 'pal2', 'pal1', 'pal3', 'pal4', 'pal2', 'pal1'];

  const mapa = new Map();
  mapa.set('pal1', 3);
  mapa.set('pal2', 2);
  mapa.set('pal3', 1);
  mapa.set('pal4', 1);

  expect(funcP2Test.crearMapa(array)).toStrictEqual(mapa);
});
