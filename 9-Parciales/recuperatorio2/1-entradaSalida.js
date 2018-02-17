//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base, perimetro;
	base= parseInt(document.getElementById("lado").value);
	perimetro= base*3;

	alert("Perímetro = "+perimetro);
}

