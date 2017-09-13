/*new Rect(10, 10, 100, 100)
.addTo(stage)
.attr('fillColor', 'green')
.animate('5s', {
    x: 800,//HASTA DONDE SE DESPLAZA LA FIGURA 
    //Y: 700
  }, { 
    //easing: 'bounceIn',//PARA QUE REGRESE Y HAGA UN TIPO BRINCO
    delay: '200ms'
  })
  .repeat(dos)
  return dos;
  .animate(new KeyframeAnimation('2s',{
    from: {x:0, y:0},
    '0.5%': {x:300, y:300},//VELOCIDAD A LA QUE SE MUEVE EL CUADRADO EN SEGUNDOS
    to: {x:0, y:0}

  }));*/

  

  new Circle(0, 5, 6)
  .addTo(stage)
  .attr('fillColor', 'yellow')
  .animate('10s', {
    x: 0,
    Y: 0
  }, { 

    delay: '10s'
  })
  .animate('5s', {
    y: 450
  },{
    delay:'5s'
  })
  .animate('5s',{
    x: 300
  })

  
  new Arc(10, 10, 6, 0, 9, 9)
  .addTo(stage)
  .attr('fillColor', 'red')
  .animate('11s', {
    x: 0,
    Y: 0
  }, { 
    
    delay: '11s'
  })
  .animate('6s',{
    y: 450
  },{
    delay: '6s'
  })
  .animate('6s',{
    x:300
  })
  
 
