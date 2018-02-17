/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ancho, largo, metros, perimetro;

    ancho= parseInt(document.getElementById("Ancho").value);
    largo= parseInt(document.getElementById("Largo").value);

    perimetro= ((2*ancho)+(2*largo));
    metros= perimetro*3;
    alert("Rectangulo x 3 alam. = "+metros);
}
function Circulo () 
{
	var radio, total;

	radio= parseInt(document.getElementById("Radio").value);

	total= (radio/2)*3;
	alert("Radio x 3 alam. = "+total);
}
function Materiales () 
{
	var ancho, largo, area, bolsasCemento, bolsasCal;

    ancho= parseInt(document.getElementById("Ancho").value);
    largo= parseInt(document.getElementById("Largo").value);

    area= ancho*largo;
    bolsasCemento= area*2;
    bolsasCal= area*3;

    alert("Se necesitan "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" de cal");
}