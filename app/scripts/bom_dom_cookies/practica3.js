setTimeout(() => {
    resultado = confirm('¿Quieres que la lista salga ordenada alfabéticamente?');

    if(resultado == true) {
        //Guarda los elementos 'li' en un objeto
        let lista = document.querySelectorAll('li');
        let resultado = [];

        //Guarda el texto de los 'li' en un array
        lista.forEach( (el, ind) => {
            resultado[ind] = lista[ind].textContent;
        });
        
        //Ordena las palabras
        resultado.sort((a, b) => a.localeCompare(b, 'es'));

        //Reemplaza el texto de los 'li' por el del array ordenado
        lista.forEach((el, ind) => {
            el.textContent = resultado[ind];
        })
       
    }

}, 3000);