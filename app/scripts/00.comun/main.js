/**
 * Muestra un popup al usuario donde puede introducir palabras
 * 
 * @return {Array} Lista palabras introducidas
 */

function pedirPalabras() {
    const palabras = [];

    while(true){
        const palabra = window.prompt(
        "Introduzca una palabra. Vacío o cancelar detiene el proceso"
        );

        if (palabra == null || palabra === '') break;

        palabras.push(palabra);
    }

    return palabras;
}

/**
 * Muestra un documento HTML con el listado de elementos que recibe
 * @param {Array} lista Elementos a mostrar en el documento HTML
 */

function mostrarPantalla(lista) {
    lista.forEach((elemento) => document.write(`<p>${elemento}</p>`));
}