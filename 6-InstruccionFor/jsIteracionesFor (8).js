function Mostrar()
{
    var div=0, msj;
    var rep = prompt("Ingrese un número","");
    rep = parseInt(rep);
    
    for (var i = 2; i<rep; i++) {
        while (isNaN(rep)) {
            rep = prompt("Reingrese un número","");
            rep = parseInt(rep);
        }
        if (rep%i==0) {
            /*msj= "No es primo"
            break;*/
            div++;
        }
       }
    if(div>=1){
            msj= "No es primo";
        }
    else{
        msj="Es primo";
    }
    alert(msj);


}//FIN DE LA FUNCIÓN