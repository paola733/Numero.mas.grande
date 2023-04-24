let peso=29;
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
        console.log(resto);
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
      console.log(resto);
    }
    flujo += resto*4;
    return flujo;
    console.log(flujo)
}
