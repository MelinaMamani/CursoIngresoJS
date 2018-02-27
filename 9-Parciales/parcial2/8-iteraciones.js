//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var respuesta = "s";
	var num, contador=0, pares=0, prom, suma=0, min, max, primera=true;
	
	while (respuesta != "n") {
		
		num = prompt("Ingrese un número: ","");
		num = parseInt(num);

		while (isNaN(num) || num==null || num<0) {
            num = prompt("Error. Reingrese el número","");
            num = parseInt(num);
        }
		contador++;
		suma+= num;
		
		if (num%2==0) {
			pares++;
		}
		
		if(primera){
			primera= false;
			max=num;
			min=num;
		}
		if (num>max) {
			max=num;
		}
		if(num<min){
			min=num;
		}
		
		respuesta = prompt("Desea continuar? s/n","");
			
			if (respuesta == 'n') {
				break;
				}
			else if (respuesta == null) {
				break;
			}
	}

	prom= suma/contador;
	prom= prom.toFixed(2);

	document.write("a) Cantidad de números pares: "+pares+"<br>b) Promedio de los números ingresados: "+prom+
	"<br>c) Suma de los números: "+suma+"<br>d) El número máximo "+max+" y el mínimo "+min);
}

