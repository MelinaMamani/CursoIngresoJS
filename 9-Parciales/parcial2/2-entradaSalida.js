//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
  var importe1;
  importe1= prompt("Ingrese un importe","");
  importe1= parseInt(importe1);
  
  var importe2;
  importe2= ((importe1*21)/100);
  
  var importe;
  
  importe= importe1 + importe2;
  document.getElementById("importe").value= importe; 
 }

