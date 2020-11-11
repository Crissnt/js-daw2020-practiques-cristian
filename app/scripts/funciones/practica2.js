// Pide palabras en un popup al usuario y las almacena en un array
function pedirPalabras() {
  const lista = [];

  do {
    lista.push(prompt('Introduce una palabra'));
  } while (lista.slice(-1) != '' && lista.slice(-1) !== null);

  lista.pop();

  return lista;
}

// Pasa los valores del array a un mapa
function crearMapa(lista) {
  const mapLista = new Map();

  for (let i = 0; i < lista.length; i++) {
    // Si el mapa ya tenia una clave concreta, le suma 1 a su valor
    if (mapLista.has(lista[i])) {
      mapLista.set(lista[i], mapLista.get(lista[i]) + 1);
    } else {
      mapLista.set(lista[i], 1);
    }
  }
  return mapLista;
}

// Imprime por consola el mapa
function imprimir(mapa) {
  mapa.forEach((v, k) => {
    console.log(k + ': ' + v + ' veces');
  });
}

// Llamadas a las funciones
const lista = pedirPalabras();
const mapLista = crearMapa(lista);
imprimir(mapLista);

// Export para el test
module.exports.crearMapa = crearMapa;
