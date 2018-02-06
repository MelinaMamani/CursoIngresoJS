/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num1;
var num2;

function sumar()
{	
    num1= parseInt(document.getElementById("numeroUno").value);
    num2= parseInt(document.getElementById("numeroDos").value);
    suma= num1+num2;
    alert("La suma es "+suma);
}

function restar()
{
    num1= parseInt(document.getElementById("numeroUno").value);
    num2= parseInt(document.getElementById("numeroDos").value);
	resta= num1-num2;
    alert("La resta es "+resta);
}

function multiplicar()
{ 
    num1= parseInt(document.getElementById("numeroUno").value);
    num2= parseInt(document.getElementById("numeroDos").value);
	mult= num1*num2;
    alert("La multiplicación es "+mult);
}

function dividir()
{
    num1= parseInt(document.getElementById("numeroUno").value);
    num2= parseInt(document.getElementById("numeroDos").value);
	div= num1/num2;
    alert("La división es "+div);
}
