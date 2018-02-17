/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
 	var precio1, precio2, precio3, suma;

    precio1= parseInt(document.getElementById("PrecioUno").value);
    precio2= parseInt(document.getElementById("PrecioDos").value);
    precio3= parseInt(document.getElementById("PrecioTres").value);
    
    suma= precio1+precio2+precio3;
    
    alert("La suma es: "+suma);
}
function Promedio () 
{
	var precio1, precio2, precio3, promedio;

    precio1= parseInt(document.getElementById("PrecioUno").value);
    precio2= parseInt(document.getElementById("PrecioDos").value);
    precio3= parseInt(document.getElementById("PrecioTres").value);
    
	promedio= (precio1+precio2+precio3)/3;
    
    alert("El promedio es: "+promedio);
}
function PrecioFinal () 
{
	var precio1, precio2, precio3, iva, precioFinal;

    precio1= parseInt(document.getElementById("PrecioUno").value);
    precio2= parseInt(document.getElementById("PrecioDos").value);
    precio3= parseInt(document.getElementById("PrecioTres").value);
    
	iva= ((precio1+precio2+precio3)*21)/100;
	precioFinal= precio1+precio2+precio3+iva;
    
    alert("El precio final es: "+precioFinal);
}