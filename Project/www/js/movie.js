//CON EL ACENTO GA

var rectPath = new Rect(0,0,150,150)
.attr({
    fillColor: 'red',
    strokeColor: 'green',//ES EL COLOR DEL BORDER Y ESTO ES CUANDO ESTA DIBUJANDO UNA LINEA AL REDEDOR DE LA FIGURA
    strokeWidth: 5,
    x: 150,
    y: 150
});

stage.addChild(rectPath);

rectPath.animate('2s', {
    rotation: Math.PI*2
},{
    easing: 'elasticInOut' //TIPO DE ANIMACION QUE PODEMOS USAR
})