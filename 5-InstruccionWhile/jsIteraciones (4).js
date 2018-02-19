function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.","");
	numero = parseInt(numero);

	while (numero<0 || numero>9) {
		numero = prompt("Reingrese un numero entre 0 y 9","");
		if (numero!=null) {
			break;
		}
	}
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN