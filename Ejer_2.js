// Simulamos la tabla que el estudiante debe repasar
let multiplicacion=0;
let bandera= false;
for(let i =0; i<=5; i++){
    if(bandera){
        break
    }
    for(let j=1; j<=10;j++){
        multiplicacion=(5*j);
        let valor = prompt("ingrese el valor de 5*"+j)
        if (valor == multiplicacion){
            alert("imprime el resultado de la "+multiplicacion)
        }
        else{
            bandera= true
            break
        }

    }

}
