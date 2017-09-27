var rectPath = new Rect(0,0,150,200)
.attr({
    fillColor: 'blue',
    x: 100,
    y: 100
});

stage.addChild(rectPath);

var squarePath = new Rect(0,0,150,150)
.attr({
    fillColor: 'yellow',
    x: 100,
    y: 350
});

stage.addChild(squarePath);

var circlePath = new Circle(0,0,100)
.attr({
    fillColor: 'red',
    x: 150,
    y: 650
});

stage.addChild(circlePath);