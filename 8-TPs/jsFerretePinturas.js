/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura, celsius;

    temperatura= parseInt(document.getElementById("Temperatura").value);

    celsius= (temperatura-32)/1.8;

    alert("Centígrados: "+celsius);
}

function CentigradosFahrenheit () 
{
	var temperatura, fahre;

    temperatura= parseInt(document.getElementById("Temperatura").value);

    fahre= (temperatura*1.8)+32;

    alert("Fahrenheit: "+fahre);
}
