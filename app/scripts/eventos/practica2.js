//Asignación a variables de los elementos
let capa1 = document.getElementById('capa1');
let capa2 = document.getElementById('capa2');

//Eventos
capa1.addEventListener('drag', arrastrar);
capa1.addEventListener('dragend', arrastrarFin);

capa2.addEventListener('dragenter', entrar);
capa2.addEventListener('dragleave', abandonar);
capa2.addEventListener('dragover', arrastrarSobre);
capa2.addEventListener('drop', soltar);

//Funciones
function arrastrar(e){
    capa1.style.opacity = '0.5';

}

function arrastrarFin(e){
    capa1.style.opacity = '1';
 
}

function entrar(e){
    capa2.style.backgroundColor='red';
}

function abandonar(e){
    capa2.style.background = 'rgba(255, 255, 255, 0)';
}

function arrastrarSobre(e){
    e.preventDefault();
}

function soltar(e){
    capa1.style.display = 'none';
    capa2.style.backgroundColor = 'yellow';
    capa2.textContent = '¡Lo has logrado!';
}