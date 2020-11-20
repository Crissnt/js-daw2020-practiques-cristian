let palabras = pedirPalabras();

palabras = ordenarPalabras(palabras);

mostrarPantalla(palabras);

/**
 * 
 * @param {Array} lista de palabras, con repeticiones
 * @returns {Array} palabras ordenadas alfabéticamente, de forma inversa
 */
function ordenarPalabras(lista) {
    const listaNoRep = new Set(lista);

    return [...listaNoRep].sort(
        (a, b) => -a.localeCompare(b, "es")
        );
}