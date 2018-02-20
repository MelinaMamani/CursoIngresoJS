function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='s';

	while(respuesta == 's'){
		numero= prompt("Ingrese un número", "");
		if (numero == "") {
			alert("Este campo está vacío");
			continue;
		}
		numero = parseInt(numero);
		while(isNaN(numero)) {
				alert("Esto no es un numero");
				break;
			}
		if (numero>0) {
			positivo+=numero;
		}
		else{
			if (numero!=0) {
				negativo*=numero;
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

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN