// Declaraciones
const numeros = [1, 2, 3];
const arrayFactorial = [2, 3, 4];
const palabras = ['hola', 'adios'];

// Transforma un array según la función que se le pasa
function filtro(array, accion) {
  array.forEach((e, i) => {
    array[i] = accion(array[i]);
  });
}

// Devuelve el factorial de un número
function factorial(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

// Llamadas

// Sustituye cada número del array por su doble
filtro(numeros, (x) => x * 2);
console.log(numeros);

// Convierte las Strings del array a mayúsculas
filtro(palabras, (x) => x.toUpperCase());
console.log(palabras);

// Sustituye cada número del array por su factorial
filtro(arrayFactorial, (x) => factorial(x));
console.log(arrayFactorial);
