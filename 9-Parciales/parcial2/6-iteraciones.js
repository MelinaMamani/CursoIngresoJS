//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe, ventas, minVentas=1000000, maxVentas=1;

	for (var dias = 0; dias <7; dias++) {
		importe = prompt("Ingrese el importe de hoy: ","");
		importe = parseInt(importe);

		while (isNaN(importe) || importe==null || importe==0) {
            importe = prompt("Error. Reingrese el importe","");
            importe = parseInt(importe);
        }
		if (importe>maxVentas) {
			maxVentas=importe;
		}
		if(importe<minVentas){
			minVentas=importe;
		}
	}
	alert(" Venta mínima: "+minVentas+"\n Venta máxima: "+maxVentas);
	
}

