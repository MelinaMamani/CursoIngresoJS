function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s', mensaje;

	/*while (respuesta != false) {
		contador++;
		numero = prompt("Ingrese un numero","");
		numero = parseInt(numero);
		acumulador += numero;
		respuesta = confirm("Desea continuar?");
			
			if (respuesta == false) {
				break;
				}
}*/
	while (respuesta != 'n') {
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
		acumulador += numero;
		contador++;
		respuesta = prompt("Desea continuar? s/n","");
			
			if (respuesta == 'n') {
				break;
				}
			else if (respuesta == null) {
				break;
			}
			
}
	 


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN