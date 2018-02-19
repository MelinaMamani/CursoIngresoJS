function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Octubre":
    case "Diciembre": 
     alert("Este mes tiene 31 días.");
     break;
    case "Febrero":   
     alert("Este mes tiene 28 días.");
    case "Abril":
    case "Junio":
    case "Agosto":
    case "Septiembre":
    case "Noviembre":
        alert("Este mes tiene 30 días.")
    default:
        break;
}
	



}//FIN DE LA FUNCIÓN