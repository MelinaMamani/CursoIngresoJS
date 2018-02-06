function Mostrar()
{
  var importe;
  importe= prompt("Ingrese un importe","");
  importe= parseInt(importe);
  
  var importe2;
  importe2= ((importe*21)/100);
  
  var impoteFinal;
  importeFinal= importe + importe2;
  document.getElementById("importeFinal").value= importeFinal; 
}
