const premiado = new Set();
let array;

//Repite 50 veces el "sorteo"
for (let i = 0; i < 50; i++) {
  /* Si sale algún número repetido no lo cuenta para el número de iteraciones
  ya que se están almacenando en un set */
  while (premiado.size < 6) {
    premiado.add(Math.floor(Math.random() * (50 - 1) + 1));
  }

  //Copia el set a un array
  array = [...premiado];

  //Con el método join se muestra el array de manera más limpia
  console.log(array.join('-'));

  //Se borran los valores del set para la siguiente iteración
  premiado.clear();
}
