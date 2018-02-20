function Mostrar()
{
	var min= 0, numero, max= -1000, primera= true;
	var contador=0;
	// declarar variables
	
	var respuesta='s';

	while(respuesta!='n')
	{
		numero = prompt("Ingrese un numero","");
		if (numero == "") {
			alert("Este campo está vacío");
			continue;
		}
		numero = parseInt(numero);
		if (isNaN(numero)==true) {
				alert("Esto no es un numero");
				break;
			}
		
		if(primera){
			primera= false;
			max=numero;
			min=numero;
		}
		else{
			if (numero>max) {
				max=numero;
			}
			else if(numero<min){
				min=numero;
			}
		}
		respuesta = prompt("Desea continuar? s/n","");
			
			if (respuesta == 'n') {
				break;
				}
			else if (respuesta == null) {
				break;
			}
	
	}

document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;

}//FIN DE LA FUNCIÓN