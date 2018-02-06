/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
    importe= parseInt(document.getElementById("importe").value);
    
    var resultado1;
    resultado1= ((importe*25)/100);
    var resultado2;
    resultado2= importe-resultado1;

    document.getElementById("resultado").value = resultado2;
}
