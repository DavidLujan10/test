var vNombre = "David"; //ESTA ES UNA VARIABLE GLOBAL

function saludar(){
    if(true){
        var vNombre = "Baila";
    }
    console.log(`Hola ${vNombre}`);
}


function saludar10(){
    let i = 10;
    for(let i=0; i<10; i++){
        console.log(`Hola ${vNombre}`);
    }
    console.log(`El valor de i es ${i}`)
}
