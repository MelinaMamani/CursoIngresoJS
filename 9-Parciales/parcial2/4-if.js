//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1, num2, mult, resta, suma;

	   num1 = prompt("Ingrese un número","");
       num1 = parseInt(num1);
   
   		 while (isNaN(num1) || num1==null) {
            num1 = prompt("Error. Reingrese el número","");
            num1 = parseInt(num1);
            }
		
	   num2 = prompt("Ingrese otro número","");
       num2 = parseInt(num2);
   
   		 while (isNaN(num2) || num2==null) {
            num2 = prompt("Error. Reingrese el número","");
            num2 = parseInt(num2);
            }
	
		if (num1==num2) {
			mult= num1*num2;
		}
		else if (num1>num2) {
			resta= num1-num2;
		}
		else {
			suma= num1+num2;
		}

	document.write("Número uno: "+num1+"<br>Número dos: "+num2+"<br>Mult: "+mult+"<br>Resta: "+resta+"<br>Suma: "+suma);
}

