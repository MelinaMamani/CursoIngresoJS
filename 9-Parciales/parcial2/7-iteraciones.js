//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota, sexo, sumaN=0, prom, notaBaja=100, cantV=0; 
	
	for (var alum = 0; alum < 6; alum++) {
		
		nota = prompt("Ingrese la nota del alumno","");
		nota = parseInt(nota);

		while (isNaN(nota) || nota==null || nota<0 || nota>10) {
            nota = prompt("Error. Reingrese la nota","");
            nota = parseInt(nota);
        }
		sumaN+= nota;

		sexo = prompt("Ingrese el sexo del alumno f ó m","");

		while (sexo.toLowerCase() !="f" && sexo.toLowerCase() !="m") {
                sexo = prompt("Reingrese sexo f ó m","");
                
                while (sexo==null) {
                    sexo = prompt("Reingrese sexo f ó m","");
                }
        }
		/*if (nota<notaBaja) {
			notaBaja=nota;
		}*/
		if (alum==1) {
			notaBaja=nota;
		}
		else if (nota<notaBaja) {
			notaBaja=nota;
		}
		if (sexo.toLowerCase()=="m" && nota>=6) {
			cantV++;
		}
	}
	prom= sumaN/alum;
	alert(" 1) Promedio: "+prom+"\n 2) Nota más baja: "+notaBaja+"\n 3) Cant. varones aprobados con 6 o más: "+cantV);
}

