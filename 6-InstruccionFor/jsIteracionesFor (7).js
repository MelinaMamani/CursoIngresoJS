function Mostrar()
{
    var divisores=0, msv;
    var rep = prompt("Ingrese un número","");
    rep = parseInt(rep);

    for (var i=rep; i>0 ; i--){
        while (isNaN(rep)) {
            rep = prompt("Reingrese un número","");
            rep = parseInt(rep);
        }
        if (rep%i==0) {
            msv= msv+i+" ";
            divisores++;
         }
     }
    alert("Divisores: "+msv+"   Cantidad de divisores: "+divisores);
}//FIN DE LA FUNCIÓN