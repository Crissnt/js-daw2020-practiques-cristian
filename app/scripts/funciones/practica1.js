// Declaraciones
let lista = [];
let setLista;

// Funcion auto invocada que pide palabras al usuario
(function () {
  // Bucle do while
  do {
    lista.push(prompt('Introduce una palabra'));
    // Sale del bucle cuando el último item del array está vacio o es nulo
  } while (lista.slice(-1) != '' && lista.slice(-1) !== null);

  // Elimina el último elemento
  lista.pop();

  // Ordena el array en orden alfabético inverso
  lista.sort((a, b) => b.localeCompare(a, 'es'));

  // Elimina duplicados pasando el array a un set
  setLista = new Set(lista);

  // Pasa de nuevo el set al array para mostrarlo con el metodo join()
  lista = [...setLista];
  alert(lista.join(', '));
})();
