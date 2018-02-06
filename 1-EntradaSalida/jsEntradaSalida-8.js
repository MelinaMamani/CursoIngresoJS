/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
    dividendo= parseInt(document.getElementById("numeroDividendo").value);
    var divisor;
    divisor= parseInt(document.getElementById("numeroDivisor").value);

    cociente = dividendo/divisor;
    var resto;
    resto = (divisor * cociente)-dividendo; 
    alert("El resto es "+resto);
}
