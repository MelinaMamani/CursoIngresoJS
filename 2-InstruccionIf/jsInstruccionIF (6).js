function Mostrar()
{
  var edad;
  edad= document.getElementById("edad").value;

  if(edad>=18){
      alert("Es mayor de edad");
  }
  else if(edad>=13 && edad<=17){
            alert("Es adolescente");
    } 
  else if(edad<13){
                alert("Es un niño");
    }  



}//FIN DE LA FUNCIÓN