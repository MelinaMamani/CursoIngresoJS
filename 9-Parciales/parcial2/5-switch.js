//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;

	mes=prompt("Ingrese un mes del año","");
	
	switch (mes) {
		case "Enero":
		case "Febrero":
			alert("Es verano");
			break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Extraño enero y febrero");
			break;
	
		default:
			alert("No válido");
			break;
	}
}

