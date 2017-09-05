//const cPersona = David;
//const Pelis = [ClaseA, ClaseB, ClaseC];

const cEdad = 17;

let conAcompañante = true;

const mayorEdad = () => cEdad >= 18;

if(mayorEdad()){
    console.log(`Puede entrar a ver peli`);//ERES MAYOR DE EDAD
}
else{
    if(conAcompañante){
        console.log(`Tienes acompañante, entonces puedes pasar`);//LLEVAS ACOMPAÑANTE
    }
    else{
        console.log(`Lo siento no eres mayor de edad y no tienes a alguien que te acompañe`);//ES MENOR DE EDAD Y ESTA SOLO
    }
    
}
