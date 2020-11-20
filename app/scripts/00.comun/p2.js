let palabras = pedirPalabras();

lista = contarPalabras(palabras);

mostrarPantalla(lista);

/**
 * Cuenta el número de repeticiones de cada palabra
 * @param {Array} palabras listado de palabras
 * @return {Array} listado de strings que contienen palabra y su cuenta
 */

function contarPalabras(palabras) {
    const mapPalabras = new Map();
    const salida = [];

    for(const palabra of palabras){
        let numRep = mapPalabras.get(palabra);
        if(numRep === undefined) {
            mapPalabras.set(palabra, 1);
        } else {
            mapPalabras.set(palabra, ++numRep); 
        }
    }

    for(const[palabra, rep] of mapPalabras){
        salida.push(`${palabra}: ${rep} veces`);
    }

    return salida;

}

