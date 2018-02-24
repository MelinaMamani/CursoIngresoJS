function Mostrar()
{
    for (var i=0;  ; i++) {
        
        var ingreso = prompt("Ingrese un número","");
        ingreso = parseInt(ingreso);
        
        while (isNaN(ingreso)) {
            ingreso = prompt("Reingrese un número","");
            ingreso = parseInt(ingreso);
        }
        if (ingreso==9) {
            break;
        }
    }



}//FIN DE LA FUNCIÓN