const cNombre = "David";

const cDias = [ //ESTE ES EL ARREGLO DE DIAS
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"

];

    function fPromedioCorrer(){
        const cMin = 5;
        const cMax = 15;

        //AQUI ES PARA LOS VALORES ALETORIOS (Math.round REDONDEA A VALORES ENTEROS)
        return Math.round(Math.random() * (cMax - cMin) + cMin);

    }

    let lTotalKms = 0;
    const length = cDias.length; 
    for(let i = 0; i<length; i++){
        const cKms = fPromedioCorrer();
        lTotalKms += cKms; //SE LE ASIGNA EL TOTAL DE KILOMETROS A LOS KILOMETROS (cKms)
        console.log(`El dia ${cDias[i]}, ${cNombre} corrio ${cKms}kms`);
    }

    const cPromedioKms = lTotalKms / length; //AQUI SE DIVIDE EL TOTAL DE KM ENTRE LOS DIAS 
    console.log(`En promedio, ${cNombre} corrio ${cPromedioKms.toFixed(2)}kms, en la semana`);