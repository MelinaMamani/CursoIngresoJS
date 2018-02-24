function Mostrar()
{
    var pares=0;
    var ingreso = prompt("Ingrese un número","");
    ingreso = parseInt(ingreso);

    // for(var i= ingreso; ingreso>0; i--)
    for (var i = 1; ingreso+1>i; i++) {
        
        while (isNaN(ingreso)) {
            ingreso = prompt("Reingrese un número","");
            ingreso = parseInt(ingreso);
        }
        
        if (i%2==0) {
            console.log(i);
            pares++;
        }
     }
     alert("Cantidad de números pares: "+pares);  
}//FIN DE LA FUNCIÓN