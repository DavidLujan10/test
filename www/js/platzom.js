//PRIMERA REGLA: SI LA PALABRA TERMINA EN "AR", SE LE QUITAN LOS ULTIMOS 2 CARACTERES

function platzom(str){//
    let lTranslation = str;

    if(str.toLowerCase().endsWith('ar')){
        lTranslation = str.slice(0,-2);
    }

    //SEGUNDA REGLA: SI LA PALABRA TERMINA EN "Z", SE LE AÑADE "PE" AL FINAL DE LA PALABRA

    if(str.toLowerCase().startsWith('z')){
    lTranslation += 'pe';
    }

    //TERCERA REGLA: SI LA PALABRA TRADUCIDA TIENE 10 O MAS LETRAS SE DEBE PARTIR A LA MITAD Y UNIR CON UN GUION

    /*ESTA ES UNA SOLUCION
    let i = str.length;
    let lMinus = str.toLowerCase();
    if(lMinus.length >= 10){
    let lPartir= str.slice(i/2);
    //let fHalf = str.slice((i/2))
    lTranslation = str.slice(0,-(i/2)) + '-' + lPartir;
    }*/
    
    //SOLUCION DEL PROFE
    let length = lTranslation.length;//REGRESA EL VALOR DE LA PALABRA TRADUCIDA
    if(length >= 10){
        const fHalf = lTranslation.slice(0,Math.round(length/2));
        const sHalf = lTranslation.slice(Math.round(length/2));
        lTranslation = `${fHalf} - ${sHalf}`;
    }

    /*CUARTA REGLA: SI LA PALABRA ORIGINAL ES UN PALINDROMO NINGUNA DE LAS ANTERIORES FUNCIONA, Y SE DEVUELVE
    LA PALABRA INTERCALANDO ENTRE MAYUSCULA Y MINUSCULAS*/

    const reverse = (str) => str.split('').reverse().join('');
    function minMay(str){
        const l = str.length;
        let lTranslation = "";
        let lCapitalize = true;
        for(let i = 0; i < l; i++){
            const char = str.charAt(i);//AQUI REGRESA EL VALOR DEL STRING POR CARACTER
            lTranslation += lCapitalize ? char.toUpperCase() : char.toLowerCase();//OPERADOR TERNARIO
        }
    }
    
    if(str = reverse(str)){
        return minMay(str);
    }



    return lTranslation;//SOLO ES UN return PARA CADA FUNCION
}

console.log(platzom("Contar"));//PRIMERA REGLA
console.log(platzom("Programar"));//PRIMERA REGLA
console.log(platzom("Echar"));//PRIMERA REGLA
console.log(platzom("Zorro"));//SEGUNDA REGLA
console.log(platzom("understand"));//TERCERA REGLA
console.log(platzom(""));//CUARTA REGLA


