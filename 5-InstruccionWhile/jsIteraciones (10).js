function Mostrar()
{

	//Contadores
	var pares= 0;
	var negativos= 0;
	var positivos= 0;
	var ceros = 0;
	//Otras variables
	var numPositivo, numNegativo;
	var respuesta="s";
	var sumaP= 0, sumaN= 0, promedioP, promedioN, diferencia;
	
	while(respuesta!="n")
	{
		//Ingresa números
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

		//Comparación
		
		if (numero==0) {
			ceros++;
		}
		else if(numero!=0){
			
			if (numero<0) {
				numNegativo = numero;
				sumaN += numNegativo;
				negativos++;
				promedioN = sumaN/negativos;  
			}
			else if (numero>0) {
				numPositivo = numero;
				sumaP+= numPositivo;
				positivos++;
				promedioP = sumaP/positivos;
			}
			diferencia = sumaP-(sumaN);
		
		}
		if(numero%2==0 && numero!=0) {
				pares++;
		}
		//Pregunto al usuario
		respuesta = prompt("Desea continuar? s/n","");
			
			if (respuesta == 'n') {
				break;
				}
			else if (respuesta == null) {
				break;
			}
	}
	document.write("<br>1- Suma de los negativos. "+sumaN+" <br>2- Suma de los positivos. "+sumaP+" <br>3- Cantidad de positivos. "+positivos);
	document.write("<br>4- Cantidad de negativos. "+negativos+" <br>5- Cantidad de ceros. "+ceros+" <br>6- Cantidad de números pares. "+pares);
	document.write("<br>7- Promedio de positivos. "+promedioP+" <br>8- Promedios de negativos. "+promedioN+" <br>9- Diferencia: "+diferencia);


}//FIN DE LA FUNCIÓN