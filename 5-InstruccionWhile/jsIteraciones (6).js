function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;


	while (contador<5) {
		contador++;
		numero = prompt("Ingrese un numero","");
		numero = parseInt(numero);
		acumulador += numero;
	}

document.getElementById('suma').value=acumulador;
var resultado;
resultado = acumulador/contador;
document.getElementById('promedio').value=resultado;

}//FIN DE LA FUNCIÓN