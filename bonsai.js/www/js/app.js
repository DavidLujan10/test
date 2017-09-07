new Rect(10, 10, 100, 100)
.addTo(stage)
.attr('fillColor', 'green')
.animate('5s', {
    x: 800,//HASTA DONDE SE DESPLAZA LA FIGURA 
    //Y: 900
  }, { 
    //easing: 'bounceIn',//PARA QUE REGRESE Y HAGA UN TIPO BRINCO
    delay: '200ms'
  })
  /*.repeat(dos)
  return dos;*/