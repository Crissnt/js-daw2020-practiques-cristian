const lista = new Map();
let num;

for (let i = 0; i < 10000; i++) {
  num = Math.floor(Math.random() * (11 - 1) + 1);
  /* Si el numero que ha salido no estaba en la lista
   lo inserta como clave con un valor de 1 */
  if (!lista.has(num)) {
    lista.set(num, 1);
  } else {
    //Si ya estaba, le suma 1 a su valor
    lista.set(num, lista.get(num) + 1);
  }
}

for ([valor, cantidad] of lista) {
  console.log('Número ' + valor + ': ' + cantidad);
}
