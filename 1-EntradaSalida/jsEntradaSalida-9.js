/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    sueldo= parseInt(document.getElementById("sueldo").value);
    
    var resultado1;
    resultado1= ((sueldo*10)/100);
    var resultado2;
    resultado2= sueldo+resultado1;

    document.getElementById("resultado").value = resultado2;
}
