function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo!="f" && sexo!="m") {
    sexo = prompt("Reingrese sexo f ó m","");
    
    if (sexo==null) {
        break;
    }
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN