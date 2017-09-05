let x1 = Math.round(Math.random()*(100 -1) + 1);
let x2 = Math.round(Math.random()*(100 -1) + 1);
let y1 = Math.round(Math.random()*(100 -1) + 1);
let y2 = Math.round(Math.random()*(100 -1) + 1);

var Punto1 = new Object();
Punto1.x1 = x1;
Punto1.x2 = x2;

var Punto2 = new Object();
Punto2.y1 = y1;
Punto2.y2 = y2;

//console.log(Punto1);
//console.log(Punto2);


/*let distanciaMin = 0;
let distanciaMax = 15;

const estanJuntos = () => x === y;*/

function calcularDistancia(x1, x2, y1, y2){
    
    const distanciaMedia = ( Math.sqrt(Math.pow((x2 - x1), 2), Math.pow((y2 - y1), 2)));
    //const distanciaMedia = () =>  Math.sqrt(Math.pow((x2 - x1), 2), Math.pow((y2 - y1), 2));

    //return;
    return distanciaMedia;
}

calcularDistancia();
//console.log(calcularDistancia();


