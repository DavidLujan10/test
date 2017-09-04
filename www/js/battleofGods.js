let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

let lRound = 0;

const GokuSigueVivo = () => vidaGoku > 0;

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0; //AQUI REGRESA UN VALOR SABIENDO QUE LOS 2 ESTAN VIVOS

const ambosMuertos = () => vidaGoku === 0 && vidaSuperman === 0 ; //

//AQUI CALCULA CON 
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

while(ambosSiguenVivos()){//SE PARA EL CICLO HASTA QUE UNO DE LOS 2 SIGA VIVO
    lRound++;
    console.log(`Round ${lRound}`);

    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();

    //AQUI RESTAMOS LOS GOLPES QUE RECIBEN AMBOS
    if(golpeGoku > golpeSuperman){
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
        vidaSuperman -= golpeGoku;
        console.log(`Superman queda en ${vidaSuperman} de vida`);
    }
    else{
        console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
        vidaGoku -= golpeSuperman;
        console.log(`Goku queda en ${vidaGoku} de vida`);
    }

}

if(GokuSigueVivo()){
    console.log(`Goku gano la pelea. Su vida es de: ${vidaGoku}`);
}
else{
    console.log(`Superman gano la pelea. Su vida es de: ${vidaSuperman}`)
}
