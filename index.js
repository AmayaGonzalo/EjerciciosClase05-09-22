let holaMundo = "hola mundo";
console.log(holaMundo);

let readlineSync = require('readline-sync');
let alturaPersona = readlineSync.question("Indique la altura de la persona: ");
console.log("su altura es: ", alturaPersona);


let mensaje = readlineSync.question("Escriba su mensaje: ");
console.log("Su mensaje escrito es: ", mensaje);

let primerMensaje = readlineSync.question("Escriba su primer mensaje: ");
let segundoMensaje = readlineSync.question("Escriba su segundo mensaje: ");
let tercerMensaje = readlineSync.question("Escriba su tercer mensaje: ");
console.log("Su primer mensaje: ", primerMensaje, ". Su segundo mensaje: ", segundoMensaje, ". Su tercer mensaje: ", tercerMensaje, ".");


function calcularArea(){
  let base = parseInt (readlineSync.question("Ingrese la base: "));
  let altura = parseInt (readlineSync.question("Ingrese la altura: "));
  return base * altura;
};
let resultado = calcularArea();
console.log("El area del cuadrado es: ", resultado);


let primeraVuelta = readlineSync.questionInt("Ingrese el tiempo de la primera vuelta: ");
let segundaVuelta = readlineSync.questionInt("Ingrese el tiempo de la segunda vuelta: ");
let terceraVuelta = readlineSync.questionInt("Ingrese el tiempo de la tercera vuelta: ");
let cuartaVuelta = readlineSync.questionInt("Ingrese el tiempo de la cuarta vuelta: ");
let totalVuelta = primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
let promedioVuelta = totalVuelta / 4;
console.log("El total de tiempo de vueltas es: ", totalVuelta);
console.log("El promedio de tiempo de vueltas es: ", promedioVuelta);
