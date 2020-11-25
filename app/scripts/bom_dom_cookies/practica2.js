//Definicion de variables
let hoy = new Date();
let expira = hoy.getTime() + 1000 * 60 * 60 * 24 * 30;
let fechaExp = new Date(expira); //Fecha de expiración (1 mes)

let visitasMax = 10;

//Guarda el nombre/valor de la cookie en dos variables
let [cookieNombre, cookieValor] = document.cookie.split('=');

if(cookieValor === undefined) {
    cookieValor = 1;
} else {
    cookieValor++;
}

//Creación de la cookie
document.cookie = `visitas=${cookieValor};expires=${fechaExp.toUTCString()}`;

if (cookieValor > visitasMax) {
    //Eliminación de la cookie
    document.cookie=`visitas= ;expires = Thu, 01 Jan 1970 00:00:00 GMT`;
    cookieValor = 0;
}

//Se muestra el valor de la cookie en el documento HTML
document.getElementById('contador').textContent = cookieValor;

console.log(cookieValor);