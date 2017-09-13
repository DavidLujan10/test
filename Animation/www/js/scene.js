let numeStars = 7;
let width = 500;
let height = 500;

let stars = (function(stars){
    let stars = [];//ESTO YA ES UN ARREGLO NO ES NECESARIO AGREGARLE ARRAY
    for(let i = 0; i < numeStars; i++){
        let h = i * 360 / numeStars;//SEPARANDO CADA UNA DE LAS PARTES DE LA ESTRELLA UN VALOR RANDOM EN LOS 360 GRADOS DE LA ANIMACION
        stars[i] = star.clone().attr({
            fillColor: 'hsl(' + h +', 100%, 50%)',//ASIGNA UN COLOR A LA FIGURA EN EXADECIMAL
            x: width/2,
            y: height/2
        });
    }
    return stars;

})(new Star(width/2, height/2, 1, 5));//MANDA LA POSICION A LA FIGURA

stage.length(14);//CANTIDAD DE LAYERS QUE TENDRA LA 
//EL LAYER ES UNA POSESCENA SOBRE LA MISMA ESCENA

let i = 0;
stage.on(0, function(){
    let star = stars[i];

    star.attr({
        scaleX: 1,
        scaleY: 1,
        opacity: 1

    })
    .addTo(stage)
    .animate(14 +numeStars,{
        scaleX: width * 3,
        scaleY: height * 3,
        opacity:0
    },{isTimeLineBound: false});

    i = (i + 1) % numeStars;
    stage.removeChild(star[i]);

});
