function Mostrar()
{
  var importe, importe2, importeFinal;
  importe= prompt("Ingrese un importe","");
  importe= parseInt(importe);

  importe2= ((importe*25)/100);
  importeFinal= importe-importe2;
  document.getElementById("importeFinal").value = importeFinal;
}
