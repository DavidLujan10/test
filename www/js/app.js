var altura = 7;
var base = 5;
var areaRec = base * altura;
console.log("El area de mi rectangulo es igual: " + areaRec);

var Pi = 3.1416;
var radio = 8;
radio2 = radio * radio;
var areaCircu = Pi * radio2;
console.log("El area de mi circulo es igual: " + areaCircu);

var altTria = 6;
var baseTria = 4;
var areaTria = (baseTria * altTria) / 2;
console.log("El area de mi triangulo es igual:" + areaTria);

var radioEsf = 7;
radio3 = radioEsf * radioEsf * radioEsf;
var volumenEsf = ((3/4) * Pi) * radio3;
console.log("El volumen de mi esfera es igual: " + volumenEsf);

//TAREA SOBRE UNA FUNCION Y LA VARIABLE GLOBAL

console.log("Hola " + LlamarNom(vNombre)); //AQUI HACEMOS LLAMAR A LA FUNCION

var vNombre = David; //AQUI CREAMOS LA VARIABLE GLOBAL

function LlamarNom(MiNombre){ //AQUI CREAMOS LA FUNCION EN JS
    return vNombre;
}